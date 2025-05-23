// NeonCarouselNumbers.tsx
"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array of numbers to display as cards
const cards = [1, 2, 3, 4, 5, 6, 7, 8];

export default function NeonCarouselNumbers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-10 bg-[#111]">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
       Glimpse of Parties
      </h2>

      <Slider {...settings}>
        {cards.map((num) => (
          <div key={num} className="px-3">
            <div
              className="relative overflow-hidden rounded-2xl bg-black text-white p-8 flex items-center justify-center h-48 transform hover:scale-105 transition-transform
                             before:absolute before:inset-0 before:rounded-2xl before:border-4 before:border-transparent before:animate-neonBorder"
            >
              <span className="text-6xl font-extrabold">{num}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
