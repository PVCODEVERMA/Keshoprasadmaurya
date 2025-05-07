import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import YogaCards from './YogaCards';
import RegistrationForm from './Registrationform';
import InfoCards from './InfoCards';
import DonationSection from '../components/userUI/DonationSection';



const YogaScheme = () => {
  const [showForm, setShowForm] = useState(false);

  const handleRegistrationClick = () => {
    setShowForm(true);
    toast.success("आपका पंजीकरण सफलतापूर्वक खुल गया है!");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-green-100 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">केशव प्रसाद मौर्य योग योजना</h1>
          <p className="text-xl mb-8">स्वस्थ समाज के लिए योग का संकल्प</p>
          <button
            onClick={handleRegistrationClick}
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
          >
            पंजीकरण करें
          </button>
        </div>
      </section>

      {/* Registration Form */}
      {showForm && <RegistrationForm />}

      {/* Yoga Cards Component */}
      <YogaCards />

      <InfoCards />
       <DonationSection />
      

      <ToastContainer position="top-center" />
    </>
  );
};

export default YogaScheme;
