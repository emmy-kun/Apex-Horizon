import { motion } from "framer-motion";

const steps = [
  {
    title: "Browse Properties",
    description:
      "Explore curated luxury homes tailored to your lifestyle and investment goals.",
  },
  {
    title: "Schedule Inspection",
    description:
      "Book private viewings with expert guidance from trusted professionals.",
  },
  {
    title: "Secure Purchase",
    description:
      "Complete transactions with full transparency and professional support.",
  },
  {
    title: "Move Into Your Home",
    description:
      "Begin life in a space designed for modern luxury living.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#050505] py-20 md:py-40 text-white">
      <div className="mx-auto max-w-[1400px] px-6">

        <div className="grid gap-14 md:gap-20 lg:grid-cols-[1fr_1.2fr]">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-32 h-fit">

            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-500">
              Our Process
            </p>

            <h2 className="mt-6 md:mt-8 font-[Cormorant_Garamond] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Designed For A Seamless
              <br />
              Home Buying Experience
            </h2>

            <p className="mt-6 md:mt-8 max-w-md text-sm md:text-base text-zinc-400 leading-relaxed">
              From discovery to ownership, we guide you with precision,
              transparency, and care throughout your journey.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10 md:space-y-14">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="border-b border-white/10 pb-8 md:pb-10"
              >
                <h3 className="font-[Cormorant_Garamond] text-2xl sm:text-3xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 md:mt-5 max-w-xl text-sm md:text-base text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}