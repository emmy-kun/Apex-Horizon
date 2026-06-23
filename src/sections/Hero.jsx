import { motion } from "framer-motion";
import heroVideo from "../assets/hero.mp4";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

      {/* MAIN LAYOUT */}
      <div className="relative z-10 flex h-full max-w-[1400px] flex-col md:flex-row px-6">

        {/* TOP LEFT */}
        <div className="flex flex-1 flex-col justify-start pt-24 md:pt-36">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-400"
          >
            Luxury Real Estate Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="
              mt-8 md:mt-10
              font-[Cormorant_Garamond]
              text-4xl sm:text-5xl md:text-7xl lg:text-8xl
              font-semibold
              leading-[1.05]
              text-white
              tracking-tight
            "
          >
            Luxury Homes
            <br />
            That Redefine
            <br />
            Modern Living
          </motion.h1>
        </div>

        {/* BOTTOM RIGHT */}
        <div className="flex flex-1 flex-col justify-end pb-16 md:pb-28">

          <div className="ml-0 md:ml-auto max-w-lg text-left md:text-right">

            {/* Line 1 */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-base sm:text-lg md:text-2xl leading-snug text-zinc-200"
            >
              Discover exclusive properties
            </motion.p>

            {/* Line 2 */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-base sm:text-lg md:text-2xl leading-snug text-zinc-200"
            >
              crafted for elegance, comfort,
            </motion.p>

            {/* Line 3 */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="text-base sm:text-lg md:text-2xl leading-snug text-zinc-200"
            >
              and timeless architectural value.
            </motion.p>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              onClick={() => navigate("/properties")}
              className="mt-8 md:mt-10 mx-auto md:ml-auto md:mx-0 w-fit rounded-full border border-white/20 bg-white/5 px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm text-white backdrop-blur-md transition hover:bg-white/10 hover:scale-105"
            >
              Explore Collections
            </motion.button>

          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 md:h-40 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}