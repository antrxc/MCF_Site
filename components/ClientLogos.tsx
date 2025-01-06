import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Importing images from the assets folder
import TechCorpLogo from './assets/techcorp.webp';
import IndustrialSolutionsLogo from './assets/industrialsolutions.webp';
import MediCareLogo from './assets/medicare.webp';
import EcoStorageLogo from './assets/ecostorage.webp';
import OfficeInnovateLogo from './assets/officeinnovate.webp';
import SecureVaultLogo from './assets/securevault.webp';

const clients = [
  { id: 1, name: 'TechCorp', logo: TechCorpLogo },
  { id: 2, name: 'IndustrialSolutions', logo: IndustrialSolutionsLogo },
  { id: 3, name: 'MediCare Systems', logo: MediCareLogo },
  { id: 4, name: 'EcoStorage', logo: EcoStorageLogo },
  { id: 5, name: 'OfficeInnovate', logo: OfficeInnovateLogo },
  { id: 6, name: 'SecureVault', logo: SecureVaultLogo },
];

export function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      if (!container) return;

      // Reset scroll position if it reaches the end
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }

      requestAnimationFrame(scroll);
    };

    // Start the animation
    const animationFrameId = requestAnimationFrame(scroll);

    return () => {
      // Clean up the animation frame
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="overflow-hidden" ref={containerRef}>
      <div className="flex whitespace-nowrap">
        {/* Duplicating the array to create a seamless scroll effect */}
        {[...clients, ...clients].map((client, index) => (
          <motion.div
            key={`${client.id}-${index}`}
            className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4 inline-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src={client.logo} alt={client.name} className="max-w-full h-auto" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
