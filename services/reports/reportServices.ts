import { ReportUI, PaginatedResponseUI } from "@/interfaces";
import { INITIAL_REPORTS } from "@/mocks";
import { delayTime } from "@/utils/delay-time/delayTime";

export const reportService = {
  fetchReports: async (
    query: string = "", 
    page: number = 1, 
    limit: number = 6
  ): Promise<PaginatedResponseUI> => {
    const allReports: ReportUI[] = INITIAL_REPORTS;
    const filteredData = allReports.filter((report) =>
      report.name.toLowerCase().includes(query.toLowerCase())
    );

    const totalItems = filteredData.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / limit));
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    const response: PaginatedResponseUI = {
      data: paginatedData,
      meta: {
        totalItems,
        totalPages,
        currentPage: page,
        limit
      }
    };

    return delayTime<PaginatedResponseUI>(1.5, 'success', response);
  },
};