"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock, Star } from "lucide-react";
import Image from "next/image";
import { popularDestinations } from "@/data";

export default function PopularDestinations() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Popular Destinations
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most sought-after countries for immigration based on
            our client success rates and current demand
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDestinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="overflow-hidden hover-elevate transition-all duration-500 border-0 shadow-lg group">
                {/* Hero Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={`${destination.country} landscape`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Flag and Trending Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="w-12 h-8 rounded shadow-md flex items-center justify-center text-lg">
                      <destination.flag
                        className="w-10 h-7"
                        title={destination.country}
                      />
                    </div>
                    {destination.trending && (
                      <Badge className="bg-chart-2 hover:bg-chart-2 text-white">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>

                  {/* Country Name */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {destination.country}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {destination.description}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-lg font-bold text-primary">
                          {destination.totalVisas}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Total Visas
                      </span>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-lg font-bold text-foreground">
                          {destination.successRate}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Success Rate
                      </span>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Clock className="h-4 w-4 text-chart-2" />
                        <span className="text-lg font-bold text-foreground">
                          {destination.avgProcessing}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Avg Processing
                      </span>
                    </div>
                  </div>

                  {/* Popular Programs */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Popular Programs:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {destination.programs.map((program, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    data-testid={`button-explore-${destination.country.toLowerCase()}`}
                  >
                    Explore {destination.country} Programs
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
