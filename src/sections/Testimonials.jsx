import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Daniel Carter",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800",
    quote:
      "The entire process felt seamless. From viewing to closing, everything was handled with absolute professionalism.",
  },
  {
    name: "Emily Johnson",
    location: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800",
    quote:
      "Exceptional service and attention to detail. They truly understand luxury real estate at the highest level.",
  },
  {
    name: "Michael Stevens",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800",
    quote:
      "A premium experience from start to finish. I found my dream property without stress or delays.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const nextPerson = testimonials[(current + 1) % testimonials.length];

  return (
    <section
      id="testimonials"
      className="bg-[#050505] py-20 md:py-24 text-white"
    >
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-zinc-500">
            Testimonials
          </p>

          <h2 className="mt-5 font-[Cormorant_Garamond] text-3xl md:text-[3rem] font-semibold leading-none">
            Trusted By Thousands
            <br />
            Nationwide
          </h2>
        </div>

        {/* Main Layout */}
        <div className="mt-14 flex flex-col lg:flex-row lg:items-center gap-8">

          {/* Left Image */}
          <div className="lg:w-[22%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[current].image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="overflow-hidden rounded-[1.8rem]"
              >
                <img
                  src={testimonials[current].image}
                  alt=""
                  className="
                    h-[320px]
                    md:h-[400px]
                    w-full
                    object-cover
                  "
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center */}
          <div className="flex flex-1 flex-col justify-center min-h-[220px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >

                {/* Stars */}
                <div className="mb-5 text-sm text-yellow-400 tracking-[0.15em]">
                  ★★★★★
                </div>

                {/* Quote */}
                <p className="max-w-2xl text-sm md:text-[15px] leading-7 text-zinc-300 italic">
                  "{testimonials[current].quote}"
                </p>

                {/* Name */}
                <div className="mt-8">

                  <h4 className="font-[Cormorant_Garamond] text-2xl md:text-3xl leading-none">
                    {testimonials[current].name}
                  </h4>

                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {testimonials[current].location}
                  </p>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[18%] flex flex-row lg:flex-col justify-between items-center lg:items-end gap-6">

            {/* Preview Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={nextPerson.image}
                alt=""
                className="
                  h-16
                  w-16
                  md:h-20
                  md:w-20
                  object-cover
                  object-center
                "
              />
            </motion.div>

            {/* Arrows */}
            <div className="flex gap-3 lg:mt-auto">

              <button
                onClick={prevSlide}
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-white/10
                  bg-black text-white
                  transition hover:border-white/30
                "
              >
                ←
              </button>

              <button
                onClick={nextSlide}
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full bg-white text-black
                  transition hover:scale-105
                "
              >
                →
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}