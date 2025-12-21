// services/reports/reportCardService.ts
import { INITIAL_REPORTS } from "@/mocks";

export const getDashboardCardStats = async () => {

  await new Promise((resolve) => setTimeout(resolve, 800));
  const totalReports = INITIAL_REPORTS.length;
  const vibrationCount = INITIAL_REPORTS.filter(r => r.type === 'Vibration').length;
  const thermalCount = INITIAL_REPORTS.filter(r => r.type === 'Thermal').length;
  
  const totalSizeMB = INITIAL_REPORTS.reduce((acc, curr) => {
    const size = parseFloat(curr.size);
    return acc + (curr.size.includes('KB') ? size / 1024 : size);
  }, 0).toFixed(1);

  return {
    totalReports,
    vibrationCount,
    thermalCount,
    totalSize: `${totalSizeMB} MB`,
    lastMonthCount: 12
  };
};