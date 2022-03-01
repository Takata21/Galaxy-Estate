import React, { useState, useEffect } from 'react';
import { BsFilter } from 'react-icons/bs';
import Filters from '../components/Filters';
import Property from '../components/Property';
import { Vdata } from '../VData';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';
import { API_URL, fetchProperties } from '../api/fetchData';

const Search = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [purpose, setPurpose] = useState('for-rent');
  const [properties, setProperties] = useState([]);
  const [categoryExternalID, setCategoryExternalID] = useState('4');
  const [bathsMin, setBathsMin] = useState('0');
  const [rentFrequency, setRentFrequency] = useState('yearly');
  const [priceMin, setPriceMin] = useState('0');
  const [priceMax, setPriceMax] = useState('1000000');
  const [roomsMin, setRoomsMin] = useState('0');
  const [sort, setSort] = useState('price-desc');
  const [areaMax, setAreaMax] = useState('35000');

  useEffect(() => {
    setPurpose(params.purpose);
  }, []);

  useEffect(() => {
    getProperties();
  }, [
    purpose,
    categoryExternalID,
    bathsMin,
    rentFrequency,
    priceMin,
    priceMax,
    roomsMin,
    sort,
    areaMax,
  ]);

  const getProperties = async () => {
    setIsLoading(true);
    const response = await fetchProperties(
      `${API_URL}/properties/list?locationExternalIDs=5002&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${priceMin}&priceMax=${priceMax}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
    );
    const test = `${API_URL}/properties/list?locationExternalIDs=5002&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${priceMin}&priceMax=${priceMax}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`;
    console.log(test);
    console.log(response);
    setProperties(response.data.hits);
    setIsLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto lg:px-0">
      <button
        className="w-full flex items-center justify-center gap-2 py-2 bg-gray-200 border-slate-300 border-b"
        onClick={() => {
          setShowFilters(!showFilters);
        }}
      >
        <p className="m-0 capitalize font-bold lg:text-xl ">
          search property by filters
        </p>
        <BsFilter fontSize="25px" />
      </button>
      <div
        className={
          showFilters
            ? `mx-auto max-h-64 transition-opacity duration-500 ease-linear opacity-100 `
            : `mx-auto overflow-hidden h-0 transition-opacity duration-500 ease-linear opacity-0`
        }
      >
        <Filters
          setPurpose={setPurpose}
          setProperties={setProperties}
          setCategoryExternalID={setCategoryExternalID}
          BathsMin={setBathsMin}
          setRentFrequency={setRentFrequency}
          setPriceMin={setPriceMin}
          setPriceMax={setPriceMax}
          setRoomsMin={setRoomsMin}
          setSort={setSort}
          setAreaMax={setAreaMax}
        />
      </div>

      <div className="mx-3">
        <h3 className="capitalize font-bold ">properties</h3>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="properties-container flex w-full my-7 flex-wrap gap-6 lg:gap-3">
            {properties?.map((property, index) => (
              <Property property={property} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
