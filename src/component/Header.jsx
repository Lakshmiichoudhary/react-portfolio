import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/", isRouterLink: true },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-3 left-0 z-50 w-full px-5">
        <div
          className="
            relative mx-auto flex w-full  items-center justify-between
            rounded-2xl border border-border/40 bg-black/30 px-6 py-5
            shadow-[0_10px_35px_rgba(0,0,0,0.45)] backdrop-blur-xl
            transition-all duration-300
          "
        >
          <Link
            to="/"
            className="group flex items-center gap-1 text-xl font-extrabold tracking-tight text-text transition-transform duration-300 hover:scale-105"
          >
            <span>Lakshmi</span>
            <span className="text-primary transition-colors duration-300 group-hover:text-primary-hover">
              .B
            </span>
          </Link>
         
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const linkClasses = `
                relative rounded-full px-4 py-2 text-md  text-text-secondary
                transition-all duration-300 hover:bg-primary/10 hover:text-primary
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
              `;

              return link.isRouterLink ? (
                <Link key={link.name} to={link.href} className={linkClasses}>
                  {link.name}
                </Link>
              ) : (
                <a key={link.name} href={link.href} className={linkClasses}>
                  {link.name}
                </a>
              );
            })}
          </nav>

          <a
            href="tel:8618982966"
            aria-label="Call Lakshmi"
            className="
              hidden items-center gap-2.5 rounded-xl border border-primary/40
              bg-primary/10 px-5 py-2 text-sm font-semibold text-primary
              shadow-[0_0_15px_rgba(100,255,218,0.1)] transition-all duration-300
              hover:border-primary hover:bg-primary hover:text-background
              hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] md:flex
            "
          >
            <FaPhoneAlt className="text-xs transition-transform duration-300 group-hover:rotate-12" />
            <span>Let&apos;s Talk</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              ml-auto flex h-10 w-10 items-center justify-center rounded-full
              border border-border bg-background-secondary text-text
              transition-all duration-300 hover:border-primary hover:bg-primary/10
              hover:text-primary md:hidden
            "
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <FaTimes className="text-lg" />
            ) : (
              <FaBars className="text-lg" />
            )}
          </button>

          {/* MOBILE DROPDOWN MENU */}
          <div
            className={`
              absolute left-0 top-[calc(100%+12px)] w-full rounded-3xl
              border border-border/80 bg-surface/95 p-3 shadow-2xl
              backdrop-blur-2xl transition-all duration-300 md:hidden
              ${
                menuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-3 opacity-0 pointer-events-none"
              }
            `}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const mobileClasses = `
                  block rounded-2xl px-4 py-3 text-base font-medium text-text-secondary
                  transition-all duration-200 hover:bg-primary/10 hover:text-primary
                `;

                return link.isRouterLink ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={closeMenu}
                    className={mobileClasses}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className={mobileClasses}
                  >
                    {link.name}
                  </a>
                );
              })}

              <a
                href="tel:8618982966"
                onClick={closeMenu}
                className="
                  mt-2 flex items-center justify-center gap-2 rounded-2xl
                  border border-primary/40 bg-primary/10 px-4 py-3 text-base
                  font-semibold text-primary transition-all duration-300
                  hover:bg-primary hover:text-background
                "
              >
                <FaPhoneAlt className="text-sm" />
                <span>Let&apos;s Talk</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Header;
