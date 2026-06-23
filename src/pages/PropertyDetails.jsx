import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../ui/Navbar";
import Footer from "../sections/Footer";

/* SAMPLE IMAGES (replace anytime) */
const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
  "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
];

const property = {
  title: "Oceanview Luxury Villa",
  location: "Miami, Florida",
  price: "$3.6M",
  type: "Villa",
  beds: 5,
  baths: 4,
  garage: 2,
  size: "4,800 sqft",
};

const features = [
  "Infinity Pool",
  "Smart Home System",
  "Private Cinema",
  "Ocean View",
  "Gym",
  "24/7 Security",
  "Luxury Kitchen",
  "Underground Parking",
];

const similar = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Skyline Mansion",
    price: "$4.2M",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    title: "Modern Glass Estate",
    price: "$5.1M",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566752229-250ed79470f5",
    title: "Royal Penthouse",
    price: "$6.8M",
  },
];

export default function PropertyDetails() {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="bg-[#050505] text-white">
      <Navbar />

      {/* HERO / GALLERY */}
      <section className="pt-32 px-6">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-3 gap-10">

          {/* LEFT: IMAGE GALLERY */}
          <div className="lg:col-span-2 space-y-4">

            {/* MAIN IMAGE */}
            <motion.div
              key={mainImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative h-[500px] overflow-hidden rounded-tl-3xl rounded-br-3xl"
            >
              <img
                src={mainImage}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-4 left-4 bg-black/50 border border-white/10 px-4 py-1 rounded-full text-xs backdrop-blur-md">
                For Sale
              </div>
            </motion.div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 overflow-x-auto">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className={`h-24 w-32 object-cover rounded-xl cursor-pointer border transition ${
                    mainImage === img
                      ? "border-white"
                      : "border-white/10 opacity-60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: INFO PANEL */}
          <div className="lg:sticky top-28 h-fit border border-white/10 rounded-3xl p-6 bg-white/[0.02] backdrop-blur-md">

            <h1 className="font-[Cormorant_Garamond] text-4xl">
              {property.title}
            </h1>

            <p className="text-zinc-400 mt-2">{property.location}</p>

            <p className="mt-6 text-3xl font-light">{property.price}</p>

            <div className="mt-6 space-y-2 text-sm text-zinc-400">
              <p>{property.beds} Beds</p>
              <p>{property.baths} Baths</p>
              <p>{property.garage} Garage</p>
              <p>{property.size}</p>
            </div>

            <button className="mt-6 w-full bg-white text-black py-3 rounded-full hover:scale-105 transition">
              Book Viewing
            </button>

            <button className="mt-3 w-full border border-white/10 py-3 rounded-full hover:bg-white/10 transition">
              Contact Agent
            </button>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-3xl font-[Cormorant_Garamond]">
            Property Overview
          </h2>

          <p className="mt-6 text-zinc-400 leading-relaxed">
            This luxury oceanview villa combines modern architecture with
            timeless elegance. Designed with floor-to-ceiling glass walls,
            infinity pool views, and premium finishes throughout.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-3xl font-[Cormorant_Garamond]">
            Features
          </h2>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl p-4 text-sm text-zinc-300 bg-white/[0.02]"
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENT */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[1100px] border border-white/10 rounded-3xl p-8 bg-white/[0.02] flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h3 className="text-2xl font-[Cormorant_Garamond]">
              Contact Agent
            </h3>
            <p className="text-zinc-400 mt-2">
              James Anderson — Luxury Property Specialist
            </p>
          </div>

          <button className="bg-white text-black px-8 py-3 rounded-full">
            WhatsApp Agent
          </button>
        </div>
      </section>

      {/* SIMILAR PROPERTIES */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-3xl font-[Cormorant_Garamond]">
            Similar Properties
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {similar.map((item, i) => (
              <div
                key={i}
                className="group border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-[Cormorant_Garamond] text-xl">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}