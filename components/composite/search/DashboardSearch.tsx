'use client';

import { InputDefault } from '@/components/base';
import { Search, Filter } from 'lucide-react'; 
import { useReports } from '@/hooks';

export const DashboardSearch = () => {
  const { searchTerm, handleSearch } = useReports();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full items-center">
      <div className="w-full flex-1">
        <InputDefault 
          placeholder="Search by asset ID, diagnostic or date..."
          icon={<Search size={18} />}
          className="shadow-sm"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      
      <button className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200 shadow-sm whitespace-nowrap">
        <Filter size={16} />
        <span className="text-xs font-bold uppercase tracking-wider">Advanced Filters</span>
      </button>
    </div>
  );
};