import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import YogaCards_img_01 from '../assets/YogaCards/YogaCards_img_01.jpg';

const schemes = [
  {
    title: 'मुफ्त योग प्रशिक्षण',
    description: 'प्रतिदिन सुबह 6-7 बजे',
    image: YogaCards_img_01,
    benefits: ['निशुल्क योग कक्षाएं', 'विशेषज्ञ मार्गदर्शन', 'स्वास्थ्य जांच'],
  },
  {
    title: 'योग से निरोग',
    description: 'समाज को स्वस्थ बनाने की पहल',
    image: YogaCards_img_01,
    benefits: ['योग से मानसिक शांति', 'सामूहिक अभ्यास', 'स्वास्थ्य लाभ'],
  },
  {
    title: 'फिट इंडिया मिशन',
    description: 'योग द्वारा शरीर को चुस्त-दुरुस्त बनाएं',
    image: YogaCards_img_01,
    benefits: ['योग विशेषज्ञ की सलाह', 'योग सत्र लाइव', 'पोषण एवं स्वास्थ्य टिप्स'],
  },
];

const YogaCards = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: scrollRef.current.offsetWidth,
          behavior: 'smooth',
        });
      }
    }, 3000); // Auto scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container max-w-7xl mx-auto px-6 py-5">
      <h2 className="text-3xl font-bold text-center ">योग नगर कार्ड</h2>

      <div
        ref={scrollRef}
        className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-4"
      >
        {schemes.map((scheme, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="min-w-[100%] md:min-w-0 bg-white rounded-xl shadow-xl overflow-hidden snap-center transform hover:scale-105 transition duration-300 flex flex-col"
          >
            <img
              src={scheme.image}
              alt={scheme.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-bold mb-2">{scheme.title}</h3>
                <p className="text-gray-700 mb-4">{scheme.description}</p>
              </div>
              <ul className="list-none text-green-700 font-medium space-y-1">
                {scheme.benefits.map((item, idx) => (
                  <li key={idx}>✔️ {item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default YogaCards;
