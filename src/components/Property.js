import React from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
const Property = () => {
  return (
    <Link to="property-Details/dkjflkjsdlf">
      <div className="px-5">
        <img
          className="w-full"
          src="https://bayut-production.s3.eu-central-1.amazonaws.com/image/170244921/9d92c8a8263f4c52a9adeebbb67ab9aa"
          alt=""
        />
        <div className="flex items-center justify-between w-full my-4">
          <div className="flex items-center justify-between gap-2">
            <GoVerified color="green" />
            <p className="font-semibold">AED 7850/monthly</p>
          </div>
          <img
            src="https://bayut-production.s3.eu-central-1.amazonaws.com/image/27680312/542c350564924682a714bb18736db5af"
            alt=""
            className="w-7 h-7 rounded-full object-cover"
          />
        </div>
        <div className="flex">
          <p className="flex items-center gap-4 text-sky-500">
            1 <FaBed /> | 1 <FaBath /> | 67.8 sqft <BsGridFill />
          </p>
        </div>
        <p className="uppercase mt-3">amazing upgraded 1bhk for mont...</p>
      </div>
    </Link>
  );
};

export default Property;
