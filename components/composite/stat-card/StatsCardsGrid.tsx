import { StatsGridPropsUI } from "./interface";
import { StatCard } from "./StatCard";
import { Activity, Thermometer, FileText, Database, Calendar } from "lucide-react";



export const StatsCardsGrid = ({ data }: StatsGridPropsUI) => {

  const statsConfig = [
    { 
      id: "total", 
      label: "Total Reports", 
      value: data.totalReports, 
      icon: <FileText size={18} className="text-blue-500" />, 
      delay: 0 
    },
    { 
      id: "vibrations", 
      label: "Vibrations", 
      value: data.vibrationCount, 
      icon: <Activity size={18} className="text-amber-500" />, 
      delay: 150 
    },
    { 
      id: "thermal", 
      label: "Thermal Scans", 
      value: data.thermalCount, 
      icon: <Thermometer size={18} className="text-red-500" />, 
      delay: 300 
    },
    { 
      id: "assets", 
      label: "Data Assets", 
      value: data.totalSize, 
      icon: <Database size={18} className="text-emerald-500" />, 
      delay: 450 
    },
    { 
      id: "activity", 
      label: "Last Month", 
      value: data.lastMonthCount, 
      icon: <Calendar size={18} className="text-purple-500" />, 
      delay: 600 
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
      {statsConfig.map((stat) => (
        <StatCard 
          key={stat.id} 
          label={stat.label} 
          value={stat.value} 
          icon={stat.icon} 
          delay={stat.delay} 
        />
      ))}
    </div>
  );
};