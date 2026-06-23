import logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#050505] text-zinc-400 border-t border-white/10 py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">

        <div className="grid gap-14 md:gap-16 md:grid-cols-3">

{/* BRAND */}
<div>

  <div className="flex items-center gap-2">

    <img
      src={logo}
      alt="Apex Horizon Logo"
      className="h-16 w-16 md:h-20 md:w-20 object-contain"
    />

    <h2 className="text-white text-xl md:text-2xl tracking-[0.15em] leading-none -ml-1">
      Apex Horizon
    </h2>

  </div>

  <p className="mt-6 text-sm leading-relaxed text-zinc-400">
    Luxury real estate experiences designed for modern living.
    We connect people to homes that define elegance, comfort, and value.
  </p>

  <p className="mt-6 text-xs text-zinc-600">
    © {new Date().getFullYear()} Apex Horizon. All rights reserved.
  </p>

</div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-white text-sm mb-5 md:mb-6 tracking-widest uppercase">
              Navigation
            </h3>

            <ul className="space-y-3 md:space-y-4 text-sm">
              <li><a href="#hero" className="hover:text-white transition">Home</a></li>
              <li><a href="#properties" className="hover:text-white transition">Properties</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#cta" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT BOX */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6 backdrop-blur-md">

            <h3 className="text-white text-sm mb-5 md:mb-6 tracking-widest uppercase">
              Contact Us
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30"
              />

              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg text-sm font-medium hover:scale-[1.02] transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 md:mt-20 border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between gap-3 text-xs text-zinc-600">

          <p>Designed for luxury real estate experiences</p>
          <p>Built with precision & minimal elegance</p>

        </div>

      </div>
    </footer>
  );
}