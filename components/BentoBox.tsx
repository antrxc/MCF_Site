import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    title: "Industrial Grade Cabinets",
    description:
      "Our heavy-duty cabinets are perfect for industrial environments, offering unparalleled durability and storage capacity.",
    image: "/components/assets/techcorp.webp",
  },
  {
    id: 2,
    title: "Custom Office Solutions",
    description:
      "We've revolutionized office storage with our sleek, customizable cabinet systems that blend seamlessly with modern workspaces.",
    image: "/components/assets/techcorp.webp",
  },
  {
    id: 3,
    title: "Modular Storage Systems",
    description:
      "Our innovative modular systems allow for flexible, scalable storage solutions that grow with your needs.",
    image: "/components/assets/techcorp.webp",
  },
  {
    id: 4,
    title: "Specialized Medical Cabinets",
    description:
      "We've developed high-quality, sterile storage solutions for healthcare facilities, prioritizing both functionality and compliance.",
    image: "/components/assets/techcorp.webp",
  },
  {
    id: 5,
    title: "Eco-Friendly Initiatives",
    description:
      "Our commitment to sustainability is reflected in our use of recycled materials and energy-efficient manufacturing processes.",
    image: "/components/assets/techcorp.webp",
  },
  {
    id: 6,
    title: "Eco-Friendly Initiatives",
    description:
      "Our commitment to sustainability is reflected in our use of recycled materials and energy-efficient manufacturing processes.",
    image: "/components/assets/techcorp.webp",
  },
];

export function BentoBox() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {galleryItems.map((item, index) => (
        <motion.div
          key={item.id}
          className={`relative overflow-hidden rounded-lg shadow-lg ${
            index === 0 ? "md:col-span-2 md:row-span-2" : ""
          }`}
          onHoverStart={() => setHoveredId(item.id)}
          onHoverEnd={() => setHoveredId(null)}
        >
          <Image
            src={item.image}
            alt={item.title}
            layout="responsive"
            width={500} // Replace with actual width of the image
            height={300} // Replace with actual height of the image
            className="rounded-lg"
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white text-center">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
