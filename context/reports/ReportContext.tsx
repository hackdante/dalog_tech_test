'use client';

import { createContext } from 'react';
import { ReportContextUI } from '@/interfaces';

export const ReportContext = createContext<ReportContextUI | undefined>(undefined);