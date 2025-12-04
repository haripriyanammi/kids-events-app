
import EventCard from "../components/EventCard";
import sampleEvents from "../data/sampleEvents";

function Home() {
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
        <p className="text-gray-500">Events will show here...</p>
      </div>
    </div>
  );
}

export default Home;

