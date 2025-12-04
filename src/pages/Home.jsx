import React, { useState } from "react";
import sampleEvents from "../data/sampleEvents";
import SwipeCard from "../components/SwipeCard";

function Home() {
  const [events, setEvents] = useState(sampleEvents);

  const handleSwipe = (direction, event) => {
    console.log(direction === "right" ? "Registered for:" : "Rejected:", event.title);

    // REMOVE the swiped event from the stack
    setEvents((prev) => prev.filter((e) => e.id !== event.id));
  };

  return (
    <div className="max-w-5xl mx-auto mt-6">

      {/* Hero Section */}
      {/* Animated Hero Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="
    relative p-10 rounded-3xl shadow-lg mb-12 text-center 
    bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100
    overflow-hidden
  "
>
  {/* Floating shapes */}
  <motion.div
    className="absolute top-4 left-6 h-10 w-10 bg-pink-300 rounded-full opacity-30"
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3 }}
  />
  <motion.div
    className="absolute bottom-6 right-10 h-12 w-12 bg-purple-300 rounded-full opacity-30"
    animate={{ y: [0, 15, 0] }}
    transition={{ repeat: Infinity, duration: 4 }}
  />

  {/* Text */}
  <h1 className="text-4xl font-extrabold text-blue-700 mb-2 tracking-wide">
    Discover Fun Events for Kids 🎉
  </h1>

  <p className="text-gray-700 text-lg">
    Learn, play, explore — swipe to find exciting activities your kids will love!
  </p>

  {/* CTA Buttons */}
  <div className="mt-6 flex justify-center gap-4">
    <Link
      to="/swipe"
      className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
    >
      Start Swiping 🚀
    </Link>

    <Link
      to="/browse"
      className="px-6 py-2 bg-white border border-blue-500 text-blue-600 rounded-full shadow hover:bg-blue-50 transition"
    >
      Browse Events 🎨
    </Link>
  </div>
</motion.div>


      {/* Swipe Mode Section */}
      <h2 className="text-2xl font-semibold mb-4 text-center">Swipe Events</h2>

      <div className="relative mt-6 h-[450px] flex justify-center items-center">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="absolute top-0"
            style={{ zIndex: events.length - index }}
          >
            <SwipeCard event={event} onSwipe={handleSwipe} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;
