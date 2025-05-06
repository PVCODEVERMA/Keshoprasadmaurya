import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!name || !mobile) {
      toast.error("कृपया सभी फ़ील्ड भरें!");
    } else {
      toast.success("पंजीकरण सफलतापूर्वक किया गया!");
      
      setName('');
      setMobile('');
    }
  };

  return (
    <section className="bg-gray-100 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-6 max-w-2xl"
      >
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">पंजीकरण फॉर्म</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">नाम</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">मोबाइल नंबर</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            जमा करें
          </button>
        </form>
      </motion.div>

      <ToastContainer position="top-center"/>
    </section>
  );
};

export default RegistrationForm;
