// src/components/ImageCarousel.jsx
import React, { useEffect, useState } from "react";

const images = [
  "/carousel/image1.jpg",
  "/carousel/image2.jpg",
  "/carousel/image3.jpg"
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-64 sm:h-80 md:h-[400px] overflow-hidden relative">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
