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
    <section id="faq" className="bg-[#050505] py-20 md:py-32 text-white">
      <div className="mx-auto max-w-[1250px] px-6">

        <div className="flex flex-col lg:grid lg:grid-cols-[0.9fr_1.4fr] gap-14">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-32 h-fit">

            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
              FAQ'S
            </p>

            <h2 className="mt-5 font-[Cormorant_Garamond] text-2xl sm:text-3xl md:text-[3rem] font-semibold leading-[1.05]">
              Everything You Need To Know
            </h2>

            <p className="mt-5 max-w-sm text-[13px] md:text-[15px] text-zinc-400 leading-7">
              Everything you need to know before getting started.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.015] overflow-hidden"
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-6 text-left transition hover:bg-white/[0.03]"
                >
                  <span className="text-[14px] md:text-[15px] font-medium text-zinc-200">
                    {faq.question}
                  </span>

                  <span className="text-lg text-zinc-500">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-[13px] md:text-[14px] text-zinc-400 leading-7"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}

            {/* SUPPORT CARD */}
            <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-7">

              <h3 className="font-[Cormorant_Garamond] text-[28px] md:text-[32px] font-semibold leading-none">
                Still Have A Question?
              </h3>

              <p className="mt-4 text-[13px] md:text-[14px] text-zinc-400 leading-7">
                Can't find the answer you're looking for? Our team is always
                available to guide you through every stage of your property
                journey with personalized assistance.
              </p>

              <a
                href="#footer"
                className="
                  mt-7
                  inline-flex
                  items-center
                  rounded-full
                  bg-white
                  px-7
                  py-3
                  text-[13px]
                  font-medium
                  text-black
                  transition
                  duration-300
                  hover:scale-105
                "
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