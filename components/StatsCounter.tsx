"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  end: number;
  duration: number;
  label: string;
  suffix?: string;
}

function StatCounter({ end, duration, label, suffix = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const startCount = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );

        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.round(
          startCount + (end - startCount) * easeOut
        );

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="text-4xl md:text-5xl font-bold text-primary mb-2"
        data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-lg text-white">{label}</div>
    </motion.div>
  );
}

export default function StatsCounter() {
  // TODO: Remove mock data - replace with real statistics
  const stats = [
    { end: 15, duration: 2.5, label: "Years Experience", suffix: "+" },
    { end: 5000, duration: 3, label: "Visas Approved", suffix: "+" },
    { end: 25, duration: 2, label: "Countries Served" },
    { end: 98, duration: 2.5, label: "Success Rate", suffix: "%" },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Track Record Speaks
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Trusted by thousands of clients worldwide for their immigration
            journey
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              end={stat.end}
              duration={stat.duration}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
