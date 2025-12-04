import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

function SwipeCard({ event, onSwipe }) {
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSwipeDirection("left");
      setTimeout(() => onSwipe("left", event), 300);
    },
    onSwipedRight: () => {
      setSwipeDirection("right");
      setTimeout(() => onSwipe("right", event), 300);
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className={`bg-white p-6 rounded-xl shadow-md border max-w-sm mx-auto text-center select-none transition-transform duration-300 ${
        swipeDirection === "left" ? "-translate-x-full opacity-0" : ""
      } ${swipeDirection === "right" ? "translate-x-full opacity-0" : ""}`}
    >
      <h2 className="text-2xl font-bold text-blue-700">{event.title}</h2>
      <p className="text-gray-600 mt-2">📅 {event.date}</p>
      <p className="text-gray-600">📍 {event.location}</p>

      <p className="mt-4 text-gray-500">
        Swipe ➡ to Register | Swipe ⬅ to Reject
      </p>
    </div>
  );
}

export default SwipeCard;
