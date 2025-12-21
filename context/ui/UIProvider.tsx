'use client';

import { useState, useCallback, ReactNode } from 'react';
import { UIContext } from '@/context';
import { ToastStateUI, ToastType } from '@/interfaces';
import { ToastDefault } from '@/components/base';

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastStateUI>({
    show: false,
    message: "",
    type: "info",
  });

  const notify = useCallback((message: string, type: ToastType) => {
    setToast({ show: true, message, type });
  }, []);


  const hideNotify = useCallback(() => {
    setToast((prev) => ({ ...prev, show: false }));
  }, []);

  return (
    <UIContext.Provider value={{ notify, hideNotify }}>
      {children}
      
      <ToastDefault 
        isVisible={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={hideNotify}
      />
    </UIContext.Provider>
  );
};