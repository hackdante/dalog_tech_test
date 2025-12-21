"use client";

import { useState, useCallback, ReactNode } from "react";
import { ReportContext } from "./ReportContext";
import { ReportUI, ReportStatusType, PaginationMetadataUI } from "@/interfaces";
import { reportService } from "@/services";

const INITIAL_PAGINATION: PaginationMetadataUI = {
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
  limit: 6,
};

export const ReportProvider = ({ children }: { children: ReactNode }) => {
  const [filteredReports, setFilteredReports] = useState<ReportUI[]>([]);
  const [status, setStatus] = useState<ReportStatusType>("idle");
  const [searchTerm, setSearchTerm] = useState("");
  const [pagination, setPagination] = useState<PaginationMetadataUI>(INITIAL_PAGINATION);
  const [error, setError] = useState<string | null>(null);

  const loadReports = useCallback(
    async (page: number = 1, query: string = "") => {
      setStatus("loading");
      try {
        const response = await reportService.fetchReports(
          query,
          page,
          INITIAL_PAGINATION.limit
        );
        setFilteredReports(response.data);
        setPagination(response.meta);
        setStatus("success");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error syncing data");
        setStatus("error");
      }
    },
    []
  );

  const addReport = useCallback((newReport: ReportUI) => {
    setFilteredReports((prev) => [newReport, ...prev]);
    setPagination((prev) => {
      const newTotalItems = prev.totalItems + 1;
      return {
        ...prev,
        totalItems: newTotalItems,
        totalPages: Math.ceil(newTotalItems / prev.limit),
      };
    });
  }, []);

  const handleSearch = useCallback(
    async (query: string) => {
      setSearchTerm(query);
      await loadReports(1, query);
    },
    [loadReports]
  );

  const handlePageChange = useCallback(
    async (page: number) => {
      await loadReports(page, searchTerm);
    },
    [loadReports, searchTerm]
  );

  return (
    <ReportContext.Provider
      value={{
        filteredReports,
        status,
        searchTerm,
        pagination,
        error,
        handleSearch,
        handlePageChange,
        loadReports,
        addReport, 
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};