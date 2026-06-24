import { useState } from "react";
import Navbar from "../ui/Navbar";
import Footer from "../sections/Footer";
import PropertyModal from "../components/PropertyModal";

const propertiesData = [
  {
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000",
    title: "Oceanview Residence",
    location: "Miami, Florida",
    type: "Villa",
    price: "$3.6M",
    size: "4,800 sqft",
    beds: 5,
    baths: 4,
    garage: 2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2000",
    title: "Modern Horizon Villa",
    location: "Los Angeles, California",
    type: "Villa",
    price: "$4.8M",
    size: "5,300 sqft",
    beds: 6,
    baths: 5,
    garage: 3,
  },
  {
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=2000",
    title: "Royal Heights",
    location: "London, UK",
    type: "Penthouse",
    price: "$8.3M",
    size: "7,100 sqft",
    beds: 7,
    baths: 6,
    garage: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2000",
    title: "Palm Retreat",
    location: "Dubai, UAE",
    type: "Villa",
    price: "$6.9M",
    size: "6,400 sqft",
    beds: 6,
    baths: 5,
    garage: 3,
  },
  {
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=2000",
    title: "Skyline Manor",
    location: "New York, USA",
    type: "Apartment",
    price: "$5.4M",
    size: "5,900 sqft",
    beds: 5,
    baths: 5,
    garage: 2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000",
    title: "Grand Estate",
    location: "Beverly Hills, California",
    type: "Villa",
    price: "$7.2M",
    size: "8,200 sqft",
    beds: 8,
    baths: 7,
    garage: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2000",
    title: "Crystal Heights",
    location: "Toronto, Canada",
    type: "Apartment",
    price: "$2.9M",
    size: "3,900 sqft",
    beds: 4,
    baths: 3,
    garage: 1,
  },
  {
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2000",
    title: "Azure Villa",
    location: "Santorini, Greece",
    type: "Villa",
    price: "$5.1M",
    size: "4,700 sqft",
    beds: 5,
    baths: 4,
    garage: 2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000",
    title: "Emerald Mansion",
    location: "Paris, France",
    type: "Penthouse",
    price: "$6.4M",
    size: "6,000 sqft",
    beds: 6,
    baths: 5,
    garage: 2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2000",
    title: "Golden Sands Villa",
    location: "Dubai, UAE",
    type: "Villa",
    price: "$9.2M",
    size: "9,000 sqft",
    beds: 9,
    baths: 8,
    garage: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=2000",
    title: "Nordic Retreat",
    location: "Oslo, Norway",
    type: "Villa",
    price: "$3.3M",
    size: "4,200 sqft",
    beds: 4,
    baths: 3,
    garage: 2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2000",
    title: "Harbor Lights",
    location: "Sydney, Australia",
    type: "Apartment",
    price: "$4.1M",
    size: "4,600 sqft",
    beds: 5,
    baths: 4,
    garage: 2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=2000",
    title: "Royal Palm Estate",
    location: "Miami, Florida",
    type: "Villa",
    price: "$7.8M",
    size: "8,500 sqft",
    beds: 7,
    baths: 6,
    garage: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000",
    title: "Glass Horizon",
    location: "Los Angeles, California",
    type: "Penthouse",
    price: "$10.2M",
    size: "10,000 sqft",
    beds: 10,
    baths: 9,
    garage: 5,
  },
];

const getGallery = (item) => [
  item.image,
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000",
];

export default function Property() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  const filtered = propertiesData.filter((item) => {
    const matchType = filter === "All" || item.type === filter;
    const matchSearch = item.location
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchType && matchSearch;
  });

  const openModal = (property) => {
    setSelectedProperty({
      ...property,
      gallery: getGallery(property),
    });
    setActiveImg(0);
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setActiveImg(0);
  };

  const nextImg = () => {
    setActiveImg((prev) =>
      prev === selectedProperty.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImg = () => {
    setActiveImg((prev) =>
      prev === 0 ? selectedProperty.gallery.length - 1 : prev - 1
    );
  };
    return (
    <div className="bg-[#050505] text-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 md:pt-36 pb-16 md:pb-20 px-6">
        <div className="mx-auto max-w-[1280px]">

          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            Properties
          </p>

          <h1
            className="
              mt-6
              font-[Cormorant_Garamond]
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[4.8rem]
              leading-[0.95]
              font-semibold
            "
          >
            Luxury Homes
            <br />
            Around The World
          </h1>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by location..."
            className="
              mt-8
              w-full
              md:w-[420px]
              rounded-full
              border border-white/10
              bg-white/[0.03]
              px-5
              py-3
              text-sm
              outline-none
            "
          />

        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6">
        <div className="mx-auto max-w-[1280px] flex flex-wrap gap-3">

          {["All", "Villa", "Apartment", "Penthouse"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`
                rounded-full
                px-6
                py-2.5
                text-sm
                border
                transition
                ${
                  filter === type
                    ? "bg-white text-black border-white"
                    : "border-white/10 hover:bg-white/[0.05]"
                }
              `}
            >
              {type}
            </button>
          ))}

        </div>
      </section>

      {/* PROPERTY GRID */}
      <section className="py-16 md:py-20 px-6">

        <div className="mx-auto max-w-[1280px] grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filtered.map((property, index) => (
            <div
              key={index}
              className="
                group
                overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-white/[0.02]
              "
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <div className="absolute left-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-[11px] backdrop-blur">
                  FOR SALE
                </div>

                <img
                  src={property.image}
                  alt={property.title}
                  className="
                    h-[280px]
                    sm:h-[320px]
                    lg:h-[340px]
                    w-full
                    object-cover
                    transition duration-700
                    group-hover:scale-105
                  "
                />

              </div>

              {/* DETAILS */}
              <div className="p-5">

                <h2
                  className="
                    font-[Cormorant_Garamond]
                    text-2xl
                    leading-none
                    font-semibold
                  "
                >
                  {property.title}
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  {property.location}
                </p>

                {/* PRICE + SIZE */}
                <div className="mt-5 flex items-center justify-between text-sm">

                  <span className="font-light text-lg">
                    {property.price}
                  </span>

                  <span className="text-zinc-500">
                    {property.size}
                  </span>

                </div>

                {/* SPECS */}
                <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">

                  <span>{property.beds} Beds</span>

                  <span>{property.baths} Baths</span>

                  <span>{property.garage} Garage</span>

                </div>

                {/* BUTTON */}
                <button
                  onClick={() => openModal(property)}
                  className="
                    mt-6
                    w-full
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    py-3
                    text-sm
                    transition
                    hover:bg-white/[0.08]
                  "
                >
                  View Details
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* MODAL */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          activeImg={activeImg}
          nextImg={nextImg}
          prevImg={prevImg}
          setActiveImg={setActiveImg}
          onClose={closeModal}
        />
      )}

      <Footer />
    </div>
  );
}