"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import VisaCard from "./VisaCard";
import { countries, visaPrograms } from "@/data";

export default function CountrySlider() {
  const [selectedCountry, setSelectedCountry] = useState("canada");

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Choose Your Destination
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Select a country to explore available visa programs and immigration
            pathways
          </motion.p>
        </div>

        {/* Country Selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {countries.map((country) => (
            <Button
              key={country.id}
              variant={selectedCountry === country.id ? "default" : "outline"}
              size="lg"
              className={`flex items-center gap-2 text-lg px-6 py-3 cursor-pointer ${
                selectedCountry === country.id
                  ? "bg-primary text-primary-foreground"
                  : "hover-elevate"
              }`}
              onClick={() => setSelectedCountry(country.id)}
              data-testid={`button-country-${country.id}`}
            >
              {/* <span className="text-2xl">{country.flag}</span> */}
              <country.flag className="w-10 h-7" title={country.name} />
              {country.name}
            </Button>
          ))}
        </motion.div>

        {/* Visa Cards */}
        <motion.div
          key={selectedCountry}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {visaPrograms[selectedCountry as keyof typeof visaPrograms]?.map(
            (visa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VisaCard
                  visa={visa}
                  countryFlag={
                    countries.find((c) => c.id === selectedCountry)?.flag
                      ? React.createElement(
                          countries.find((c) => c.id === selectedCountry)!.flag,
                          { className: "w-10 h-6" }
                        )
                      : null
                  }
                  backgroundImage={
                    countries.find((c) => c.id === selectedCountry)?.image
                  }
                />
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
