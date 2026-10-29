// Shared Tailwind class strings so every section uses the same spacing & buttons.

export const container = "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8";

export const sectionPadding = "py-20 sm:py-24 lg:py-28";

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold " +
  "transition-[background-color,color,border-color,box-shadow,translate] duration-300 cursor-pointer " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2";

export const btnPrimary = `${btnBase} bg-orange-500 text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600 hover:-translate-y-0.5`;

export const btnOutline = `${btnBase} border border-gray-300 bg-white text-ink hover:border-orange-500 hover:text-orange-600`;
