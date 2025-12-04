import React from "react";

function SwipeCard({ event }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border max-w-sm mx-auto text-center">
      <h2 className="text-2xl font-bold text-blue-700">{event.title}</h2>
      <p className="text-gray-600 mt-2">📅 {event.date}</p>
      <p className="text-gray-600">📍 {event.location}</p>

      <div className="flex justify-between mt-6">
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          ❌ Reject
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          ✅ Register
        </button>
      </div>
    </div>
  );
}

export default SwipeCard;
