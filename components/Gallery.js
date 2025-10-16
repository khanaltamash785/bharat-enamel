"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

export default function GalleryPage() {
  // State to store dynamically loaded images
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch images from API on component mount
  useEffect(() => {
    fetch('/api/gallery/list')
      .then(res => res.json())
      .then(data => {
        // Extract just the URLs from the API response
        const imageUrls = (data.images || []).map(img => img.url);
        setImages(imageUrls);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading gallery:', error);
        // Fallback to empty array if API fails
        setImages([]);
        setLoading(false);
      });
  }, []);

  const Gallery = ({ images = [], className }) => {
    const gridRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: gridRef,
        offset: ["start end", "end start"],
    });

    // Parallax translations for large screens
    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, 100]);

    // Split images into 3 columns (duplicated for looping effect)
    const third = Math.ceil(images.length / 3);
    const firstPart = [...images.slice(0, third), ...images.slice(0, third)];
    const secondPart = [...images.slice(third, 2 * third), ...images.slice(third, 2 * third)];
    const thirdPart = [...images.slice(2 * third), ...images.slice(2 * third)];

    const motionProps = {
      initial: { opacity: 0, scale: 1 },
      whileInView: { opacity: 1 },
      viewport: { once: true, amount: 0.2 },
      whileHover: { scale: 1.05 },
      transition: { duration: 0.5, ease: "easeOut" },
    };

    return (
      <div
        ref={gridRef}
        className={clsx(
            "w-full overflow-hidden",
            "items-start",
            className
        )}
      >
        {/* --- Large screens: Parallax 3 columns --- */}
        <div className="hidden lg:grid grid-cols-3 gap-10 max-w-6xl mx-auto py-30 px-6">
          {/* First column */}
          <div className="grid gap-10">
            {firstPart.map((img, i) => (
              <motion.div key={`col1-${i}`} style={{ y: translateFirst }} {...motionProps}>
                <img
                  src={img}
                  alt={`gallery-${i}`}
                  className="h-80 w-full object-cover rounded-2xl shadow-md"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Second column */}
          <div className="grid gap-10">
            {secondPart.map((img, i) => (
              <motion.div key={`col2-${i}`} style={{ y: translateSecond }} {...motionProps}>
                <img
                  src={img}
                  alt={`gallery-${i}`}
                  className="h-80 w-full object-cover rounded-2xl shadow-md"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Third column */}
          <div className="grid gap-10">
            {thirdPart.map((img, i) => (
              <motion.div key={`col3-${i}`} style={{ y: translateThird }} {...motionProps}>
                <img
                  src={img}
                  alt={`gallery-${i}`}
                  className="h-80 w-full object-cover rounded-2xl shadow-md"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Small & Medium screens: Collage --- */}
        <div className="grid grid-cols-2 gap-4 px-4 py-10 lg:hidden">
          {images.map((img, i) => (
            <motion.div
              key={`mobile-${i}`}
              {...motionProps}
              className={clsx(
                "rounded-2xl overflow-hidden shadow-md",
                i % 5 === 0
                  ? "col-span-2 row-span-2"
                  : i % 3 === 0
                  ? "row-span-2"
                  : "row-span-1"
              )}
            >
              <img
                src={img}
                alt={`gallery-${i}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  // Show loading state while fetching images
  if (loading) {
    return (
      <section className="bg-gray-50 pt-6 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-800 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading gallery...</p>
        </div>
      </section>
    );
  }

  // Show message if no images available
  if (images.length === 0) {
    return (
      <section className="bg-gray-50 pt-6 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-xl">No images available yet.</p>
          <p className="text-gray-500 text-sm mt-2">Upload images from the admin panel.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 pt-6">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2 text-center">
        Our Work Gallery
      </h2>
      <div className="w-72 h-1 bg-gray-800 mx-auto rounded-full"></div>
      <Gallery images={images} />
    </section>
  );
}