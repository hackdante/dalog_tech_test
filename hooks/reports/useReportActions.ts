"use client";

import { useCallback } from "react";
import { useReports, useUI } from "@/hooks";
import { ReportUI } from "@/interfaces";
import { reportService } from "@/services";

export const useReportActions = () => {
  const { loadReports, pagination } = useReports();
  const { notify } = useUI();

  const createAndAddReport = useCallback(
    async (file: File) => {
      try {
        const extension = file.name.split(".").pop()?.toLowerCase();

        const nextNumber = pagination.totalItems + 1;
        const newId = `REP${nextNumber.toString().padStart(2, "0")}`;

        let type: ReportUI["type"] = "Other";
        if (extension === "csv") type = "Vibration";
        if (extension === "pdf") type = "Thermal";

        const newReport: ReportUI = {
          id: newId,
          name: file.name,
          size: `${(file.size / (1024 * 1024)).toFixed(1)}MB`,
          type,
          date: new Date().toISOString().split("T")[0],
        };

        await reportService.saveReport(newReport);

        await loadReports(1);

        notify(`Report ${newId} synchronized successfully`, "success");
      } catch (error) {
        console.error("Error adding report:", error);
        notify("Failed to synchronize the new report", "error");
      }
    },
    [loadReports, pagination.totalItems, notify]
  );

  return { createAndAddReport };
};
