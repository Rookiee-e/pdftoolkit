"use client";

import './globals.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })()
            `
        }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      {/* REMOVED transition-colors duration-200 to stop jitter */}
      <body className="bg-[#f7f7f7] dark:bg-[#191919] text-[#141414] dark:text-white min-h-screen flex flex-col text-[14px]">

        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#191919]/80 backdrop-blur-md border-b border-[#f2f2f2] dark:border-neutral-800">
          <div className="max-w-[1024px] mx-auto px-4 sm:px-5">
            <div className="flex items-center justify-between h-12 gap-3">
              <Link href="/" className="flex items-center gap-1.5 shrink-0">
                <div className="flex items-center justify-center size-6 bg-[#141414] dark:bg-white rounded text-white dark:text-black">
                  <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                </div>
                <h1 className="text-lg font-bold tracking-tight hidden sm:block">PDF Tools</h1>
              </Link>

              <div className="flex items-center gap-3 shrink-0">
                {/* YOUR CUSTOM TOGGLE */}
                <div className="toggle-wrapper">
                  <input
                    className="toggle-checkbox"
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  <div className="toggle-container">
                    <div className="toggle-button">
                      <div className="toggle-button-circles-container">
                        <div className="toggle-button-circle"></div>
                        <div className="toggle-button-circle"></div>
                        <div className="toggle-button-circle"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="px-3 py-1.5 text-xs font-bold text-white bg-[#141414] dark:bg-white dark:text-black hover:opacity-90 rounded-md shadow-sm">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="w-full bg-white dark:bg-[#191919] border-t border-[#f2f2f2] dark:border-neutral-800 mt-auto">
          <div className="max-w-[1024px] mx-auto px-4 py-6">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center justify-center size-6 bg-[#141414] dark:bg-white rounded text-white dark:text-black">
                  <span className="material-symbols-outlined text-[12px]">picture_as_pdf</span>
                </div>
                <span className="text-md font-bold">PDF Tools</span>
              </div>
              <div className="flex flex-wrap justify-center gap-5 text-xs font-medium text-[#757575]">
                <Link href="#" className="hover:text-black dark:hover:text-white">Privacy</Link>
                <Link href="#" className="hover:text-black dark:hover:text-white">Terms</Link>
                <Link href="#" className="hover:text-black dark:hover:text-white">Contact</Link>
              </div>
              <div className="text-[#757575] text-[11px]">
                © {new Date().getFullYear()} PDF Tools.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}