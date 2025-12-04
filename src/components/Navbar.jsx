function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Kids Events</h1>

      <div className="flex gap-4">
        <a href="/" className="text-gray-700">Home</a>
        <a href="/login" className="text-gray-700">Login</a>
        <a href="/register" className="text-gray-700">Register</a>
      </div>
    </nav>
  );
}

export default Navbar;
