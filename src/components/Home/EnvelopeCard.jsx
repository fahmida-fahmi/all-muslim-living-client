import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';


const EnvelopeCard = ({ verse, suraName }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-[320px] md:w-[400px] mx-auto mt-32 z-30">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 150, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[90%] bg-[rgba(255,255,255,0.32)] p-6 rounded-xl shadow-xl text-center z-50 border-2 border-white backdrop-blur-lg"
          >
            <h2 className="text-xl font-bold mb-3 text-rose-800">
              📜 A Verse from the Quran
            </h2>
            <p className="text-gray-700 italic leading-relaxed">
              {verse} <br />
              <span className="text-sm text-gray-500">— {suraName}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnvelopeCard;