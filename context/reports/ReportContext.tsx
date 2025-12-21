'use client';

import { createContext } from 'react';
import { ReportStateUI, ReportStatusType } from '@/interfaces';
export interface ReportContextUI extends ReportStateUI {
  handleSearch: (query: string) => Promise<void>;
  handlePageChange: (page: number) => Promise<void>;
  loadReports: (page?: number, query?: string) => Promise<void>;
  status: ReportStatusType;
}

export const ReportContext = createContext<ReportContextUI | undefined>(undefined);