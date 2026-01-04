Markdown

# PDFToolkit

![Project Preview](./public/preview-screenshot.png)

PDFToolkit is a suite of high-performance PDF utilities built to solve the privacy issues of traditional online editors. Most tools require you to upload your files to a remote server for processing; PDFToolkit does the opposite. Using client-side JavaScript, it manipulates your documents directly in your browser. Your files never leave your device, ensuring total privacy and near-instant processing speeds.

Live Demo: [xyz.com](https://xyz.com)

## What it does

* **Local Processing:** By leveraging `pdf-lib` and `PDF.js`, the app reads and writes PDF data directly in the browser's memory. This is ideal for sensitive documents like contracts, bank statements, or IDs.
* **Merge & Split:** Combine multiple separate PDFs into one organized file, or extract specific pages from a large document into a new one.
* **Visual Organization:** Instead of typing page numbers, you get a visual workspace where you can drag and drop pages to reorder them, rotate pages that were scanned incorrectly, or delete unwanted pages.
* **Security:** Add password encryption to protect your files or remove restrictions from existing PDFs. Since this happens locally, your passwords are never sent over the network.
* **Image Conversion:** Batch-convert JPG or PNG images into a single, high-quality PDF document while preserving original resolution.

## Tech Stack

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

* **Framework:** Next.js 14+ (App Router)
* **PDF Engine:** pdf-lib (for modification) and PDF.js (for rendering)
* **Styling:** Tailwind CSS
* **Interactions:** dnd-kit for drag-and-drop page reordering
* **Typography:** [Geist](https://vercel.com/font) via `next/font`

## Getting Started

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Zintl-e/pdftoolkit.git](https://github.com/Zintl-e/pdftoolkit.git)
Navigate to the folder:

Bash

cd pdftoolkit
Install dependencies:

Bash

npm install
# or
yarn install
# or
pnpm install
# or
bun install
Run Locally
First, run the development server:

Bash

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 with your browser to see the result. You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

Production Build
To create an optimized build for production:

Bash

npm run build
npm run start
Privacy & Security
Zero Uploads: Files are read into temporary browser blobs and cleared upon tab closure.

No Tracking: There are no server-side logs, document metadata tracking, or third-party analytics.

Offline Mode: Once the site is loaded, you can disconnect from the internet and the tools will remain fully functional.

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.

Learn Next.js - an interactive Next.js tutorial.

Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.
