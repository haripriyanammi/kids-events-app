import sampleEvents from "../data/sampleEvents";
import SwipeCard from "../components/SwipeCard";

function Home() {

  const handleSwipe = (direction, event) => {
    if (direction === "right") {
      console.log("Registered for:", event.title);
    } else if (direction === "left") {
      console.log("Rejected:", event.title);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-6">

      {/* Hero Section */}
      <div className="p-6 bg-blue-100 rounded-xl shadow mb-10 text-center">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome to Kids Events
        </h1>
        <p className="text-gray-700 mt-2">
          Swipe right to register, swipe left to skip — simple and fun!
        </p>
      </div>

      {/* Swipe Mode Section */}
      <h2 className="text-2xl font-semibold mb-4 text-center">Swipe Events</h2>

      <div className="relative mt-6 h-[450px] flex justify-center items-center">
        {sampleEvents.map((event, index) => (
          <div
            key={event.id}
            className="absolute"
            style={{ zIndex: sampleEvents.length - index }}
          >
            <SwipeCard event={event} onSwipe={handleSwipe} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;
