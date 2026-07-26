// src/components/MobileMenu.tsx
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  links: { href: string; label: string }[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Conectar con el botón hamburguesa del navbar
  useEffect(() => {
    const button = document.getElementById("mobile-menu-button");
    if (!button) return;

    const handleClick = () => setIsOpen((prev) => !prev);
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  // Actualizar ícono del botón según estado
  useEffect(() => {
    const button = document.getElementById("mobile-menu-button");
    if (!button) return;

    const svg = button.querySelector("svg");
    if (!svg) return;

    if (isOpen) {
      svg.innerHTML =
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
    } else {
      svg.innerHTML =
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
    }
  }, [isOpen]);

  // Cerrar con Escape y bloquear scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* Overlay oscuro - z-[60] (mayor que el navbar z-50) */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isOpen
            ? "opacity-100 z-[60]"
            : "opacity-0 pointer-events-none z-[-1]",
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer del menú - z-[70] (mayor que el overlay) */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-background border-l shadow-xl transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0 z-[70]" : "translate-x-full z-[-1]",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header del drawer */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-bold text-lg">Menú</span>
            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-accent transition-colors"
              aria-label="Cerrar menú"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Links de navegación */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
