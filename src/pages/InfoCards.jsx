import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Users, Droplet } from 'lucide-react';

const cards = [
  {
    icon: <Megaphone className="w-12 h-12 text-purple-600" />,
    title: 'Our Campaign',
    text: 'There are many variations of pages of Lorem Ipsum available, but they have suffered alteration in some form, by injected.',
  },
  {
    icon: <Users className="w-12 h-12 text-purple-600" />,
    title: 'Become A Volunteer',
    text: 'There are many variations of pages of Lorem Ipsum available, but they have suffered alteration in some form, by injected.',
  },
  {
    icon: <Droplet className="w-12 h-12 text-purple-600" />,
    title: 'Donation',
    text: 'There are many variations of pages of Lorem Ipsum available, but they have suffered alteration in some form, by injected.',
  },
];

const InfoCards = () => {
  return (
    <section className=" px-4 bg-white mb-14">
      <div className="max-w-7xl lg:max-w-[83%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;
