'use client';

import React, { useState, useCallback, ReactNode } from 'react';
import { ReportContext } from './ReportContext';
import { ReportUI, ReportStatusType } from '@/interfaces';
import { reportService } from '@/services';

export const ReportProvider = ({ children }: { children: ReactNode }) => {
  const [reports, setReports] = useState<ReportUI[]>([]);
  const [filteredReports, setFilteredReports] = useState<ReportUI[]>([]);
  const [status, setStatus] = useState<ReportStatusType>('idle');
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

  const loadReports = useCallback(async () => {
    setStatus('loading');
    try {
      const data = await reportService.fetchReports();
      setReports(data);
      setFilteredReports(data);
      setStatus('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setStatus('error');
    }
  }, []);

  const handleSearch = useCallback(async (query: string) => {
    setSearchTerm(query);
    setStatus('loading');
    try {
      const filtered = await reportService.fetchReports(query);
      setFilteredReports(filtered);
      setStatus('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
      setStatus('error');
    }
  }, []);

  return (
    <ReportContext.Provider value={{ 
      reports, 
      filteredReports, 
      status, 
      searchTerm, 
      error, 
      handleSearch, 
      loadReports 
    }}>
      {children}
    </ReportContext.Provider>
  );
};