import React from "react";
import { Link } from "react-router-dom";

import event_img from "../assets/event/event_img.webp"
import event_img01 from "../assets/event/images-img1.jpg"

const events = [
  {
    id: 1,
    title: "Yuva Samvad",
    description: "Interaction with youth in Lucknow on employment initiatives.",
    date: "2024-03-15",
    time: "10:00",
    location: "Gomti Nagar, Lucknow - 226010",
    image: event_img ,
  },
  {
    id: 2,
    title: "Infra Summit",
    description: "Infrastructure development meeting in Lucknow.",
    date: "2024-03-16",
    time: "11:30",
    location: "Hazratganj, Lucknow - 226001",
    image: event_img01,
  },
  {
    id: 3,
    title: "Gramin Sabha",
    description: "Rural development discussion in Lucknow outskirts.",
    date: "2024-03-17",
    time: "09:00",
    location: "Alambagh, Lucknow - 226005",
    image: event_img01,
  },
];

export default function EventsCarousel() {
  const mainEvent = events[0];

  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center text-[#333333] mb-10">
        Upcoming Events-<span className="text-red-600">Keshav Prasad Maurya</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Event */}
        <div className="md:col-span-2 space-y-4">
          <div className="relative rounded-xl overflow-hidden shadow-md group">
            <img
              src={mainEvent.image}
              alt={mainEvent.title}
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 bg-red-700 text-white px-4 py-2 rounded-tr-xl">
              <p className="text-xl font-bold">{new Date(mainEvent.date).getDate()}</p>
              <p className="text-xs uppercase">
                {new Date(mainEvent.date).toLocaleString("default", {
                  month: "short",
                }).toUpperCase()}
              </p>
            </div>
          </div>

          <div className="text-gray-800 space-y-2">
            <p className="text-lg font-semibold">📍 {mainEvent.location}</p>
            <p className="text-md">🕑 {mainEvent.time} AM</p>
            <p>
              Hon'ble Deputy Chief Minister Shri Keshav Prasad Maurya will address
              citizens in Lucknow on development progress and future initiatives.
            </p>
          </div>
        </div>

        {/* Side Events */}
        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <Link
              to={`/event/${event.id}`}
              state={{ event }}
              key={event.id}
              className="flex bg-gray-100 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-28 h-28 object-cover flex-shrink-0"
              />
              <div className="p-4 flex flex-col justify-between">
                <div className="flex gap-2 text-red-600 font-semibold text-sm">
                  <span>{new Date(event.date).getDate()}</span>
                  <span>
                    {new Date(event.date).toLocaleString("default", {
                      month: "short",
                    }).toUpperCase()}
                  </span>
                </div>
                <h3 className="text-base font-bold">{event.title}</h3>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {event.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
