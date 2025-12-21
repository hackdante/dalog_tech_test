// services/reports/reportService.ts
import { ReportUI } from "@/interfaces";
import { INITIAL_REPORTS } from "@/mocks";
import { delayTime } from "@/utils/delay-time/delayTime";

export const reportService = {
  fetchReports: async (query?: string): Promise<ReportUI[]> => {
    const filteredData = !query 
      ? INITIAL_REPORTS 
      : INITIAL_REPORTS.filter((report) =>
          report.name.toLowerCase().includes(query.toLowerCase())
        );

    return delayTime<ReportUI[]>(2, 'success', filteredData);
  },
};