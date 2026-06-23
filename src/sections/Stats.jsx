import { motion } from "framer-motion";
import statsBg from "../assets/stats-bg.jpg";

export default function Stats() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">

      {/* Background Image */}
      <img
        src={statsBg}
        alt=""
        className="
          absolute inset-0 h-full w-full
          object-cover
          object-center
        "
      />

      {/* ✅ OVERLAY (THIS IS THE FIX) */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6">

        <div className="max-w-3xl">

          <motion.p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-100">
            Why Choose Us
          </motion.p>

          <motion.h2 className="mt-6 md:mt-8 font-[Cormorant_Garamond] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-white">
            Trusted By Homeowners
            <br />
            Across The Country
          </motion.h2>

          <p className="mt-6 md:mt-8 max-w-xl text-sm md:text-base text-zinc-200 leading-relaxed">
            Delivering exceptional properties and professional services with integrity, innovation and excellence.
          </p>

        </div>

        {/* STATS */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-y-14">

          <div>
            <h3 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl md:text-6xl">500+</h3>
            <div className="mt-4 md:mt-5 h-px w-16 md:w-20 bg-white/20" />
            <p className="mt-4 md:mt-5 text-sm md:text-base text-zinc-200">
              Properties Available
            </p>
          </div>

          <div>
            <h3 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl md:text-6xl">98%</h3>
            <div className="mt-4 md:mt-5 h-px w-16 md:w-20 bg-white/20" />
            <p className="mt-4 md:mt-5 text-sm md:text-base text-zinc-200">
              Customer Satisfaction
            </p>
          </div>

          <div>
            <h3 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl md:text-6xl">25+</h3>
            <div className="mt-4 md:mt-5 h-px w-16 md:w-20 bg-white/20" />
            <p className="mt-4 md:mt-5 text-sm md:text-base text-zinc-200">
              Cities Covered
            </p>
          </div>

          <div>
            <h3 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl md:text-6xl">15+</h3>
            <div className="mt-4 md:mt-5 h-px w-16 md:w-20 bg-white/20" />
            <p className="mt-4 md:mt-5 text-sm md:text-base text-zinc-200">
              Years Experience
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}