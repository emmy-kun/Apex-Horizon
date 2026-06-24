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
      <div className="relative z-10 mx-auto flex h-full max-w-[1300px] flex-col md:flex-row px-6 md:px-8">

        {/* TOP LEFT */}
        <div className="flex flex-1 flex-col justify-start pt-32 md:pt-40 lg:pt-44">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.4em] text-zinc-400"
          >
            Luxury Real Estate Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="
              mt-5
              font-[Cormorant_Garamond]
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[4.8rem]
              xl:text-[5.3rem]
              font-semibold
              leading-[1]
              tracking-[-0.03em]
              text-white
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
        <div className="flex flex-1 flex-col justify-end pb-10 md:pb-24 lg:pb-28">
          <div className="ml-0 md:ml-auto max-w-md text-left md:text-right">

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                text-zinc-300
              "
            >
              Discover exclusive properties
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                text-zinc-300
              "
            >
              crafted for elegance, comfort,
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                text-zinc-300
              "
            >
              and timeless architectural value.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              onClick={() => navigate("/properties")}
              className="
                mt-6
                md:mt-8
                mx-auto
                md:ml-auto
                md:mr-0
                w-fit
                rounded-full
                border
                border-white/20
                bg-white/5
                px-6
                py-3
                text-xs
                uppercase
                tracking-wider
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/10
                hover:scale-105
              "
            >
              Explore Collections
            </motion.button>

          </div>
        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-28 md:h-36 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}