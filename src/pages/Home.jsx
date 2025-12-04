
import EventCard from "../components/EventCard";
import sampleEvents from "../data/sampleEvents";
import SwipeCard from "../components/SwipeCard";

function Home() {

  // 👍 handleSwipe should be INSIDE the Home component
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
      <div className="p-6 bg-blue-100 rounded-xl shadow mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Welcome to Kids Events</h1>
        <p className="text-gray-700 mt-2">
          Explore fun and exciting events curated specially for kids!
        </p>
      </div>

      {/* Events Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Available Events</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleEvents.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
            />
          ))}
        </div>
      </div>

      {/* Swipe Feature */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Swipe Mode Preview</h2>
        <SwipeCard event={sampleEvents[0]} onSwipe={handleSwipe} />
      </div>
    </div>
  );
}

export default Home;
