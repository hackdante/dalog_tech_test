export type ReportType = 'Vibration' | 'Thermal' | 'Acoustic' | 'Other';

export interface ReportUI {
  id: number;
  name: string;
  size: string;
  type: ReportType;
  date: string;
}