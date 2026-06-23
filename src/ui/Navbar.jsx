import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Properties", href: "#properties" },
    { name: "Process", href: "#process" },
    { name: "Agents", href: "#agents" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false);

    // If not on home page → go home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full transition-all duration-500
        ${scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}
      `}
    >
      <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-6">

        {/* LOGO */}
        <a
          href="/"
          className="flex items-center gap-3 font-[Cormorant_Garamond] text-white"
        >
          <img src={logo} className="h-12 w-12 object-contain" />
          <span className="text-2xl tracking-[0.2em]">Apex Horizon</span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-zinc-300 hover:text-white transition"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#footer"
          className="hidden lg:flex rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
        >
          Contact Us
        </a>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
        >
          {menuOpen ? <HiOutlineX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-[700px]" : "max-h-0"}`}>
        <div className="border-t border-white/10 bg-black/95 px-6 py-8 flex flex-col gap-6">

          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-zinc-300 hover:text-white text-left"
            >
              {link.name}
            </button>
          ))}

          <a
            href="#footer"
            className="mt-4 rounded-full bg-white px-6 py-4 text-center text-black"
          >
            Contact Us
          </a>

        </div>
      </div>
    </header>
  );
}