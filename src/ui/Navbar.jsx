import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

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

  const initials = user?.displayName
    ? user.displayName.split(" ").map((n) => n[0]).join("").toUpperCase()
    : user?.email?.[0]?.toUpperCase() || "U";

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full transition-all duration-500
        ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex h-20 md:h-24 max-w-[1300px] items-center justify-between px-6 md:px-8">
        {/* LOGO */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Apex Horizon"
            className="
    h-20
    w-20
    md:h-32
    md:w-32
    object-contain
    shrink-0
  "
          />

          <span
            className="
              font-[Cormorant_Garamond]
              text-lg
              md:text-xl
              tracking-[0.18em]
              text-white
            "
          >
            Apex Horizon
          </span>
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="
                text-[13px]
                tracking-wide
                text-zinc-300
                transition
                hover:text-white
              "
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">{initials}</div>
              <button onClick={() => { logout(); navigate("/"); }} className="text-[13px] text-zinc-300 transition hover:text-white">Log Out</button>
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="text-[13px] tracking-wide text-zinc-300 transition hover:text-white"
              >
                Log In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="rounded-full border border-white/10 bg-white px-6 py-3 text-[13px] font-medium text-black transition hover:scale-105"
              >
                Get Started
              </button>
            </>
          )}
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
        >
          {menuOpen ? (
            <HiOutlineX size={26} />
          ) : (
            <HiOutlineMenuAlt3 size={26} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-500
          ${menuOpen ? "max-h-[600px]" : "max-h-0"}
        `}
      >
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl px-6 py-8">
          <div className="flex flex-col gap-7">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="
                  text-left
                  text-sm
                  text-zinc-300
                  transition
                  hover:text-white
                "
              >
                {link.name}
              </button>
            ))}

            <div className="mt-2 flex flex-col gap-3">
              {user ? (
                <button
                  onClick={() => { setMenuOpen(false); logout(); navigate("/"); }}
                  className="rounded-full bg-white py-3 text-sm font-medium text-black transition"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <button
                    onClick={() => { setMenuOpen(false); navigate("/login"); }}
                    className="rounded-full border border-white/10 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => { setMenuOpen(false); navigate("/signup"); }}
                    className="rounded-full bg-white py-3 text-sm font-medium text-black transition"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
