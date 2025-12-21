'use client';

import { useContext } from 'react';
import { ReportContext } from '@/context/reports/ReportContext';

export const useReports = () => {
  const context = useContext(ReportContext);
  
  if (!context) {
    throw new Error("useReports debe usarse dentro de un ReportProvider");
  }

  return context;
};