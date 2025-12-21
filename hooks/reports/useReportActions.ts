"use client";

import { useCallback } from 'react';
import { useReports, useUI } from '@/hooks';
import { ReportUI } from '@/interfaces';

export const useReportActions = () => {
  const { notify } = useUI();
  const { 
    addReport 
  } = useReports();

  const createAndAddReport = useCallback((file: File) => {
    try {
      const extension = file.name.split('.').pop()?.toLowerCase();
      let type: ReportUI["type"] = "Other";
      if (extension === 'csv') type = "Vibration";
      if (extension === 'pdf') type = "Thermal";

      const newReport: ReportUI = {
        id: crypto.randomUUID(),
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        type,
        date: new Date().toISOString(),
      };

      if (addReport) {
        addReport(newReport);
        notify(`Report "${file.name}" added to diagnostic archives.`, "success");
      } else {
        console.error("Critical: addReport is not defined in ReportContext");
        notify("Action not available. Please contact admin.", "error");
      }
      
    } catch (error) {
      notify("Failed to process the report file.", "error");
      console.error(error);
    }
  }, [addReport, notify]);

  return {
    createAndAddReport
  };
};