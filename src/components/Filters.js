import React, { useEffect, useState } from 'react';
import { filterData } from '../utils/filterData';
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
  const test = () => {
    console.log('test select');
  };
  return (
    <div className=" flex flex-wrap justify-center gap-3 bg-gray-200 py-3">
      {filterData.map((item, i) => {
        return (
          <select
            key={i}
            className="flex items-center bg-gray-200 border-slate-300 border-1 rounded p-2 "
            name={item.queryName}
            onChange={(e) => {
              if (item.queryName === 'purpose') {
                return setPurpose(e.target.value);
              } else if (item.queryName === 'rentFrequency') {
                return setRentFrequency(e.target.value);
              } else if (item.queryName === 'minPrice') {
                return setPriceMin(e.target.value);
              } else if (item.queryName === 'maxPrice') {
                return setPriceMax(e.target.value);
              } else if (item.queryName === 'sort') {
                return setSort(e.target.value);
              } else if (item.queryName === 'areaMax')
                return setAreaMax(e.target.value);
              else if (item.queryName === 'roomsMin')
                return setRoomsMin(e.target.value);
              else if (item.queryName === 'bathsMin')
                return setBathsMin(e.target.value);
              else if (item.queryName === 'categoryExternalID')
                return setCategoryExternalID(e.target.value);
              else {
              }
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
    </div>
  );
};

export default Filters;
