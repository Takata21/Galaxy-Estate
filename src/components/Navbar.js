import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { FaMoneyBillWaveAlt } from 'react-icons/fa';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className=" relative lg:h-16 max-w-7xl mx-auto border-0">
      <div className="flex justify-between items-center p-2  lg:h-full">
        <Link to="/" className="color-primary font-bold text-3xl lg:text-3xl">
          FaState
        </Link>
        <button
          className="flex items-center justify-center lg:w-10 lg:h-10 b21 rounded p-1 "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FcMenu fontSize="15px" className="lg:text-2xl" />
        </button>
      </div>

      {menuOpen && (
        <div className="z-30 menu-container w-3/5 lg:w-1/5 bg-gray-100 absolute right-2 mt-2 b21 border-gray-800 rounded transition-all duration-500 ease-linear">
          <ul className="menu flex flex-col gap-2 p-2">
            <li onClick={() => setMenuOpen(false)}>
              <Link
                to="/"
                className="w-full capitalize flex items-center gap-2 no-underline text-black"
              >
                <FcHome />
                home
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link
                to="/search/for-buy"
                className="w-full capitalize flex items-center gap-2 no-underline text-black"
              >
                <FaMoneyBillWaveAlt />
                buy property
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link
                to="/search/for-rent"
                className="w-full capitalize flex items-center gap-2 no-underline text-black"
              >
                <FiKey />
                rent property
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
