"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import JSZip from "jszip";
import Link from "next/link";
import type * as PDFJS from "pdfjs-dist";

function PdfToJpgToolInner() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pdfjsLib, setPdfjsLib] = useState<typeof PDFJS | null>(null);

  useEffect(() => {
    const loadPdfjs = async () => {
      const pdfjs = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.mjs`;
      setPdfjsLib(pdfjs);
    };
    loadPdfjs();
  }, []);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const convert = async () => {
    if (!file || !pdfjsLib) return;
    setLoading(true);
    setProgress(0);

    try {
      const pdfBytes = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: pdfBytes }).promise;
      const zip = new JSZip();

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d")!;
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: ctx,
          viewport,
        }).promise;

        const blob = await new Promise<Blob>((resolve) =>
          canvas.toBlob((b) => resolve(b!), "image/jpeg", 0.95)
        );

        zip.file(`page-${i}.jpg`, blob);
        setProgress(Math.round((i / pdf.numPages) * 100));
      }

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name.replace(".pdf", "") + "-images.zip";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Failed to convert PDF to JPG");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center w-full pt-2 pb-8 px-4 relative">
      <div className="max-w-[1024px] w-full flex flex-col gap-4">

        <Link
          href="/"
          className="flex items-center gap-1.5 text-gray-500 hover:text-black dark:hover:text-white transition-colors text-xs font-medium w-fit"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back to all tools
        </Link>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-black dark:bg-white rounded-lg text-white dark:text-black mx-auto">
            <span className="material-symbols-outlined text-xl">image</span>
          </div>
          <h1 className="text-xl font-black tracking-tight mt-2">PDF to JPG</h1>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-1">
            Convert each PDF page into a high-quality JPG image.
          </p>
        </div>

        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-5 shadow-sm flex flex-col items-stretch">

          <div className="flex-1 w-full flex flex-col gap-4">
            <div className="relative group flex flex-col items-center justify-center border-2 border-dashed border-gray-200 dark:border-neutral-700 rounded-lg p-10 transition-colors hover:border-black dark:hover:border-white cursor-pointer">
              <input
                type="file"
                accept="application/pdf"
                onChange={handleSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <span className="material-symbols-outlined text-2xl text-gray-300 group-hover:text-black dark:group-hover:text-white mb-1">
                upload_file
              </span>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                {file ? file.name : "Click or drag PDF"}
              </p>
            </div>

            {file && (
              <div className="flex flex-col gap-3">
                <button
                  onClick={convert}
                  disabled={loading || !pdfjsLib}
                  className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all ${loading
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black shadow-sm"
                    }`}
                >
                  {loading ? `Converting (${progress}%)...` : "Convert to JPG Now"}
                </button>

                {loading && (
                  <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-black dark:bg-white h-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {!pdfjsLib && (
        <div className="fixed bottom-6 right-6 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <div className="w-3 h-3 border-2 border-black dark:border-white border-t-transparent animate-spin rounded-full" />
          <span className="text-[11px] font-bold uppercase tracking-tight">Initializing Tools...</span>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default dynamic(() => Promise.resolve(PdfToJpgToolInner), {
  ssr: false,
});