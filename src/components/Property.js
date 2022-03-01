import React from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
const Property = ({ property }) => {
  const {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  } = property;

  return (
    <Link
      to={`/property-Details/${externalID}`}
      className=" max-w-sm m-auto p-2 drop-shadow-md  card-w hover:shadow transition-shadow"
    >
      <div className="px-3">
        <img
          className="w-full h-60"
          src={coverPhoto?.url}
          alt={title}
          loading="lazy"
        />
        <div className="flex items-center justify-between w-full my-4">
          <div className="flex items-center justify-between gap-2">
            {isVerified && <GoVerified color="green" />}
            <p className="font-semibold">
              AED {price}/{rentFrequency}
            </p>
          </div>
          <img
            src={agency.logo.url}
            alt={agency.name}
            className="w-7 h-7 rounded-full object-cover"
          />
        </div>
        <div className="flex">
          <p className="flex items-center gap-4 text-sky-500">
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft
            <BsGridFill />
          </p>
        </div>
        <p className="uppercase mt-3">
          {title.length > 30 ? title.substring(0.3) + '....' : title}
        </p>
      </div>
    </Link>
  );
};

export default Property;
