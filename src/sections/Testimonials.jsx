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
    <section id="testimonials" className="bg-[#050505] py-20 md:py-40 text-white">
      <div className="mx-auto max-w-[1300px] px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-500">
            Testimonials
          </p>

          <h2 className="mt-6 md:mt-8 font-[Cormorant_Garamond] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Trusted By Thousands
            <br />
            Nationwide
          </h2>
        </div>

        {/* MAIN LAYOUT */}
        <div className="mt-16 md:mt-28 flex flex-col lg:flex-row lg:items-stretch gap-10">

         {/* LEFT IMAGE */}
<div className="lg:w-[20%]">
  <AnimatePresence mode="wait">
    <motion.div
      key={testimonials[current].image}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-[520px] w-full overflow-hidden rounded-3xl"
    >
      <img
        src={testimonials[current].image}
        alt=""
        className="h-full w-full object-cover object-center"
      />
    </motion.div>
  </AnimatePresence>
</div>

          {/* CENTER CONTENT */}
          <div className="flex flex-1 flex-col justify-center px-2 sm:px-4 min-h-[260px] md:min-h-[320px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >

                {/* Stars */}
                <div className="mb-6 md:mb-8 text-lg md:text-xl text-yellow-400">
                  ★★★★★
                </div>

                {/* Quote */}
                <p className="max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-zinc-300">
                  "{testimonials[current].quote}"
                </p>

                {/* Name */}
                <div className="mt-8 md:mt-10">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-medium">
                    {testimonials[current].name}
                  </h4>

                  <p className="mt-2 text-sm md:text-base text-zinc-500">
                    {testimonials[current].location}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-[25%] flex flex-row lg:flex-col justify-between items-center lg:items-end gap-6 lg:gap-0">

            {/* Preview Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={nextPerson.image}
                alt=""
                className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 object-cover object-[50%_20%]"
              />
            </motion.div>

            {/* Arrows */}
            <div className="flex gap-4 lg:mt-auto">

              <button
                onClick={prevSlide}
                className="
                  flex h-12 w-12 md:h-14 md:w-14 items-center justify-center
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
                  flex h-12 w-12 md:h-14 md:w-14 items-center justify-center
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