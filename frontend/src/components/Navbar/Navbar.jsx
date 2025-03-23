import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">Home</Link>
        <div className="space-x-4">
          <Link to="/books" className="text-white hover:text-gray-200">Books</Link>
          <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
          <Link to="/signup" className="text-white hover:text-gray-200">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;