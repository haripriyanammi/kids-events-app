import React, { useState } from "react";
import sampleEvents from "../data/sampleEvents";
import SwipeCard from "../components/SwipeCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  const [events, setEvents] = useState(sampleEvents);

  const handleSwipe = (direction, event) => {
    console.log(direction === "right" ? "Registered for:" : "Rejected:", event.title);
    setEvents((prev) => prev.filter((e) => e.id !== event.id));
  };

  return (
    <div
      className="min-h-screen w-full pt-24 pb-20"
      style={{
        background:
          "linear-gradient(135deg, #2b0050, #3d0063, #4b0082, #000000)",
      }}
    >
      {/* ---------------- HERO SECTION ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          relative max-w-6xl mx-auto mt-10 p-12 rounded-3xl 
          shadow-[0_0_70px_rgba(0,0,0,0.7)]
          bg-gradient-to-br from-purple-900 via-purple-800 to-black
          overflow-hidden text-white
        "
      >
        {/* Floating glowing blobs */}
        <motion.div
          className="absolute top-14 left-14 h-40 w-40 bg-purple-500 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />
        <motion.div
          className="absolute bottom-10 right-10 h-48 w-48 bg-purple-400 rounded-full blur-3xl opacity-25"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />

        {/* Content row */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* LEFT SIDE — Silhouette Illustration */}
          <motion.img
            src="cartoon-children-playing-around-books.jpg" 
            alt="kids playing silhouette"
            className="w-full md:w-1/2 drop-shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />

          {/* RIGHT SIDE — Text + Buttons */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Discover Fun Events<br />for Kids ✨
            </h1>

            <p className="text-purple-200 text-lg mb-8">
              Explore, learn, play — swipe through magical events your kids will love!
            </p>

            <div className="flex justify-center md:justify-start gap-6">
              <Link
                to="/swipe"
                className="px-8 py-3 bg-purple-600 rounded-full shadow-lg 
                hover:bg-purple-700 transition-all text-white"
              >
                Start Swiping 🚀
              </Link>

              <Link
                to="/browse"
                className="px-8 py-3 bg-black/50 border border-purple-300 
                text-purple-200 rounded-full shadow-lg hover:bg-black/70 transition-all"
              >
                Browse Events 🎨
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ---------------- SWIPE SECTION ---------------- */}
      <h2 className="text-3xl font-semibold mt-20 mb-6 text-center text-white drop-shadow">
        Swipe Events
      </h2>

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
