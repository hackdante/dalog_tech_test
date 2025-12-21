// hooks/reports/useDashboardCardStats.ts
import { useState, useEffect } from 'react';
import { getDashboardCardStats } from '@/services';

export const useDashboardCardStats = () => {
  const [stats, setStats] = useState({
    totalReports: 0,
    vibrationCount: 0,
    thermalCount: 0,
    totalSize: '0 MB',
    lastMonthCount: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardCardStats();
        setStats(data);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return { stats, loading };
};