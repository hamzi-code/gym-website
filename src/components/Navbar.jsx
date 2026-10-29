import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";
import { navLinks } from "../data/navigation";
import { btnOutline, btnPrimary, container } from "./ui";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 12);
  const [active, setActive] = useState("home");

  // Solid background once the user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock page scroll + close with Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return undefined;

    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = (e) => e.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        solid
          ? "bg-white/90 shadow-[0_1px_0_rgba(15,23,42,0.08)] backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`${container} flex h-16 items-center justify-between lg:h-20`}
        aria-label="Main navigation"
      >
        <Logo onClick={closeMenu} />

        {/* DESKTOP LINKS */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative isolate rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${
                    isActive ? "text-orange-600" : "text-gray-600 hover:text-ink"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-orange-100/70"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#contact"
            className="rounded-full px-4 py-2 text-[15px] font-semibold text-ink transition-colors hover:text-orange-600"
          >
            Login
          </a>
          <a href="#pricing" className={btnPrimary}>
            Join Now
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-ink transition-colors hover:bg-gray-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto">
              <ul className={`${container} flex flex-col gap-1 py-4`}>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={closeMenu}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        active === link.id
                          ? "bg-orange-50 text-orange-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className={`${container} grid grid-cols-2 gap-3 pb-6`}>
                <a href="#contact" onClick={closeMenu} className={btnOutline}>
                  Login
                </a>
                <a href="#pricing" onClick={closeMenu} className={btnPrimary}>
                  Join Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
