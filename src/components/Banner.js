import React from 'react';
import { Link } from 'react-router-dom';
const Banner = ({ purpose, title1, title2, desc, buttonText, imageUrl }) => {
  return (
    <div className="flex flex-col m-5 lg:flex-row lg:items-center lg:justify-center">
      <img
        src={imageUrl}
        alt={title1}
        className="w-5/6 my-4 mx-auto max-w-lg lg:mx-0 "
      />
      <div className="py-5 px-7">
        <p className="text-gray-500 font-medium text-xs">{purpose}</p>
        <h2 className="text-3xl font-bold">{title1}</h2>
        <h2 className="text-3xl font-bold">{title2}</h2>
        <p className="text-slate-800 my-2">{desc}</p>
        <Link
          to="/property"
          className="inline-block text-white font-medium rounded bg-sky-500 py-2 px-4 my-2 hover:bg-gray-400 transition-all ease-linear duration-200"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
