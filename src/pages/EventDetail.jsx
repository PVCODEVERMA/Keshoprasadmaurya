import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

// Import assets
import event_img from "../assets/event/event_img.webp";
import event_img01 from "../assets/event/images-img1.jpg";
import event_img02 from "../assets/event/images-img2.jpg";

// Event Data
const allEvents = [
  {
    id: 1,
    title: "Yuva Samvad",
    description: "Interaction with youth in Lucknow on employment initiatives.",
    date: "2024-03-15",
    time: "10:00",
    location: "Gomti Nagar, Lucknow - 226010",
    image: event_img,
    phone: "0522-111111",
    website: "https://example.com",
  },
  {
    id: 2,
    title: "Infra Summit",
    description: "Infrastructure development meeting in Lucknow.",
    date: "2024-03-16",
    time: "11:30",
    location: "Hazratganj, Lucknow - 226001",
    image: event_img01,
    phone: "0522-222222",
    website: "https://example.com",
  },
  {
    id: 3,
    title: "Gramin Sabha",
    description: "Rural development discussion in Lucknow outskirts.",
    date: "2024-03-17",
    time: "09:00",
    location: "Alambagh, Lucknow - 226005",
    image: event_img02,
    phone: "0522-333333",
    website: "https://example.com",
  },
];

const fallbackEvent = {
  id: 0,
  title: "जन संवाद कार्यक्रम",
  description: "श्री केशव प्रसाद मौर्य जी द्वारा आयोजित “जन संवाद” कार्यक्रम में आप सभी आमंत्रित हैं।",
  date: "2025-03-14",
  time: "14:00",
  location: "Civil Lines, Prayagraj - 211001",
  image: event_img,
  phone: "0522-123456",
  website: "https://keshavprasadmaurya.com",
};

const EventDetail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const found = state?.event?.id === parseInt(id) ? state.event : allEvents.find(e => e.id === parseInt(id));
    setEvent(found || fallbackEvent);
  }, [id, state]);

  useEffect(() => {
    if (!event) return;

    const eventDate = new Date(`${event.date}T${event.time}`);

    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [event]);

  if (!event) return <div className="p-10 text-center">Loading Event...</div>;

  const relatedEvents = allEvents.filter(e => e.id !== event.id);

  return (
    <section className="p-6 md:p-12 grid md:grid-cols-3 gap-8 bg-white">
      {/* Left Content */}
      <div className="md:col-span-2 space-y-6 mt-28 md:mt-24">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-96 object-cover rounded-xl shadow-md"
        />
        <h2 className="text-3xl font-bold text-red-700">{event.title}</h2>
        <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>

        <iframe
          title="Google Maps"
          src={`https://www.google.com/maps?q=${encodeURIComponent(event.location)}&output=embed`}
          className="w-full h-64 md:h-80 rounded-lg shadow"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      {/* Sidebar */}
      <aside className="bg-red-50 p-6 rounded-xl shadow-md space-y-6 mt-8 mb-28 md:mt-24">
        {/* Countdown */}
        <div className="bg-red-600 text-white p-4 grid grid-cols-4 gap-2 text-center rounded-lg">
          {["days", "hours", "mins", "secs"].map((unit, i) => (
            <div key={i}>
              <p className="text-2xl font-bold">{timeLeft[unit]}</p>
              <p className="text-xs uppercase">{unit}</p>
            </div>
          ))}
        </div>

        {/* Event Info */}
        <div className="space-y-3 text-gray-800 text-sm">
          <p><strong>📍 Location:</strong> {event.location}</p>
          <p><strong>📅 Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
          <p><strong>🕒 Time:</strong> {formatTime(event.time)}</p>
          <p><strong>📞 Phone:</strong> <a href={`tel:${event.phone}`} className="text-blue-600">{event.phone}</a></p>
          <p><strong>🌐 Website:</strong> <a href={event.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{event.website}</a></p>
        </div>

        {/* Related Events */}
        <div>
          <h3 className="text-lg font-semibold text-red-700 mb-3">Related Events</h3>
          <div className="space-y-3">
            {relatedEvents.map((rel) => (
              <div key={rel.id} className="bg-white rounded-lg shadow p-3 flex gap-3 items-start">
                <img src={rel.image} alt={rel.title} className="w-16 h-16 object-cover rounded-md" />
                <div className="text-sm">
                  <h4 className="font-bold text-gray-800">{rel.title}</h4>
                  <p className="text-xs text-gray-500">
                    {new Date(rel.date).toLocaleDateString()} • {formatTime(rel.time)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
};

function formatTime(time24) {
  const [h, m] = time24.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, "0")} ${ampm}`;
}

export default EventDetail;
