export type ReportType = "Vibration" | "Thermal" | "Other";

export interface ReportUI {
  id: string;
  name: string;
  size: string;
  type: ReportType;
  date: string;
}

export type ReportStatusType = "idle" | "loading" | "success" | "error";

export interface PaginationMetadataUI {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}

export interface PaginatedResponseUI {
  data: ReportUI[];
  meta: PaginationMetadataUI;
}

export interface ReportStateUI {
  filteredReports: ReportUI[];
  status: ReportStatusType; 
  searchTerm: string;
  error: string | null;
  pagination: PaginationMetadataUI;
}

export interface ReportContextUI extends ReportStateUI {
  handleSearch: (query: string) => Promise<void>;
  handlePageChange: (page: number) => Promise<void>;
  loadReports: (page?: number, query?: string) => Promise<void>;
  addReport: (report: ReportUI) => void;
  status: ReportStatusType;
}

