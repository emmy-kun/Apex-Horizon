import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

const agents = [
  {
    name: "James Anderson",
    role: "Luxury Property Specialist",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200",
  },
  {
    name: "Sophia Williams",
    role: "Senior Property Advisor",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200",
  },
  {
    name: "Michael Brown",
    role: "Real Estate Consultant",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200",
  },
];

export default function Agents() {
  return (
    <section id="agents" className="bg-[#050505] py-20 md:py-40 text-white">
      <div className="mx-auto max-w-[1400px] px-6">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-500">
            Our Agents
          </p>

          <h2 className="mt-6 md:mt-8 font-[Cormorant_Garamond] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Meet The Experts Behind
            <br />
            Exceptional Properties
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-16 md:mt-24 grid gap-10 md:grid-cols-3">

          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >

              {/* IMAGE */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="
                    h-[360px]
                    sm:h-[420px]
                    md:h-[460px]
                    lg:h-[480px]
                    w-full
                    object-cover
                    transition duration-700
                    hover:scale-105
                  "
                />
              </div>

              {/* INFO */}
              <div className="mt-5 md:mt-6">

                <h3 className="font-[Cormorant_Garamond] text-2xl md:text-3xl font-semibold">
                  {agent.name}
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  {agent.role}
                </p>

                {/* ICONS */}
                <div className="mt-4 md:mt-5 flex items-center gap-5 md:gap-6 text-zinc-400">

                  <a className="hover:text-green-400 transition text-lg">
                    <FaWhatsapp />
                  </a>

                  <a className="hover:text-pink-400 transition text-lg">
                    <FaInstagram />
                  </a>

                  <a className="hover:text-blue-400 transition text-lg">
                    <FaEnvelope />
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}