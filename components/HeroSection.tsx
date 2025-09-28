"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/public/assets/image/Animated_globe_hero_background_4ea2689e.png";
import Image from "next/image";

const countries = ["Canada", "Germany", "Australia", "USA", "UK"];

export default function HeroSection() {
  const [currentCountry, setCurrentCountry] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    const calculateMaxWidth = () => {
      let max = 0;
      let fontSize = "2.25rem"; // text-4xl
      if (window.innerWidth >= 1024) {
        fontSize = "4.5rem"; // lg:text-7xl
      } else if (window.innerWidth >= 768) {
        fontSize = "3.75rem"; // md:text-6xl
      }

      countries.forEach((country) => {
        const span = document.createElement("span");
        span.style.fontSize = fontSize;
        span.style.fontWeight = "700";
        span.style.position = "absolute";
        span.style.visibility = "hidden";
        span.style.whiteSpace = "nowrap";
        span.textContent = country;
        document.body.appendChild(span);
        max = Math.max(max, span.offsetWidth);
        document.body.removeChild(span);
      });

      setMaxWidth(max);
    };

    calculateMaxWidth();
    window.addEventListener("resize", calculateMaxWidth);

    return () => window.removeEventListener("resize", calculateMaxWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCountry((prev) => (prev + 1) % countries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroBackground}
          alt="Globe background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Immigrate to{" "}
            <div
              className="inline-block text-left"
              style={{ minWidth: maxWidth ? `${maxWidth}px` : "auto" }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={countries[currentCountry]}
                  className="text-red-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {countries[currentCountry]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert immigration consultancy services for your dream destination.
            From visa applications to permanent residency, we guide you every
            step of the way.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="text-lg bg-primary hover:bg-primary/90 px-4 py-8 cursor-pointer"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg text-white border-[#ffffff00] hover:bg-transparent hover:text-white backdrop-blur-sm px-4 py-8 bg-transparent cursor-pointer"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Programs
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
