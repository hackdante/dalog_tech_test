export type ReportType = "Vibration" | "Thermal" | "Other";
export type ReportStatusType = "idle" | "loading" | "success" | "error"; 

export interface ReportUI {
  id: number;
  name: string;
  size: string;
  type: ReportType;
  date: string;
}
export interface ReportStateUI {
  reports: ReportUI[];
  filteredReports: ReportUI[];
  status: ReportStatusType;
  searchTerm: string;
  error: string | null;
}