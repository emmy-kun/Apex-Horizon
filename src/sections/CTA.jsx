import { motion } from "framer-motion";
import ctaImage from "../assets/cta.jpg";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-24 md:py-40 text-white overflow-hidden"
    >

      {/* Background Image (FULL BRIGHTNESS) */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-center"
        style={{ backgroundImage: `url(${ctaImage})` }}
      />

      {/* Bottom fade ONLY (no dark overlay) */}
      <div className="absolute bottom-0 left-0 h-32 md:h-40 w-full bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-[1000px] px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-200"
        >
          Begin Your Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mt-6 md:mt-8
            font-[Cormorant_Garamond]
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-semibold
            leading-tight
          "
        >
          Find The Home
          <br />
          You’ve Always Imagined
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 md:mt-8 text-sm md:text-base text-zinc-100 leading-relaxed max-w-xl mx-auto"
        >
          Explore a curated collection of luxury properties designed for comfort,
          elegance, and timeless architectural value.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="rounded-full bg-white px-8 md:px-10 py-3 md:py-4 text-sm md:text-base text-black font-medium transition hover:scale-105">
            Explore Properties
          </button>

          <button className="rounded-full border border-white/30 bg-white/10 px-8 md:px-10 py-3 md:py-4 text-sm md:text-base text-white backdrop-blur-md transition hover:bg-white/20">
            Contact Agent
          </button>
        </motion.div>

      </div>

    </section>
  );
}