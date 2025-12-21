export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastStateUI {
  show: boolean;
  message: string;
  type: ToastType;
}