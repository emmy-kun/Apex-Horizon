import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I schedule a property viewing?",
    answer:
      "You can request a viewing directly through any property listing or contact our agents. We'll arrange a private tour at your convenience.",
  },
  {
    question: "Are the properties fully verified?",
    answer:
      "Yes. Every listing undergoes legal verification, ownership validation and physical inspection before being listed.",
  },
  {
    question: "Do you offer support for international clients?",
    answer:
      "Absolutely. We assist with remote viewings, documentation and relocation support for clients worldwide.",
  },
  {
    question: "Do you provide flexible payment options?",
    answer:
      "Selected properties are available with structured payment plans to suit different client needs.",
  },
  {
    question: "Can I speak directly with an agent?",
    answer:
      "Yes. Our experienced agents are available to answer questions and provide personalized guidance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#050505] py-20 md:py-40 text-white">
      <div className="mx-auto max-w-[1300px] px-6">

        {/* MOBILE LAYOUT (STACKED) */}
        <div className="flex flex-col lg:grid lg:grid-cols-[0.9fr_1.4fr] gap-16">

          {/* LEFT SIDE (TEXT ONLY ON MOBILE) */}
          <div>

            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-500">
              FAQ'S
            </p>

            <h2 className="mt-6 md:mt-8 font-[Cormorant_Garamond] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Everything You Need To Know
            </h2>

            <p className="mt-6 max-w-sm text-sm md:text-base text-zinc-400 leading-relaxed">
              Everything you need to know before getting started.
            </p>

          </div>

          {/* RIGHT SIDE (FAQ FIRST ON MOBILE) */}
          <div className="space-y-4 md:space-y-5">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-5 md:px-8 py-5 md:py-7 text-left hover:bg-white/[0.03] transition"
                >
                  <span className="text-sm md:text-lg">
                    {faq.question}
                  </span>

                  <span className="text-xl md:text-2xl text-zinc-500">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 md:px-8 pb-6 md:pb-8 text-sm md:text-base text-zinc-400 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* SUPPORT CARD (ONLY AFTER FAQ ON MOBILE) */}
            <div className="mt-10 lg:mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">

              <h3 className="font-[Cormorant_Garamond] text-2xl md:text-3xl font-semibold">
                Still Have A Question?
              </h3>

              <p className="mt-4 text-sm md:text-base text-zinc-400 leading-relaxed">
                Can't find the answer you're looking for? Our team is always
                available to guide you through every stage of your journey.
              </p>

              <a
                href="#footer"
                className="mt-6 md:mt-8 inline-flex rounded-full bg-white px-6 md:px-8 py-3 md:py-4 text-sm text-black transition hover:scale-105"
              >
                Contact Us
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}