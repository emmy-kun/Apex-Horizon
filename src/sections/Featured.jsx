import { useState } from "react";
import { useNavigate } from "react-router-dom";

import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.jpg";
import property3 from "../assets/property3.jpg";
import property4 from "../assets/property4.jpg";
import property5 from "../assets/property5.jpg";
import property6 from "../assets/property6.jpg";

const properties = [
  {
    image: property1,
    title: "Modern Horizon Villa",
    location: "Los Angeles",
    price: "$4.8M",
    beds: 5,
    baths: 7,
    area: "12,000 Sq Ft",
    description:
      "Modern luxury designed for timeless living, exceptional comfort, and breathtaking architectural elegance.",
  },
  {
    image: property2,
    title: "Oceanview Residence",
    location: "Miami",
    price: "$3.6M",
    beds: 4,
    baths: 5,
    area: "8,500 Sq Ft",
    description:
      "Elegant spaces paired with panoramic views and sophisticated contemporary interiors.",
  },
  {
    image: property3,
    title: "The Grand Estate",
    location: "Beverly Hills",
    price: "$7.2M",
    beds: 6,
    baths: 8,
    area: "15,200 Sq Ft",
    description:
      "Architectural excellence crafted for distinguished lifestyles and extraordinary experiences.",
  },
  {
    image: property4,
    title: "Skyline Manor",
    location: "New York",
    price: "$5.4M",
    beds: 5,
    baths: 6,
    area: "10,600 Sq Ft",
    description:
      "Contemporary design with seamless indoor and outdoor living spaces.",
  },
  {
    image: property5,
    title: "Palm Retreat",
    location: "Dubai",
    price: "$6.9M",
    beds: 7,
    baths: 8,
    area: "14,500 Sq Ft",
    description:
      "Refined luxury inspired by elegance, comfort, and modern architecture.",
  },
  {
    image: property6,
    title: "Royal Heights",
    location: "London",
    price: "$8.3M",
    beds: 8,
    baths: 9,
    area: "18,000 Sq Ft",
    description:
      "Exclusive residences created for those who appreciate timeless sophistication.",
  },
];

export default function Featured() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === properties.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? properties.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="properties"
      className="bg-[#050505] py-24 md:py-28 text-white"
    >
      <div className="mx-auto max-w-[1300px] px-6 md:px-8">

        {/* Header */}
        <div className="text-center">

          <p className="text-[10px] uppercase tracking-[0.45em] text-zinc-500">
            Featured Collection
          </p>

          <h2 className="mt-6 font-[Cormorant_Garamond] text-3xl md:text-5xl font-semibold leading-[1.05]">
            Featured Properties
          </h2>

        </div>

        {/* Main Section */}
        <div className="mt-16 md:mt-20 grid items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">

          {/* Left Image */}
          <div className="group overflow-hidden rounded-[1.75rem]">

            <img
              src={properties[current].image}
              alt={properties[current].title}
              className="
                h-[320px]
                sm:h-[400px]
                md:h-[450px]
                lg:h-[560px]
                w-full
                object-cover
                transition duration-700
                group-hover:scale-105
              "
            />

          </div>

          {/* Right Content */}
          <div>

            <p className="text-lg text-zinc-400">
              {properties[current].price}
            </p>

            <h3 className="mt-5 font-[Cormorant_Garamond] text-3xl md:text-4xl font-semibold leading-[1.05]">
              {properties[current].title}
            </h3>

            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
              {properties[current].location}
            </p>

            <p className="mt-6 max-w-md text-sm md:text-[15px] leading-7 text-zinc-400">
              {properties[current].description}
            </p>

            {/* Specs */}
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-zinc-300">

              <div className="flex items-center gap-2">
                <span className="text-white">{properties[current].beds}</span>
                <span className="text-zinc-500">Beds</span>
              </div>

              <div className="h-4 w-px bg-white/10"></div>

              <div className="flex items-center gap-2">
                <span className="text-white">{properties[current].baths}</span>
                <span className="text-zinc-500">Baths</span>
              </div>

              <div className="h-4 w-px bg-white/10"></div>

              <div className="flex items-center gap-2">
                <span className="text-white">{properties[current].area}</span>
              </div>

            </div>

            {/* Button */}
            <button
              onClick={() => navigate("/properties")}
              className="
                mt-10
                rounded-full
                bg-white
                px-7
                py-3
                text-sm
                font-medium
                text-black
                transition
                hover:scale-105
              "
            >
              View Property
            </button>

          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="mt-14 flex items-center justify-center gap-6">

          <button
            onClick={prevSlide}
            className="
              h-10
              w-10
              rounded-full
              border
              border-white/10
              text-lg
              transition
              hover:border-white/30
            "
          >
            ←
          </button>

          <div className="flex gap-2">

            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-white"
                    : "w-2 bg-zinc-700"
                }`}
              />
            ))}

          </div>

          <button
            onClick={nextSlide}
            className="
              h-10
              w-10
              rounded-full
              bg-white
              text-lg
              text-black
              transition
              hover:scale-105
            "
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}