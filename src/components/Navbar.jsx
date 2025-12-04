import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        sticky top-0 z-50 
        bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 
        backdrop-blur-xl shadow-lg
      "
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-4">

        {/* Animated Logo */}
        <motion.div 
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="text-3xl font-bold flex items-center gap-2">
            🎈 <span className="text-blue-700">Kids Events</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center font-medium text-gray-700">

          {["Home", "Swipe Events", "Browse Events"].map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative"
            >
              <Link
                to={item === "Home" ? "/" : 
                    item === "Swipe Events" ? "/swipe" : "/browse"}
                className="hover:text-blue-700 transition"
              >
                {item}
              </Link>

              {hovered === i && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 h-[3px] bg-blue-600 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}
            </div>
          ))}

          {/* Organizer Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="hover:text-blue-700">Organizer ▼</span>

            {open && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bg-white border shadow-lg rounded-xl p-3 w-44 mt-2"
              >
                <Link className="block py-1 hover:text-blue-600" to="/organizer/login">
                  Organizer Login
                </Link>
                <Link className="block py-1 hover:text-blue-600" to="/organizer/dashboard">
                  Dashboard
                </Link>
              </motion.div>
            )}
          </div>

          {/* Buttons */}
          <Link className="hover:text-blue-700" to="/login">Login</Link>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              className="px-4 py-1 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition"
              to="/register"
            >
              Register
            </Link>
          </motion.div>

        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-white shadow-lg p-4 flex flex-col gap-3 text-gray-800"
        >
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/swipe" onClick={() => setOpen(false)}>Swipe Events</Link>
          <Link to="/browse" onClick={() => setOpen(false)}>Browse Events</Link>
          <Link to="/organizer/login" onClick={() => setOpen(false)}>Organizer Login</Link>
          <Link to="/organizer/dashboard" onClick={() => setOpen(false)}>Organizer Dashboard</Link>
          <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
          <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
