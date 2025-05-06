import React from 'react';
import { motion } from 'framer-motion';
import  YogaCards_img_01 from '../assets/YogaCards/YogaCards_img_01.jpg';
import  YogaCards_img_02 from '../assets/YogaCards/YogaCards_img_02.jpg';
import  YogaCards_img_03 from '../assets/YogaCards/YogaCards_img_03.jpg';

const schemes = [
  {
    title: 'मुफ्त योग प्रशिक्षण',
    description: 'प्रतिदिन सुबह 6-7 बजे',
    image: YogaCards_img_01,
    benefits: [
      'निशुल्क योग कक्षाएं',
      'विशेषज्ञ मार्गदर्शन',
      'स्वास्थ्य जांच',
    ],
  },
  {
    title: 'योग से निरोग',
    description: 'समाज को स्वस्थ बनाने की पहल',
    image: YogaCards_img_01,
    benefits: [
      'योग से मानसिक शांति',
      'सामूहिक अभ्यास',
      'स्वास्थ्य लाभ',
    ],
  },
  {
    title: 'फिट इंडिया मिशन',
    description: 'योग द्वारा शरीर को चुस्त-दुरुस्त बनाएं',
    image: YogaCards_img_01,
    benefits: [
      'योग विशेषज्ञ की सलाह',
      'योग सत्र लाइव',
      'पोषण एवं स्वास्थ्य टिप्स',
    ],
  },
];

const YogaCards = () => {
  return (
    <section className="container max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">योग नगर कार्ड</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {schemes.map((scheme, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition"
          >
            <img src={scheme.image} alt={scheme.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{scheme.title}</h3>
              <p className="text-gray-700 mb-3">{scheme.description}</p>
              <ul className="list-none text-green-700 font-medium">
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
