"use client";

import { useState, useEffect } from "react";
import {
  FileText,
  Activity,
  Thermometer,
  Download,
  LayoutGrid,
  List,
} from "lucide-react";
import { useReports } from "@/hooks";
import { ReportUI } from "@/interfaces";
import { SpinnerDefault } from "@/components/base";

export function ReportList() {
  const { filteredReports, status, loadReports } = useReports();
  const [viewMode, setViewMode] = useState<"grid" | "details">("grid");

  useEffect(() => {
    loadReports();
  }, [loadReports]);

  const getTypeConfig = (type: ReportUI["type"]) => {
    switch (type) {
      case "Vibration":
        return {
          icon: <Activity size={18} />,
          color: "text-amber-500",
          bg: "bg-amber-50 dark:bg-amber-950/30",
        };
      case "Thermal":
        return {
          icon: <Thermometer size={18} />,
          color: "text-red-500",
          bg: "bg-red-50 dark:bg-red-950/30",
        };
      default:
        return {
          icon: <FileText size={18} />,
          color: "text-blue-500",
          bg: "bg-blue-50 dark:bg-blue-950/30",
        };
    }
  };

  if (status === "loading") {
    return (
      <div className="w-full h-96 flex flex-col items-center justify-center animate-in fade-in duration-500">
        <SpinnerDefault size="lg" label="Synchronizing diagnostics…." />
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
          Diagnostic Archives ({filteredReports.length})
        </h3>
        <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-xl border border-zinc-200 dark:border-zinc-700">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-1.5 rounded-lg transition-all ${
              viewMode === "grid"
                ? "bg-white dark:bg-zinc-700 shadow-sm text-blue-600"
                : "text-zinc-400"
            }`}
          >
            <LayoutGrid size={16} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => setViewMode("details")}
            className={`p-1.5 rounded-lg transition-all ${
              viewMode === "details"
                ? "bg-white dark:bg-zinc-700 shadow-sm text-blue-600"
                : "text-zinc-400"
            }`}
          >
            <List size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {filteredReports.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed border-zinc-100 dark:border-zinc-800 rounded-3xl">
          <p className="text-zinc-400 text-sm font-bold">
            No diagnostic reports found.
          </p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredReports.map((report) => {
            const config = getTypeConfig(report.type);
            return (
              <div
                key={report.id}
                className="group p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/60 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-2xl ${config.bg} ${config.color}`}
                  >
                    {config.icon}
                  </div>
                  <span className="text-[9px] font-bold px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 uppercase">
                    {report.name.split(".").pop()}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate mb-1">
                  {report.name}
                </h4>
                <div className="flex items-center gap-3 text-[10px] text-zinc-500 font-medium mb-4">
                  <span>{report.date}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-300" />
                  <span>{report.size}</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-[10px] font-black uppercase hover:bg-blue-600 hover:text-white transition-all">
                    View
                  </button>
                  <button className="p-2 rounded-xl border border-zinc-100 dark:border-zinc-800 text-zinc-400 hover:text-blue-600 transition-colors">
                    <Download size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800/60 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-50 dark:border-zinc-800 text-[9px] font-black text-zinc-400 uppercase tracking-widest">
                <th className="px-6 py-4">Document</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Size</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800">
              {filteredReports.map((report) => (
                <tr
                  key={report.id}
                  className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors"
                >
                  <td className="px-6 py-4 flex items-center gap-3">
                    <FileText size={16} className="text-zinc-400" />
                    <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 truncate max-w-200px">
                      {report.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase">
                    {report.type}
                  </td>
                  <td className="px-6 py-4 text-[10px] text-zinc-500 font-medium">
                    {report.date}
                  </td>
                  <td className="px-6 py-4 text-[10px] text-zinc-500 font-medium">
                    {report.size}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-zinc-400 hover:text-blue-600 transition-colors">
                      <Download size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
