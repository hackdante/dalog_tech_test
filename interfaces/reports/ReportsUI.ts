export type ReportType = "Vibration" | "Thermal" | "Other";

export interface ReportUI {
  id: number;
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
