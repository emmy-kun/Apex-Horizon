import { motion } from "framer-motion";
import exteriorImg from "../assets/exterior.jpg";
import interiorImg from "../assets/interior.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-20 md:py-32 text-white"
    >
      <div className="mx-auto grid max-w-[1400px] items-start gap-12 lg:grid-cols-2 lg:gap-14 px-6">

        {/* LEFT SIDE */}
        <div>

          {/* Section Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-500"
          >
            About Us
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mt-6 md:mt-8
              font-[Cormorant_Garamond]
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-semibold
              leading-[1.1]
            "
          >
            Designing Luxury Homes
            <br />
            That Inspire Generations
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-8 max-w-lg text-sm md:text-base leading-relaxed text-zinc-400"
          >
            We believe architecture is more than structure, it is emotion,
            identity, and legacy. Every property is crafted with precision
            and timeless elegance.
          </motion.p>

          {/* Interior Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 md:mt-10 w-full max-w-[420px]"
          >
            <img
              src={interiorImg}
              alt="Interior"
              className="h-[200px] sm:h-[240px] md:h-[260px] w-full rounded-xl object-cover"
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">

          <motion.img
            src={exteriorImg}
            alt="Exterior"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="
              w-full
              sm:w-[90%]
              lg:w-[85%]
              h-[300px]
              sm:h-[420px]
              md:h-[500px]
              lg:h-[560px]
              rounded-2xl
              object-cover
            "
          />
        </div>

      </div>
    </section>
  );
}