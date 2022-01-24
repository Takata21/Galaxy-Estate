import React from 'react';
import { Circles } from 'react-loader-spinner';
const Spinner = () => {
  return (
    <div className=" w-full flex items-center justify-center flex-col gap-5">
      <Circles color="#00BFFF" height={80} width={200} className="m-5" />
      <p>Loading...</p>
    </div>
  );
};

export default Spinner;
