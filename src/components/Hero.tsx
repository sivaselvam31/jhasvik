import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroConst_Images } from "../constants";
import { states } from "../constants/index";

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [stateIndex, setStateIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HeroConst_Images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStateIndex((prev) => (prev + 1) % states.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={HeroConst_Images[index]}
            alt="South Indian Cuisine Background"
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10 mix-blend-overlay" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-7xl font-extrabold leading-tight text-[#FD6D00] drop-shadow-xl"
        >
          Experience Authentic South Indian Cuisine
        </motion.h1>

        {/* Rotating States */}
        <div className="mt-4 h-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={stateIndex}
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="block text-2xl md:text-3xl font-bold text-[#292E70]"
            >
             Menus From {states[stateIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto"
        >
          From crispy dosas to aromatic biryanis — savor the rich traditions and
          bold flavors of South India.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
        >
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-red-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
            Reserve Now
          </button>
          <button className="px-8 py-4 rounded-xl border border-white text-white font-bold text-lg shadow-lg hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300">
            View Menu
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
