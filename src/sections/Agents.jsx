import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const agents = [
  {
    name: "James Anderson",
    role: "Luxury Property Specialist",
    quote:
      "Helping clients secure exceptional homes with confidence, elegance, and a seamless experience.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Daniel Williams",
    role: "Executive Property Consultant",
    quote:
      "Delivering exceptional experiences and helping clients acquire remarkable homes with confidence and discretion.",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Sophia Williams",
    role: "Senior Property Advisor",
    quote:
      "Dedicated to delivering world-class service and connecting clients with remarkable residences.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Agents() {
  const [current, setCurrent] = useState(0);

  const nextAgent = () =>
    setCurrent((prev) => (prev === agents.length - 1 ? 0 : prev + 1));

  const prevAgent = () =>
    setCurrent((prev) => (prev === 0 ? agents.length - 1 : prev - 1));

  const agent = agents[current];

  return (
    <section
      id="agents"
      className="bg-[#050505] py-20 md:py-24 text-white"
    >
      <div className="mx-auto max-w-[1150px] px-6">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-[10px] uppercase tracking-[0.45em] text-zinc-500">
            Our Agents
          </p>

          <h2 className="mt-5 font-[Cormorant_Garamond] text-3xl md:text-[3rem] leading-none font-semibold">
            Meet The Experts Behind
            <br />
            Exceptional Properties
          </h2>

        </div>

        {/* CARD */}
        <div className="mt-16">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="
                rounded-[2rem]
                border border-white/10
                bg-white/[0.02]
                px-6 py-8
                md:px-10 md:py-10
              "
            >
              <div className="flex flex-col md:flex-row items-center gap-10">

                {/* IMAGE */}
                <div className="shrink-0">

                  <div
                    className="
                      h-44 w-44
                      md:h-56 md:w-56
                      rounded-full
                      overflow-hidden
                      border border-white/10
                    "
                  >
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                </div>

                {/* CONTENT */}
                <div className="flex-1 text-center md:text-left">

                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                    {agent.role}
                  </p>

                  <h3 className="mt-3 font-[Cormorant_Garamond] text-3xl md:text-4xl font-semibold leading-none">
                    {agent.name}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm md:text-[15px] leading-7 text-zinc-400 italic">
                    “{agent.quote}”
                  </p>

                  {/* SOCIALS */}
                  <div className="mt-7 flex justify-center md:justify-start gap-3">

                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:bg-white hover:text-black transition">
                      <FaWhatsapp />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:bg-white hover:text-black transition">
                      <FaInstagram />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:bg-white hover:text-black transition">
                      <FaEnvelope />
                    </button>

                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* NAVIGATION */}
          <div className="mt-8 flex justify-end gap-3">

            <button
              onClick={prevAgent}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-white/10
                text-zinc-400 hover:border-white
                hover:text-white transition
              "
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={nextAgent}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full bg-white text-black
                transition hover:scale-105
              "
            >
              <FaArrowRight />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}