"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Upload, File, Loader2, X, Check } from "lucide-react";

export default function FileUpload() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === "application/pdf") {
        setFile(droppedFile);
      }
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  
  const handleRemoveFile = () => {
    setFile(null);
    setUploadProgress(0);
    setUploading(false);
    setUploadComplete(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  
  const handleUpload = () => {
    if (!file) return;
    
    setUploading(true);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setUploadComplete(true);
          simulateProcessing();
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };
  
  const simulateProcessing = () => {
    setProcessing(true);
    // Simulate processing time
    setTimeout(() => {
      setProcessing(false);
      router.push("/quiz");
    }, 3000);
  };
  
  return (
    <div className="w-full">
      {!file && (
        <div
          className={`border-2 border-dashed rounded-lg p-6 ${
            isDragging 
              ? "border-primary bg-primary/5" 
              : "border-border hover:border-primary/50 hover:bg-muted/50"
          } transition-all duration-200 cursor-pointer`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-medium">Drag & drop your PDF here</p>
              <p className="text-sm text-muted-foreground mt-1">
                or click to browse files (PDF only)
              </p>
            </div>
          </div>
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
      )}
      
      {file && (
        <div className="border rounded-lg p-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                <File className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB • PDF
                </p>
              </div>
            </div>
            {!uploading && !uploadComplete && !processing && (
              <button 
                onClick={handleRemoveFile}
                className="text-muted-foreground hover:text-destructive"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          
          {!uploading && !uploadComplete && !processing && (
            <div className="mt-5">
              <button
                onClick={handleUpload}
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Upload and Generate Questions
              </button>
            </div>
          )}
          
          {(uploading || uploadComplete || processing) && (
            <>
              <div className="mt-4">
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300 ease-in-out"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mt-2 flex items-center justify-between">
                <div className="text-sm">
                  {uploading && "Uploading..."}
                  {uploadComplete && !processing && (
                    <span className="flex items-center text-green-600">
                      <Check className="h-4 w-4 mr-1" />
                      Upload complete
                    </span>
                  )}
                  {processing && "Generating questions..."}
                </div>
                <div className="text-sm font-medium">
                  {uploading && `${uploadProgress}%`}
                  {processing && (
                    <div className="flex items-center">
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}
      
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-2">Tips for better results</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start">
            <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
              <span className="text-xs font-medium text-primary">1</span>
            </span>
            Upload clear, well-formatted PDF files for best recognition
          </li>
          <li className="flex items-start">
            <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
              <span className="text-xs font-medium text-primary">2</span>
            </span>
            Files with headings and structured content work best
          </li>
          <li className="flex items-start">
            <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
              <span className="text-xs font-medium text-primary">3</span>
            </span>
            Ensure text is selectable in your PDF (not scanned images)
          </li>
        </ul>
      </div>
    </div>
  );
}