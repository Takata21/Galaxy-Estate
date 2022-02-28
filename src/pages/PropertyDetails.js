import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL, fetchProperties } from '../api/fetchData';
import Carousel from 'react-bootstrap/Carousel';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { PropertyData } from '../PropertyData';
import Spinner from '../components/Spinner';
import Facility from '../components/Facility';
import 'bootstrap/dist/css/bootstrap.min.css';
const PropertyDetails = () => {
  const params = useParams();
  const [Property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getProperty();
  }, []);

  const getProperty = async () => {
    setIsLoading(true);
    const property = await fetchProperties(
      `${API_URL}/properties/detail?externalID=${params.id}`
    );
    setProperty(property.data);
    setProperty(PropertyData);
    setIsLoading(false);
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-5xl m-auto">
      <Carousel className="bg-gray-800 lg:m-3 lg:w-3/4 lg:m-auto">
        {Property?.photos.map((photo) => (
          <Carousel.Item key={photo.id}>
            <img className="d-block w-100" src={photo.url} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="m-5">
        <div className="flex items-center justify-between w-full my-4">
          <div className="flex items-center justify-between gap-2">
            {Property?.isVerified && <GoVerified color="green" />}
            <p className="font-semibold">
              AED {Property?.price}/{Property?.rentFrequency}
            </p>
          </div>
          <img
            src={Property?.agency.logo.url}
            alt={Property?.agency.name}
            className="w-7 h-7 rounded-full object-cover"
          />
        </div>
        <div className="flex">
          <p className="flex items-center gap-4 text-sky-500">
            {Property?.rooms} <FaBed /> | {Property?.baths} <FaBath /> |
            {Property?.area.toFixed(2)} sqft
            <BsGridFill />
          </p>
        </div>
      </div>
      <div className="m-3">
        <h4 className="text-xl">{Property?.title}</h4>
        <p className="my-3">{Property?.description}</p>
      </div>
      <div className="flex justify-between items-center my-3 mx-4 border-solid b-22">
        <span className="uppercase">type</span>
        <span className="uppercase font-bold">{Property?.type}</span>
      </div>
      <div className="flex justify-between items-center my-3 mx-4 border-solid b-21">
        <span className="uppercase">purpose</span>
        <span className="uppercase font-bold">{Property?.purpose}</span>
      </div>
      <div className="flex justify-between items-center my-3 mx-4 border-solid b-21">
        <span className="uppercase">purpose</span>
        <span className="uppercase font-bold">{Property?.purpose}</span>
      </div>
      <div className="flex justify-between items-center my-3 mx-4 border-solid b-21">
        <span className="uppercase">furnishingStatus</span>
        <span className="uppercase font-bold">
          {Property?.furnishingStatus}
        </span>
      </div>
      <h4 className="font-bold text-3xl capitalize ml-3 my-4">facilities:</h4>
      <div className="amenities flex flex-wrap gap-2 justify-center mx-3">
        {Property?.amenities.map((item) =>
          item.amenities.map((amenity) => (
            <Facility text={amenity.text} key={amenity.externalID} />
          ))
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
