export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-xs font-medium">
          © {new Date().getFullYear()} Chaker Zeghdar
        </p>
        <a href="#" className="text-white/20 hover:text-white/40 text-xs transition-colors tracking-wide">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
