import React from 'react';

const Facility = ({ text }) => {
  return (
    <div className="flex items-center justify-center bg-gray-200 rounded p-2">
      <p className="text-sky-500 font-bold text-lg m-0">{text}</p>
    </div>
  );
};

export default Facility;
