
import { useState } from "react";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0D12]/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-20"
      >
        {/* Personal brand */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3 text-white"
        >
          <span className="text-2xl font-bold tracking-tight">
            MH<span className="text-[#B5A4DF]">.</span>
          </span>

          <span className="hidden border-l border-white/20 pl-3 text-sm font-medium sm:block">
            Meiby Hernández
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#A5A7B1] transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B5A4DF]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-md p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B5A4DF] md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <path d="M5 5L19 19" />
                <path d="M19 5L5 19" />
              </>
            ) : (
              <>
                <path d="M4 7H20" />
                <path d="M4 12H20" />
                <path d="M4 17H20" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0B0D12] px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-[#D5D2DD] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
