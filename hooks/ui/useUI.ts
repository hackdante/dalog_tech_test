'use client';

import { useContext } from 'react';
import { UIContext } from '@/context/ui/UIContext';

export const useUI = () => {
  const context = useContext(UIContext);
  
  if (!context) {
    throw new Error("We’re sorry, there is an error.");
  }
  
  return context;
};