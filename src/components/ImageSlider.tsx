// components/full-width-slider.tsx
"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample Unsplash images (construction/architecture themed)
const unsplashImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80",
    alt: "Modern Construction",
    title: "Modern Construction",
    description: "Innovative building techniques shaping the future"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1487956382158-bb926046304a?w=1920&q=80",
    alt: "Architecture Design",
    title: "Architecture Design",
    description: "Creative architectural solutions"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80",
    alt: "Urban Development",
    title: "Urban Development",
    description: "Transforming city landscapes"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1487956382158-bb926046304a?w=1920&q=80",
    alt: "Interior Design",
    title: "Interior Design",
    description: "Beautiful interior spaces"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80",
    alt: "Sustainable Architecture",
    title: "Sustainable Architecture",
    description: "Eco-friendly building solutions"
  }
];

// Custom Arrow Components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Next slide"
    >
      <ChevronRight className="h-6 w-6 text-[#404e7a] group-hover:scale-110 transition-transform" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-6 w-6 text-[#404e7a] group-hover:scale-110 transition-transform" />
    </button>
  );
};

export default function FullWidthSlider() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-8">
        <ul className="m-0 flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-3 w-3 bg-white/50 hover:bg-white rounded-full transition-all duration-300 cursor-pointer"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {unsplashImages.map((image) => (
          <div key={image.id} className="relative h-screen">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative h-full flex items-center justify-center px-4 md:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up">
                  {image.title}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up animate-delay-200">
                  {image.description}
                </p>
                <button className="bg-[#404e7a] hover:bg-[#404e7a]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 animate-fade-up animate-delay-300">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-20">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-white group-hover:scale-110" />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-white group-hover:scale-110" />
        </button>
      </div>
    </div>
  );
}