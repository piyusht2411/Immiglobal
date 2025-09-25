"use client";

import { testimonialSecond } from "@/data";
import TestimonialCard from "./TestimonialCard";
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from clients who achieved their immigration dreams with our expert guidance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialSecond.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>
  )
}

export default Testimonial

