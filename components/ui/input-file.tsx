"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, X } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { showToast } from "@/lib/utils";

interface FileWithPreview extends File {
  preview: string;
}

interface InputFileProps {
  onFilesChange: (files: File[]) => void;
  init?: boolean;
  setInit?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20 Mo en octets

export default function InputFile({
  onFilesChange,
  init,
  setInit,
}: InputFileProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragActive, setIsDragActive] = useState(false);
  const [totalSize, setTotalSize] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (init) {
      if (setInit) {
        setFiles([]);
        setInit(false);
      }
    }
  }, [init, setInit]);

  useEffect(() => {
    const newTotalSize = files.reduce((sum, file) => sum + file.size, 0);
    setTotalSize(newTotalSize);

    if (newTotalSize > MAX_FILE_SIZE) {
      showToast(
        "La taille totale des fichiers dépasse la limite de 20 Mo.",
        "error"
      );
    }

    // Call the parent callback with the updated files
    onFilesChange(files);
  }, [files, onFilesChange]);

  const handleFiles = (newFiles: FileList | null) => {
    if (newFiles) {
      const newFilesArray = Array.from(newFiles).map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      const newTotalSize = [...files, ...newFilesArray].reduce(
        (sum, file) => sum + file.size,
        0
      );

      if (newTotalSize > MAX_FILE_SIZE) {
        showToast(
          "La taille totale des fichiers dépasse la limite de 20 Mo.",
          "error"
        );
        return;
      }

      setFiles((prevFiles) => [...prevFiles, ...newFilesArray]);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleFiles(e.target.files);
  };

  const removeFile = (e: React.MouseEvent, file: FileWithPreview) => {
    e.preventDefault();
    setFiles(files.filter((f) => f !== file));
    URL.revokeObjectURL(file.preview);
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <>
      <Toaster />
      <div
        className="p-6 border-2 border-gray-300 border-dashed rounded-lg text-center"
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
      >
        <Input
          type="file"
          ref={fileInputRef}
          onChange={onChange}
          style={{ display: "none" }}
          multiple
          name="file"
        />
        <div className="mb-4">
          {isDragActive ? (
            <p className="text-blue-500">Déposez les fichiers ici ...</p>
          ) : (
            <div>
              <Upload size={35} className="mx-auto text-neutral-600" />
              <p className="mt-2">
                Glissez et déposez des fichiers ici, ou cliquez pour
                sélectionner des fichiers
              </p>
              <p className="mt-2 text-gray-500 text-sm">
                Limite de taille : {formatSize(MAX_FILE_SIZE)}
              </p>
            </div>
          )}
        </div>
        <Button onClick={onClick}>Sélectionner des fichiers</Button>
        {files.length > 0 && (
          <div className="mt-4">
            <h4 className="mb-2 font-semibold text-lg">
              Fichiers sélectionnés:
            </h4>
            <p className="mb-2 text-gray-500 text-sm">
              Taille totale : {formatSize(totalSize)}
            </p>
            <ul className="space-y-2">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center gap-2 bg-gray-100/5 p-2 rounded text-sm"
                >
                  <span className="text-left">
                    {file.name} ({formatSize(file.size)})
                  </span>
                  <button
                    onClick={(e) => removeFile(e, file)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X size={20} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
