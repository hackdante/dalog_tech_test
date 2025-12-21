'use client';

import { useContext } from 'react';
import { ReportContext } from '@/context/reports/ReportContext';

export const useReports = () => {
  const context = useContext(ReportContext);
  
  if (!context) {
    throw new Error("Sorry, please try again...");
  }

  return context;
};