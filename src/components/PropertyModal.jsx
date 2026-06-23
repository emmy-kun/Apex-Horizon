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
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* CLOSE BACKDROP */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* MODAL BOX */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-5xl rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-black/60 text-white px-3 py-1 rounded-full"
          >
            ✕
          </button>

          {/* IMAGE SLIDER */}
          <div
            className="relative h-[420px] md:h-[520px] overflow-hidden"
            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const diff = e.changedTouches[0].clientX - touchStartX;
              if (diff > 50) prevImg();
              if (diff < -50) nextImg();
            }}
          >
            <img
              src={images[activeImg]}
              className="h-full w-full object-cover transition duration-500"
            />

            {/* LEFT / RIGHT ARROWS */}
            <button
              onClick={prevImg}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded-full"
            >
              ←
            </button>

            <button
              onClick={nextImg}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded-full"
            >
              →
            </button>

            {/* DOTS */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`h-2 w-2 rounded-full transition ${
                    i === activeImg ? "bg-white w-4" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* DETAILS */}
          <div className="p-6 md:p-10 text-white">
            <h2 className="text-3xl font-[Cormorant_Garamond]">
              {property.title}
            </h2>

            <p className="text-zinc-400 mt-1">{property.location}</p>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-zinc-300">
              <div>Price: {property.price}</div>
              <div>Size: {property.size}</div>
              <div>Beds: {property.beds}</div>
              <div>Baths: {property.baths}</div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-10 flex flex-col md:flex-row gap-4">
              <button
                className="
        flex-1
        rounded-full
        bg-white
        text-black
        py-4
        font-medium
        transition
        hover:scale-[1.02]
      "
              >
                Contact Agent
              </button>

              <button
                className="
        flex-1
        rounded-full
        border border-white/10
        bg-white/5
        py-4
        text-white
        backdrop-blur
        transition
        hover:bg-white/10
      "
              >
                Schedule Viewing
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
