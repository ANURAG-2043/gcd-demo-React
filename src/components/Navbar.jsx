import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useAuth } from '../utils/AuthContext';
import logo from '../images/logo.png'

const Navbar = () => {
  // const {user, logoutUser} = useAuth()
  
  return (
    <div className="w-full bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        
        <div className="inline-flex items-center space-x-2 pt-3.5 pb-3.5">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-44 max-md:w-28 cursor-pointer" />
          </Link>
        </div>
        
        <div className="hidden lg:flex space-x-8">
          <Link to="/product-page" className="text-sm text-gray-800 hover:text-gray-900">
            Products
          </Link>
          <Link to="/about-us" className="text-sm text-gray-800 hover:text-gray-900">
            About Us
          </Link>
          <Link to="/free-support" className="text-sm text-gray-800 hover:text-gray-900">
            Free Support
          </Link>
          <Link to="/contact-us" className="text-sm text-gray-800 hover:text-gray-900">
            Contact
          </Link>
        </div>

        {/* <div className="hidden lg:flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm text-gray-800">Hello, {user?.name}</span>
              <button
                onClick={logoutUser}
                className="rounded-md bg-red-600 px-3 py-2 text-xs text-white shadow-sm hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="rounded-md bg-sky-600 px-5 py-2 text-xs text-white shadow-sm hover:bg-green-600/80">
                Login
              </button>
            </Link>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
