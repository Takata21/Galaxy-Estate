import React, { useEffect, useState } from 'react';
import { filterData } from '../utils/filterData';
import SearchInput from './SearchInput';
const Filters = ({
  setPurpose,
  setProperties,
  setCategoryExternalID,
  setBathsMin,
  setRentFrequency,
  setPriceMin,
  setPriceMax,
  setRoomsMin,
  setSort,
  setAreaMax,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  return (
    <div className=" flex flex-wrap justify-center gap-3 bg-gray-200 py-3">
      {filterData.map((item, i) => {
        return (
          <select
            key={i}
            className="flex items-center bg-gray-200 border-slate-300 border-1 rounded p-2 "
            name={item.queryName}
            onChange={(e) => {
              if (item.queryName === 'purpose') setPurpose(e.target.value);
              else if (item.queryName === 'rentFrequency')
                setRentFrequency(e.target.value);
              else if (item.queryName === 'minPrice')
                setPriceMin(e.target.value);
              else if (item.queryName === 'maxPrice')
                setPriceMax(e.target.value);
              else if (item.queryName === 'sort') setSort(e.target.value);
              else if (item.queryName === 'areaMax') setAreaMax(e.target.value);
              else if (item.queryName === 'roomsMin')
                setRoomsMin(e.target.value);
              else if (item.queryName === 'bathsMin')
                setBathsMin(e.target.value);
              else if (item.queryName === 'categoryExternalID')
                setCategoryExternalID(e.target.value);
            }}
          >
            <option value="">{item.placeholder}</option>
            {item.items.map((option, i) => {
              return (
                <option className="" value={option.value} key={i}>
                  {option.name}
                </option>
              );
            })}
          </select>
        );
      })}
      <div className="">
        <button
          className="bg-gray-200 border-slate-300 border-1 rounded p-2"
          onClick={() => setShowSearchInput(!showSearchInput)}
        >
          Search Location
        </button>

        {/* {showSearchInput && <SearchInput />} */}
      </div>
    </div>
  );
};

export default Filters;
