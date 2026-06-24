import { motion } from "framer-motion";
import exteriorImg from "../assets/exterior.jpg";
import interiorImg from "../assets/interior.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-28 text-white"
    >
      <div className="mx-auto grid max-w-[1300px] items-start gap-10 lg:grid-cols-2 lg:gap-12 px-6 md:px-8">

        {/* LEFT SIDE */}
        <div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.45em] text-zinc-500"
          >
            About Us
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mt-6
              font-[Cormorant_Garamond]
              text-3xl
              md:text-5xl
              font-semibold
              leading-[1.05]
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
            className="
              mt-6
              max-w-md
              text-sm
              md:text-[15px]
              leading-7
              text-zinc-400
            "
          >
            We believe architecture is more than structure—it is emotion,
            identity, and legacy. Every property is crafted with precision,
            elegance, and timeless value.
          </motion.p>

          {/* Interior Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 w-full max-w-[360px]"
          >
            <img
              src={interiorImg}
              alt="Interior"
              className="
                h-[180px]
                md:h-[220px]
                w-full
                rounded-2xl
                object-cover
              "
            />
          </motion.div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center lg:justify-end">

          <motion.img
            src={exteriorImg}
            alt="Exterior"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="
              w-full
              lg:w-[88%]
              h-[340px]
              md:h-[500px]
              lg:h-[560px]
              rounded-[2rem]
              object-cover
            "
          />

        </div>

      </div>
    </section>
  );
}