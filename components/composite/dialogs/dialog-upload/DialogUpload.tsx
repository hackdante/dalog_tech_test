"use client";

import React, { useState, useCallback, useEffect } from "react";
import { X, Upload, CheckCircle2 } from "lucide-react";
import { ButtonDefault } from "@/components/base";
import { delayTime } from "@/utils";
import { DialogTypes, DialogUploadUI } from "./interface";

export const DialogUpload = ({
  isOpen,
  onClose,
  onUploadSuccess,
}: DialogUploadUI): React.ReactElement | null => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<DialogTypes>("idle");
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      setIsDragging(true);
    },
    []
  );

  const handleDragLeave = useCallback(
    (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      setIsDragging(false);
    },
    []
  );

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleInternalClose = (): void => {
    setFile(null);
    setUploadStatus("idle");
    setProgress(0);
    onClose();
  };

  const handleCompleteUpload = async (): Promise<void> => {
    if (!file) return;

    setUploadStatus("uploading");

    try {
      setProgress(20);
      await delayTime(0.4, "success");

      setProgress(55);
      await delayTime(0.8, "success");

      setProgress(90);
      await delayTime(0.8, "success");

      setProgress(100);
      setUploadStatus("success");

      await delayTime(0.5, "success");

      onUploadSuccess(file);
      handleInternalClose();
    } catch (err) {
      setUploadStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="upload-dialog-title"
    >
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h2
            id="upload-dialog-title"
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Upload New Report
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {uploadStatus === "idle" && (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center transition-colors ${
                isDragging
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            >
              <Upload
                className={`w-12 h-12 mb-4 ${
                  isDragging ? "text-blue-500" : "text-gray-400"
                }`}
              />
              <p className="text-sm text-center mb-2 text-gray-700 dark:text-gray-300">
                {file ? (
                  <span className="font-bold">{file.name}</span>
                ) : (
                  "Drag your file here or click to browse"
                )}
              </p>
              <p className="text-xs text-gray-500">
                Supports PDF, CSV (Max. 1GB)
              </p>
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
                accept=".pdf,.csv"
              />
            </div>
          )}

          {uploadStatus === "uploading" && (
            <div className="py-8 flex flex-col items-center">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4 overflow-hidden">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Processing report... {progress}%
              </p>
              <div aria-live="polite" className="sr-only">
                Uploading report. Current progress: {progress} percent.
              </div>
            </div>
          )}

          {uploadStatus === "success" && (
            <div className="py-8 flex flex-col items-center text-green-600">
              <CheckCircle2 className="w-16 h-16 mb-2" />
              <p className="font-medium text-center text-gray-900 dark:text-white">
                Upload Successful!
              </p>
              <div aria-live="assertive" className="sr-only">
                File processed and added successfully.
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-6 flex gap-3 justify-end">
            <ButtonDefault
              variant="secondary"
              onClick={onClose}
              disabled={uploadStatus === "uploading"}
            >
              Cancel
            </ButtonDefault>
            <ButtonDefault
              onClick={handleCompleteUpload}
              disabled={
                !file ||
                uploadStatus === "uploading" ||
                uploadStatus === "success"
              }
            >
              Complete Upload
            </ButtonDefault>
          </div>
        </div>
      </div>
    </div>
  );
};
