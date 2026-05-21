"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import sale from "@/assets/sale.png";
import sunglass from "@/assets/sunglass.png";
import summer from "@/assets/summer.png";
import Footer from "@/components/Footer";

export default function Home() {
  const slides = [
    { image: sale, alt: "offer" },
    { image: sunglass, alt: "glass" },
    { image: summer, alt: "summer" },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-center">
        <Image src={slides[current].image} alt={slides[current].alt} className="w-full h-140 object-contain p-6 md:p-13" />
      </div>

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
        <button onClick={prevSlide} className="btn btn-circle bg-amber-300" >  ❮ </button>

        <button onClick={nextSlide} className="btn btn-circle bg-amber-500" > ❯ </button>
      </div>
      
    </div>
  );
}