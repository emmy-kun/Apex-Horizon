import { motion } from "framer-motion";
import statsImg from "../assets/stats-bg.jpg";

const stats = [
  {
    number: "500+",
    title: "Properties Available",
  },
  {
    number: "98%",
    title: "Customer Satisfaction",
  },
  {
    number: "25+",
    title: "Cities Covered",
  },
  {
    number: "15+",
    title: "Years Experience",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#050505] py-24 md:py-28 text-white">
      <div className="mx-auto max-w-[1300px] px-6">

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-[2rem]"
          >
            <img
              src={statsImg}
              alt="Luxury Home"
              className="
                h-[320px]
                sm:h-[420px]
                md:h-[500px]
                lg:h-[560px]
                w-full
                object-cover
              "
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <p className="text-[10px] uppercase tracking-[0.45em] text-zinc-500">
              Why Choose Us
            </p>

            {/* Heading */}
            <h2
              className="
                mt-6
                font-[Cormorant_Garamond]
                text-3xl
                md:text-5xl
                font-semibold
                leading-[1.05]
              "
            >
              Trusted By Homeowners
              <br />
              Across The Country
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-lg text-sm md:text-[15px] leading-7 text-zinc-400">
              Delivering exceptional properties and professional services
              with integrity, innovation and excellence. We are committed
              to creating experiences defined by trust, quality, and
              timeless value.
            </p>

            {/* Stats */}
            <div className="mt-10 space-y-6">

              {stats.map((stat, index) => (
                <div key={index}>

                  <div className="flex items-center justify-between">

                    <h3 className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-semibold text-white">
                      {stat.number}
                    </h3>

                    <p className="text-sm md:text-[15px] text-zinc-400">
                      {stat.title}
                    </p>

                  </div>

                  {index !== stats.length - 1 && (
                    <div className="mt-5 h-px w-full bg-white/10" />
                  )}

                </div>
              ))}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}