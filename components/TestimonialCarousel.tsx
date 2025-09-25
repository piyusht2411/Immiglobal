"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data';
;

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our clients who achieved their immigration goals with our expert guidance
          </p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card border-card-border">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-20" />
                    
                    <p className="text-lg text-foreground mb-6 leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </p>

                    <div className="flex justify-center mb-4">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage 
                          src={typeof testimonials[currentIndex].avatar === 'string' ? testimonials[currentIndex].avatar : testimonials[currentIndex].avatar.src} 
                          alt={testimonials[currentIndex].name}
                        />
                        <AvatarFallback>
                          {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <div className="font-semibold text-foreground">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].program} • {testimonials[currentIndex].country}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => setCurrentIndex(index)}
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}