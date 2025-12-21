// context/ui/UIContext.tsx
'use client';

import { createContext } from 'react';
import { ToastType } from '@/interfaces';

export interface UIContextProps {
  notify: (message: string, type: ToastType) => void;
  hideNotify: () => void;
}

export const UIContext = createContext<UIContextProps | undefined>(undefined);