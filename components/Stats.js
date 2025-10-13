"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const stats = [
    { number: 5000, suffix: "+", label: "Signs Fabricated & Installed" },
    { number: 99, suffix: "%", label: "On-Time Project Delivery" },
    { number: 10, suffix: "+", label: "Countries Served" },
    { number: 24, suffix: "/7", label: "Signage Repair & Maintenance" },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.6, rootMargin: "0px 0px -10% 0px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.45, ease: "easeOut" },
    }),
  };

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-indigo-300 text-gray-800 mb-4">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <AnimatedCounter
                value={stat.number}
                suffix={stat.suffix}
                start={inView}
                delay={index * 150}
              />
              <div className="text-gray-800 mt-3 text-sm sm:text-base md:text-lg font-medium text-center leading-tight px-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function AnimatedCounter({ value, suffix = "", start = false, delay = 0 }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!start) return; 

    timeoutRef.current = setTimeout(() => {
      const duration = 1600;
      const startTime = performance.now();
      const from = 0;
      const to = Number(value) || 0;

      const step = (now) => {
        const t = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(from + (to - from) * eased);
        setDisplay(current);
        if (t < 1) rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, value, delay]);

  
  const formatted = new Intl.NumberFormat().format(display);

  return (
    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-indigo-900">
      <span>{formatted}</span>
      <span className="text-indigo-700">{suffix}</span>
    </div>
  );
}