'use client'

import { createContext } from 'react';
import { ReportStateUI } from '@/interfaces';

export interface ReportContextUI extends ReportStateUI {
  handleSearch: (query: string) => Promise<void>;
  loadReports: () => Promise<void>;
}

export const ReportContext = createContext<ReportContextUI | undefined>(undefined);