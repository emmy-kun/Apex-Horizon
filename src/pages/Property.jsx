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

// OPTIONAL: extra images per property for modal gallery
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

  const fullList = [...propertiesData];

  const filtered = fullList.filter((item) => {
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
      <section className="pt-40 pb-20 px-6">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[11px] uppercase tracking-[0.5em] text-zinc-500">
            Properties
          </p>

          <h1 className="mt-8 font-[Cormorant_Garamond] text-5xl md:text-7xl font-semibold">
            Luxury Homes
            <br />
            Around The World
          </h1>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by location..."
            className="mt-10 w-full md:w-1/2 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white"
          />
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6">
        <div className="mx-auto max-w-[1400px] flex flex-wrap gap-4">
          {["All", "Villa", "Apartment", "Penthouse"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`rounded-full px-8 py-3 border transition ${
                filter === type
                  ? "bg-white text-black"
                  : "border-white/10 hover:bg-white/10"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1400px] grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-white/10 rounded-tl-3xl rounded-br-3xl bg-white/[0.02]"
            >
              {/* IMAGE */}
              <div className="relative h-[420px] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-black/60 text-xs px-3 py-1 rounded-full backdrop-blur">
                  FOR SALE
                </div>

                <img
                  src={property.image}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* DETAILS */}
              <div className="p-6">
                <h2 className="font-[Cormorant_Garamond] text-3xl">
                  {property.title}
                </h2>

                <p className="text-zinc-500 mt-1">{property.location}</p>

                <div className="mt-6 flex justify-between">
                  <span>{property.price}</span>
                  <span>{property.size}</span>
                </div>

                <div className="mt-4 flex justify-between text-sm text-zinc-400">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.garage} Garage</span>
                </div>

                {/* VIEW DETAILS BUTTON */}
                <button
                  onClick={() => openModal(property)}
                  className="mt-8 w-full rounded-full border border-white/10 bg-white/[0.04] py-4 text-sm transition hover:bg-white/10 hover:scale-[1.02]"
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