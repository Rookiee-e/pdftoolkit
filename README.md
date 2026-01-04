# PDFToolkit

![Project Preview](./public/preview-screenshot.png)

PDFToolkit is a suite of high-performance PDF utilities built to solve the privacy issues of traditional online editors. Most tools require you to upload your files to a remote server for processing; **PDFToolkit does the opposite**.

Using client-side JavaScript, it manipulates your documents directly in your browser. Your files never leave your device, ensuring total privacy and near-instant processing speeds.

**Live Demo:** [https://xyz.com](https://xyz.com)

---

## What It Does

- **Local Processing**  
  By leveraging `pdf-lib` and `PDF.js`, the app reads and writes PDF data directly in the browser's memory. This is ideal for sensitive documents like contracts, bank statements, or IDs.

- **Merge & Split**  
  Combine multiple PDFs into one organized file, or extract specific pages from a large document into a new one.

- **Visual Organization**  
  A visual workspace allows you to drag and drop pages to reorder them, rotate incorrectly scanned pages, or delete unwanted pages—no page numbers required.

- **Security**  
  Add password encryption to protect your files or remove restrictions from existing PDFs. All operations happen locally, so passwords are never transmitted.

- **Image Conversion**  
  Batch-convert JPG or PNG images into a single, high-quality PDF while preserving the original resolution.

---

## Tech Stack

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

- **Framework:** Next.js 14+ (App Router)
- **PDF Engine:** `pdf-lib` (modification) and `PDF.js` (rendering)
- **Styling:** Tailwind CSS
- **Interactions:** `dnd-kit` for drag-and-drop page reordering
- **Typography:** [Geist](https://vercel.com/font) via `next/font`

---

## Getting Started

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zintl-e/pdftoolkit.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd pdftoolkit
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

---

## Run Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing the page by modifying `app/page.tsx`. The page will auto-update as you save changes.

---

## Production Build

Create an optimized production build:

```bash
npm run build
npm run start
```

---

## Privacy & Security

- **Zero Uploads:** Files are read into temporary browser blobs and cleared when the tab is closed.
- **No Tracking:** No server-side logs, document metadata tracking, or third-party analytics.
- **Offline Mode:** Once the site is loaded, you can disconnect from the internet and continue using all tools.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — Learn about Next.js features and APIs  
- [Learn Next.js](https://nextjs.org/learn) — Interactive Next.js tutorial  
- [Next.js GitHub Repository](https://github.com/vercel/next.js) — Feedback and contributions welcome

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is with the **Vercel Platform**, created by the makers of Next.js.

See the official [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
