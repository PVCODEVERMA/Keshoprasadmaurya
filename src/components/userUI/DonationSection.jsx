import React, { useState } from 'react';
import bgImage from '../../assets/keshavprasadmaurya-banner.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationSection = () => {
  const [amount, setAmount] = useState('1000');
  const [custom, setCustom] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [method, setMethod] = useState('upi');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const amounts = ['1000', '2000', '3000', '5000'];

  const handleDonation = () => {
    if (!firstName.trim()) {
      toast.error('First Name is required', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
      return;
    }

    if (!email.trim()) {
      toast.error('Email Address is required', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
      return;
    }

    const numericAmount = parseInt(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      toast.error('Please enter a valid donation amount', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
      return;
    }

    toast.success(
      `Thank you! Your ${method === 'offline' ? 'offline' : 'online'} donation of ₹${numericAmount.toLocaleString(
        'en-IN'
      )} has been recorded.`,
      {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      }
    );

    setShowPopup(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setIsAnonymous(false);
  };

  return (
    <>
      <section
        className="w-full bg-cover bg-white bg-center flex items-center justify-center mb-24"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-black bg-opacity-60 p-8 w-full text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            केशव प्रसाद मौर्य के जनसेवा मिशन में सहयोग करें
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto mb-4">
            आपका योगदान उत्तर प्रदेश में कल्याणकारी योजनाओं और विकास कार्यों को आगे बढ़ाने में सहायक होगा।
          </p>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>

          <div className="flex justify-center items-center gap-2 mb-6 flex-wrap">
            <span className="bg-white text-black py-2 px-4 rounded-l">₹</span>
            <input
              type="number"
              className="py-2 px-4 rounded-r text-black w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setCustom(true);
              }}
              min="1"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {amounts.map((amt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAmount(amt);
                  setCustom(false);
                }}
                className={`py-2 px-6 rounded border transition-colors ${
                  amount === amt && !custom
                    ? 'bg-white text-black font-semibold'
                    : 'text-white border-white hover:bg-white hover:text-black'
                }`}
              >
                ₹{parseInt(amt).toLocaleString('en-IN')}.00
              </button>
            ))}
            <button
              onClick={() => {
                setCustom(true);
                setAmount('');
              }}
              className={`py-2 px-6 rounded border transition-colors ${
                custom
                  ? 'bg-white text-black font-semibold'
                  : 'text-white border-white hover:bg-white hover:text-black'
              }`}
            >
              Custom Amount
            </button>
          </div>

          <button
            className="mt-4 py-3 px-10 bg-transparent border border-white text-white font-semibold hover:bg-white hover:text-black transition duration-300 rounded"
            onClick={() => {
              setShowPopup(true);
              setFirstName('');
              setLastName('');
              setEmail('');
              setIsAnonymous(false);
            }}
          >
            DONATE NOW
          </button>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4 mb-10">
          <div className="bg-white max-w-lg w-full p-6 rounded shadow-lg relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-black"
            >
              &times;
            </button>

            <h3 className="text-lg font-semibold text-center mb-4">Select Payment Method</h3>

            <div className="flex justify-center gap-6 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={method === 'upi'}
                  onChange={() => setMethod('upi')}
                  className="accent-blue-600"
                />
                Online/UPI
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="offline"
                  checked={method === 'offline'}
                  onChange={() => setMethod('offline')}
                  className="accent-blue-600"
                />
                Offline Donation
              </label>
            </div>

            <div className="border-t pt-4">
              <h4 className="text-md font-semibold mb-3">Personal Info</h4>
              <div className="mb-3">
                <label className="block mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="block mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="block mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="accent-blue-600"
                  />
                  Make this an anonymous donation.
                </label>
              </div>

              {method === 'offline' && (
                <div className="text-sm bg-gray-50 border border-gray-300 p-4 rounded mb-4 text-left leading-relaxed">
                  <p className="font-semibold mb-2">
                    To make an offline donation toward this mission, follow these steps:
                  </p>
                  <ol className="list-decimal pl-5 mb-3 space-y-1">
                    <li>Write a check payable to <strong>"Keshav Prasad Maurya Foundation"</strong></li>
                    <li>On the memo line of the check, indicate that the donation is for <strong>"Public Welfare Programs"</strong></li>
                    <li>
                      Mail your check to:
                      <div className="mt-2 italic ml-4">
                        Keshav Prasad Maurya Office<br />
                        12 Mall Avenue<br />
                        Lucknow, Uttar Pradesh - 226001
                      </div>
                    </li>
                  </ol>
                  <p>Your support is greatly appreciated. जय हिन्द!</p>
                </div>
              )}

              <div className="lg:flex lg:items-center lg:justify-between mt-4">
                <div className="flex justify-between gap-2">
                  <span className="font-semibold">Donation Total:</span>
                  <input
                    type="text"
                    value={`₹${parseInt(amount || 0).toLocaleString('en-IN')}.00`}
                    className="border px-2 py-1 w-32 rounded text-right font-medium bg-gray-50"
                    readOnly
                  />
                </div>
                <button
                  onClick={handleDonation}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationSection;
