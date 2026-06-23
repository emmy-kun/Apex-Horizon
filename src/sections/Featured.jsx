import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-coverflow";

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
  },
  {
    image: property2,
    title: "Oceanview Residence",
    location: "Miami",
    price: "$3.6M",
  },
  {
    image: property3,
    title: "The Grand Estate",
    location: "Beverly Hills",
    price: "$7.2M",
  },
  {
    image: property4,
    title: "Skyline Manor",
    location: "New York",
    price: "$5.4M",
  },
  {
    image: property5,
    title: "Palm Retreat",
    location: "Dubai",
    price: "$6.9M",
  },
  {
    image: property6,
    title: "Royal Heights",
    location: "London",
    price: "$8.3M",
  },
];

export default function Featured() {
  const navigate = useNavigate();

  return (
    <section
      id="properties"
      className="bg-[#050505] py-20 md:py-32 text-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-500">
            Featured Collection
          </p>

          <h2 className="mt-6 font-[Cormorant_Garamond] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Our Featured
            <br />
            Masterpieces
          </h2>

          <p className="mx-auto mt-6 md:mt-8 max-w-2xl text-sm md:text-base text-zinc-400 px-2">
            A showcase of architectural excellence, designed to inspire and built to stand the test of time.
          </p>

        </div>

        {/* Carousel */}
        <div className="mt-16 md:mt-24">

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            modules={[EffectCoverflow]}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 250,
              modifier: 1.5,
              scale: 0.85,
              slideShadows: false,
            }}
          >
            {properties.map((property, index) => (
              <SwiperSlide
                key={index}
                className="
                  !w-[260px]
                  sm:!w-[320px]
                  md:!w-[380px]
                  lg:!w-[420px]
                "
              >
                <div className="group relative overflow-hidden rounded-3xl">

                  <img
                    src={property.image}
                    alt={property.title}
                    className="
                      h-[420px]
                      sm:h-[520px]
                      md:h-[600px]
                      lg:h-[650px]
                      w-full
                      object-cover
                      transition duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

                    <h3 className="font-[Cormorant_Garamond] text-2xl md:text-3xl lg:text-4xl">
                      {property.title}
                    </h3>

                    <p className="mt-1 md:mt-2 text-sm md:text-base text-zinc-300">
                      {property.location}
                    </p>

                    <div className="mt-4 md:mt-6 flex items-center justify-between">

                      <span className="text-xl md:text-2xl lg:text-3xl font-light">
                        {property.price}
                      </span>

                      <button
                        className="rounded-full border border-white/10 bg-white/10 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm backdrop-blur-xl transition hover:bg-white/20"
                      >
                        View Property
                      </button>

                    </div>

                  </div>

                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

        {/* View All Button */}
        <div className="mt-16 md:mt-24 flex justify-center">

          <button
            onClick={() => navigate("/properties")}
            className="rounded-full border border-white/10 bg-white/5 px-8 md:px-10 py-3 md:py-4 text-sm transition hover:bg-white/10 hover:scale-105"
          >
            View All Properties
          </button>

        </div>

      </div>
    </section>
  );
}