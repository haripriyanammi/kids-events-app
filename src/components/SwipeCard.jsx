import React from "react";
import { useSwipeable } from "react-swipeable";

function SwipeCard({ event, onSwipe }) {
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipe("left", event),
    onSwipedRight: () => onSwipe("right", event),
    preventScrollOnSwipe: true,
    trackMouse: true, // allows swipe using mouse on desktop
  });

  return (
    <div
      {...handlers}
      className="bg-white p-6 rounded-xl shadow-md border max-w-sm mx-auto text-center select-none"
    >
      <h2 className="text-2xl font-bold text-blue-700">{event.title}</h2>
      <p className="text-gray-600 mt-2">📅 {event.date}</p>
      <p className="text-gray-600">📍 {event.location}</p>

      <p className="mt-4 text-gray-500">Swipe ➡ to Register | Swipe ⬅ to Reject</p>
    </div>
  );
}

export default SwipeCard;
