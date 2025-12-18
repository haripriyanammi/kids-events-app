import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-black via-purple-900 to-black text-white shadow-lg py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        <h1 className="text-2xl font-bold flex items-center gap-2">
          🎈 Kids Events
        </h1>

        <ul className="flex gap-6 items-center text-white">
          <li><Link to="/" className="hover:text-purple-300 transition">Home</Link></li>
          <li><Link to="/swipe" className="hover:text-purple-300 transition">Swipe Events</Link></li>
          <li><Link to="/browse" className="hover:text-purple-300 transition">Browse Events</Link></li>

          {/* Organizer Dropdown (simple) */}
          <li className="hover:text-purple-300 transition">Organizer ▼</li>

          <li><Link to="/login" className="hover:text-purple-300 transition">Login</Link></li>

          <li>
            <Link
              to="/register"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-full shadow"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
