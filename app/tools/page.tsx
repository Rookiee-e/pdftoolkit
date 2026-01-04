import Link from "next/link";

export default function Home() {
  const tools = [
    { name: "Merge PDF", link: "/tools/merge", icon: "call_merge", desc: "Combine PDFs in the order you want easily." },
    { name: "Split PDF", link: "/tools/split", icon: "call_split", desc: "Separate pages into independent files." },
    { name: "PDF to Word", link: "/tools/pdf-to-word", icon: "description", desc: "Convert PDF to Word with accuracy." },
    { name: "Word to PDF", link: "/tools/word-to-pdf", icon: "article", desc: "Convert DOCX files to PDF format." },
    { name: "Edit PDF", link: "/tools/edit", icon: "edit_document", desc: "Add text, images, and annotations." },
    { name: "PDF to JPG", link: "/tools/pdf-to-jpg", icon: "image", desc: "Extract images or convert pages to JPG." },
    { name: "Crop PDF", link: "/tools/crop", icon: "crop", desc: "Crop PDF pages to a specific size." },
    { name: "JPG to PDF", link: "/tools/jpg-to-pdf", icon: "collections", desc: "Convert images to PDF in seconds." },
    { name: "Sign PDF", link: "/tools/sign", icon: "ink_pen", desc: "Sign documents and request signatures." },
    { name: "Watermark", link: "/tools/watermark", icon: "branding_watermark", desc: "Stamp images or text over PDFs." },
    { name: "Rotate PDF", link: "/tools/rotate", icon: "rotate_right", desc: "Rotate multiple documents at once." },
  ];
  return (
    <div className="flex flex-col items-center w-full py-8 px-4 sm:px-6">
      <div className="max-w-[1024px] w-full flex flex-col gap-8">
        {/* Hero Section */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Tools to work with your PDFs
          </h2>
          <p className="text-md text-[#757575] dark:text-gray-400 font-medium">
            We make PDF easy. Fast, private, and productive.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((t, idx) => (
            <Link
              href={t.link}
              key={idx}
              className="tool-card group flex flex-col p-4 rounded-lg border border-transparent bg-white dark:bg-neutral-900 dark:border-neutral-800 hover:border-[#e0e0e0] dark:hover:border-neutral-700 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-2 text-[#141414] dark:text-white">
                <span className="material-symbols-outlined">{t.icon}</span>
              </div>
              <h3 className="text-sm font-bold group-hover:text-blue-600 transition-colors">
                {t.name}
              </h3>
              <p className="mt-1 text-[12px] text-[#757575] dark:text-gray-400 leading-snug line-clamp-2">
                {t.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
