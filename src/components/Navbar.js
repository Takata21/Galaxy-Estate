import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { FaMoneyBillWaveAlt } from 'react-icons/fa';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className=" relative lg:h-16">
      <div className="flex justify-between items-center p-2 b21 lg:h-full">
        <Link to="/" className="text-blue-600 font-bold text-lg lg:text-3xl">
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
        <div className=" menu-container w-3/5 absolute right-2 mt-2 b21 border-gray-800 rounded transition-all duration-500 ease-linear">
          <ul className="menu flex flex-col gap-2 p-2">
            <li onClick={() => setMenuOpen(false)}>
              <Link
                to="/"
                className="w-full capitalize flex items-center gap-2"
              >
                <FcHome />
                home
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link
                to="search"
                className="w-full capitalize flex items-center gap-2"
              >
                <BsSearch />
                search
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link
                to="/property"
                className="w-full capitalize flex items-center gap-2"
              >
                <FaMoneyBillWaveAlt />
                buy property
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link
                to="property"
                className="w-full capitalize flex items-center gap-2"
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
