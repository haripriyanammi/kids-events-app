function EventCard({ title, date, location }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl border hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-blue-700">{title}</h3>
      <p className="text-gray-600 mt-1">📅 {date}</p>
      <p className="text-gray-600">📍 {location}</p>

      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        View Details
      </button>
    </div>
  );
}

export default EventCard;
