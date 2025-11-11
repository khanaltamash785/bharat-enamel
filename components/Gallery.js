"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/gallery/list')
      .then(res => res.json())
      .then(data => {
        const imageUrls = (data.images || []).map(img => img.url);
        setImages(imageUrls);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading gallery:', error);
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

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
        {/* Desktop: Parallax 3 columns */}
        <div className="hidden lg:grid grid-cols-3 gap-10 max-w-6xl mx-auto py-30 px-6">
          <div className="grid gap-10">
            {firstPart.map((img, i) => (
              <motion.div key={`col1-${i}`} style={{ y: translateFirst }} {...motionProps}>
                <div className="relative h-80 w-full rounded-2xl shadow-md overflow-hidden">
                  <Image
                    src={img}
                    alt={`gallery-${i}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-10">
            {secondPart.map((img, i) => (
              <motion.div key={`col2-${i}`} style={{ y: translateSecond }} {...motionProps}>
                <div className="relative h-80 w-full rounded-2xl shadow-md overflow-hidden">
                  <Image
                    src={img}
                    alt={`gallery-${i}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-10">
            {thirdPart.map((img, i) => (
              <motion.div key={`col3-${i}`} style={{ y: translateThird }} {...motionProps}>
                <div className="relative h-80 w-full rounded-2xl shadow-md overflow-hidden">
                  <Image
                    src={img}
                    alt={`gallery-${i}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Horizontal scroll with snap - NO click effect */}
        <div className="lg:hidden flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 pb-4 pt-4">
          {images.map((img, index) => (
            <GalleryCardMobile
              key={`mobile-${index}`}
              image={img}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  };

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
    <section className="bg-gray-50 pt-24">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2 text-center">
        Our Work Gallery
      </h2>
      <div className="w-72 h-1 bg-gray-800 mx-auto rounded-full"></div>
      <Gallery images={images} />
    </section>
  );
}

/* Mobile Gallery Card - Simple display without click interactions */
function GalleryCardMobile({ image, index }) {
  return (
    <div className="relative w-[80vw] max-w-xs h-96 rounded-xl shadow-lg flex-shrink-0 overflow-hidden snap-center">
      <Image
        src={image}
        alt={`gallery-${index}`}
        fill
        className="object-cover"
        loading="lazy"
        sizes="80vw"
      />
    </div>
  );
}
