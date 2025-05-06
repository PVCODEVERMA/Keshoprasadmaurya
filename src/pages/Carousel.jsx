import React, { useState, useEffect } from 'react';
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import  carousel_img_01 from '../assets/Carousel/carousel_img_01.jpg';
import  carousel_img_02 from '../assets/Carousel/carousel_img_02.jpg';
import  carousel_img_03 from '../assets/Carousel/carousel_img_03.jpg';
import  carousel_img_04 from '../assets/Carousel/carousel_img_04.jpg';

const images = [
  carousel_img_01,
  carousel_img_02,
  carousel_img_03,
  carousel_img_04,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const handleSlideChange = (direction) => {
    setCurrentIndex((prev) => {
      if (direction === 'next') {
        return prev === images.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
    });
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange('next');
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full mx-auto overflow-hidden group"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
     
      <div className="w-full h-screen flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {showButtons && (
        <button
          onClick={() => handleSlideChange('prev')}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-transform hover:scale-110"
        >
          <FaAnglesLeft />
        </button>
      )}

      
      {showButtons && (
        <button
          onClick={() => handleSlideChange('next')}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-transform hover:scale-110"
        >
          <FaAngleDoubleRight />
        </button>
      )}

     
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-gray-500'} transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
