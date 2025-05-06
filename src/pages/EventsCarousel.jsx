import React, { useState, useRef, useEffect } from 'react';


import cardImgae_01 from '../assets/card/card_img01.jpg';
import cardImgae_02 from '../assets/card/card_img02.jpg';
import cardImgae_03 from '../assets/card/card_img03.jpg';
import cardImgae_04 from '../assets/card/card_img04.jpg';
const cards = [
  {
    title: 'Tech Conference 2025',
    desc: 'Meet global developers in an annual summit.',
    date: '📅 April 30, 2025',
    img: cardImgae_01,
  },
  {
    title: 'AI Innovation',
    desc: 'AI revolution reshaping the tech industry.',
    date: '🗞️ April 22, 2025',
    img: cardImgae_02,
  },
  {
    title: 'Startup Expo',
    desc: 'Student startups pitching for big opportunities.',
    date: '📍 May 5, 2025',
    img: cardImgae_03,
  },
  {
    title: 'Hackathon Sprint',
    desc: '24-hour coding challenge for enthusiasts.',
    date: '🚀 May 15, 2025',
    img: cardImgae_04,
  },
];

const EventsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  const slideLeft = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const slideRight = () => {
    const visible = window.innerWidth >= 768 ? 3 : 1;
    setIndex((prev) => Math.min(prev + 1, cards.length - visible));
  };

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`max-w-7xl mx-auto px-4 py-12 transition-all duration-1000 ${loading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
      <h2 className="text-3xl font-bold text-center mb-10">Events & News</h2>

      <div
        className="relative group overflow-hidden"
        onMouseEnter={() => sliderRef.current?.classList.add('show-buttons')}
        onMouseLeave={() => sliderRef.current?.classList.remove('show-buttons')}
      >
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className={`min-w-full md:min-w-[33.3333%] px-4 transition-all duration-500 ${
                i === index ? 'scale-100' : 'scale-95 opacity-80'
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500">
                <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600 mb-2">{card.desc}</p>
                  <span className="text-sm text-gray-400">{card.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={slideLeft}
          className="hidden group-hover:flex absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &#8592;
        </button>

        {/* Right Button */}
        <button
          onClick={slideRight}
          className="hidden group-hover:flex absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default EventsCarousel;
