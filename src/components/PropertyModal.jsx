import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PropertyModal({
  property,
  activeImg,
  nextImg,
  prevImg,
  setActiveImg,
  onClose,
}) {
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!property) return null;

  const images = property.gallery || [property.image];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl px-4 py-8 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="
            relative
            mx-auto
            max-w-6xl
            rounded-[2rem]
            border border-white/10
            bg-[#090909]
            overflow-hidden
          "
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="
              absolute top-5 right-5 z-30
              h-10 w-10 rounded-full
              bg-white/10
              text-sm
              transition
              hover:bg-white/20
            "
          >
            ✕
          </button>

          <div className="grid lg:grid-cols-[1.2fr_0.9fr]">

            {/* LEFT */}
            <div className="p-5 md:p-8">

              {/* Main image */}
              <div
                className="relative overflow-hidden rounded-3xl"
                onTouchStart={(e) =>
                  setTouchStartX(e.touches[0].clientX)
                }
                onTouchEnd={(e) => {
                  const diff =
                    e.changedTouches[0].clientX - touchStartX;

                  if (diff > 50) prevImg();
                  if (diff < -50) nextImg();
                }}
              >
                <img
                  src={images[activeImg]}
                  className="
                    h-[300px]
                    md:h-[500px]
                    w-full
                    object-cover
                  "
                />

                <button
                  onClick={prevImg}
                  className="
                    absolute left-4 top-1/2 -translate-y-1/2
                    h-10 w-10 rounded-full
                    bg-black/60
                  "
                >
                  ←
                </button>

                <button
                  onClick={nextImg}
                  className="
                    absolute right-4 top-1/2 -translate-y-1/2
                    h-10 w-10 rounded-full
                    bg-black/60
                  "
                >
                  →
                </button>
              </div>

              {/* Thumbnails */}
              <div className="mt-4 flex gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImg(index)}
                    className={`
                      overflow-hidden rounded-xl
                      border transition
                      ${
                        activeImg === index
                          ? "border-white"
                          : "border-white/10"
                      }
                    `}
                  >
                    <img
                      src={img}
                      className="h-20 w-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-7 md:p-10 flex flex-col justify-center">

              <p className="text-[11px] uppercase tracking-[0.4em] text-zinc-500">
                Featured Residence
              </p>

              <h2
                className="
                  mt-5
                  font-[Cormorant_Garamond]
                  text-3xl md:text-[3rem]
                  leading-none
                  font-semibold
                "
              >
                {property.title}
              </h2>

              <p className="mt-3 text-[14px] text-zinc-500">
                {property.location}
              </p>

              <div className="mt-8 text-3xl font-light">
                {property.price}
              </div>

              <div className="mt-8 space-y-4 text-[14px] text-zinc-300">

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span>Beds</span>
                  <span>{property.beds}</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span>Baths</span>
                  <span>{property.baths}</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span>Garage</span>
                  <span>{property.garage}</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span>Area</span>
                  <span>{property.size}</span>
                </div>

              </div>

              <p className="mt-8 text-[14px] leading-7 text-zinc-400">
                Designed for modern luxury living with exceptional finishes,
                spacious interiors and timeless architecture crafted for
                discerning homeowners.
              </p>

              <div className="mt-10 space-y-4">

                <button
                  className="
                    w-full
                    rounded-full
                    bg-white
                    py-3.5
                    text-[13px]
                    font-medium
                    text-black
                    transition
                    hover:scale-[1.02]
                  "
                >
                  Contact Agent
                </button>

                <button
                  className="
                    w-full
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    py-3.5
                    text-[13px]
                    transition
                    hover:bg-white/[0.08]
                  "
                >
                  Schedule Viewing
                </button>

              </div>

            </div>

          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}