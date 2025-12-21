export type DialogTypes =   "idle" | "uploading" | "success" | "error"

export interface DialogUploadUI {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess: (file: File) => void;
}
