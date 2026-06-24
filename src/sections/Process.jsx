import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Browse Properties",
    description:
      "Explore a curated collection of luxury residences tailored to your lifestyle, preferences, and investment goals.",
  },
  {
    number: "02",
    title: "Schedule Inspection",
    description:
      "Arrange private viewings and receive expert guidance from experienced professionals throughout the process.",
  },
  {
    number: "03",
    title: "Secure Purchase",
    description:
      "Complete transactions confidently with complete transparency and dedicated support every step of the way.",
  },
  {
    number: "04",
    title: "Move Into Your Home",
    description:
      "Begin a new chapter in a residence designed for elegance, comfort, and timeless living.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#050505] py-24 md:py-28 text-white"
    >
      <div className="mx-auto max-w-[1300px] px-6">

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-32 h-fit">

            <p className="text-[10px] uppercase tracking-[0.45em] text-zinc-500">
              Our Process
            </p>

            <h2 className="mt-6 font-[Cormorant_Garamond] text-3xl md:text-5xl font-semibold leading-[1.05]">
              Designed For A Seamless
              <br />
              Home Buying Experience
            </h2>

            <p className="mt-6 max-w-md text-sm md:text-[15px] leading-7 text-zinc-400">
              From discovery to ownership, we guide you with precision,
              transparency, and care to ensure an effortless experience.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="
                  rounded-[2rem]
                  border border-white/10
                  bg-white/[0.02]
                  px-6 md:px-8
                  py-8 md:py-10
                  backdrop-blur-sm
                  transition
                  hover:bg-white/[0.04]
                "
              >

                <div className="flex items-start gap-6">

                  {/* Number */}
                  <div className="shrink-0">
                    <span
                      className="
                        font-[Cormorant_Garamond]
                        text-5xl md:text-6xl
                        font-semibold
                        text-white/20
                        leading-none
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>

                    <h3 className="font-[Cormorant_Garamond] text-2xl md:text-3xl font-semibold leading-tight">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm md:text-[15px] leading-7 text-zinc-400">
                      {step.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}