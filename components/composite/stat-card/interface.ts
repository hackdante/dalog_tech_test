import { ReactNode } from "react";

export interface StatCardPropsUI {
  label: string;
  value: string | number;
  icon: ReactNode;
  delay?: number; 
}

export interface StatsGridPropsUI {
  data: {
    totalReports: number;
    vibrationCount: number;
    thermalCount: number;
    totalSize: string;
    lastMonthCount: number;
  };
}
