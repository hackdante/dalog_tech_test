// components/composite/reports/ReportList.tsx
'use client';

import { useState, useEffect } from "react";
import { FileText, Activity, Thermometer, Download, LayoutGrid, List } from "lucide-react";
import { useReports } from "@/hooks";
import { ReportUI } from "@/interfaces";
import { SpinnerDefault, PaginationDefault } from "@/components/base";

export function ReportList() {
  const { filteredReports, status, loadReports, pagination, handlePageChange } = useReports();
  const [viewMode, setViewMode] = useState<"grid" | "details">("grid");

  useEffect(() => {
    loadReports();
  }, [loadReports]);

  const getTypeConfig = (type: ReportUI["type"]) => {
    const configs = {
      Vibration: { icon: <Activity size={18} />, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/30" },
      Thermal: { icon: <Thermometer size={18} />, color: "text-red-500", bg: "bg-red-50 dark:bg-red-950/30" },
      Other: { icon: <FileText size={18} />, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/30" }
    };
    return configs[type] || configs.Other;
  };

  if (status === "loading") {
    return (
      <div className="w-full h-96 flex flex-col items-center justify-center gap-4">
        <SpinnerDefault size="lg" label="Synchronizing diagnostics..." />
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
          Diagnostic Archives ({pagination.totalItems})
        </h3>

        <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-xl border border-zinc-200 dark:border-zinc-700">
          <button onClick={() => setViewMode("grid")} className={`p-1.5 rounded-lg transition-all ${viewMode === "grid" ? "bg-white dark:bg-zinc-700 shadow-sm text-blue-600" : "text-zinc-400"}`}>
            <LayoutGrid size={16} strokeWidth={2.5} />
          </button>
          <button onClick={() => setViewMode("details")} className={`p-1.5 rounded-lg transition-all ${viewMode === "details" ? "bg-white dark:bg-zinc-700 shadow-sm text-blue-600" : "text-zinc-400"}`}>
            <List size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {filteredReports.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed border-zinc-100 dark:border-zinc-800 rounded-3xl">
          <p className="text-zinc-400 text-sm font-bold">No results found.</p>
        </div>
      ) : (
        <>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in">
              {filteredReports.map((report) => {
                const config = getTypeConfig(report.type);
                return (
                  <div key={report.id} className="group p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/60 hover:shadow-xl transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-2xl ${config.bg} ${config.color}`}>{config.icon}</div>
                      <span className="text-[9px] font-bold px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 uppercase">{report.size}</span>
                    </div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate mb-4">{report.name}</h4>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-zinc-600 text-[10px] font-black uppercase hover:bg-blue-600 hover:text-white transition-all">View Report</button>
                      <button className="p-2 rounded-xl border border-zinc-100 dark:border-zinc-800 text-zinc-400 hover:text-blue-600 transition-colors">
                        <Download size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800/60 overflow-hidden animate-in fade-in">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-zinc-50 dark:border-zinc-800 text-[9px] font-black text-zinc-400 uppercase tracking-widest">
                    <th className="px-6 py-4">Document</th>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4">Size</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800">
                  {filteredReports.map((report) => (
                    <tr key={report.id} className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <FileText size={16} className="text-zinc-400" />
                        <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">{report.name}</span>
                      </td>
                      <td className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase">{report.type}</td>
                      <td className="px-6 py-4 text-[10px] text-zinc-500 font-medium">{report.size}</td>
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

          <div className="mt-8 pt-6 border-t border-zinc-50 dark:border-zinc-800/50">
            <PaginationDefault
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
              isLoading={(status as string) === "loading"}
            />
          </div>
        </>
      )}
    </div>
  );
}