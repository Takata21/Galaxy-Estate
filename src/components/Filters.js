import React, { useEffect, useState } from 'react';
import { filterData } from '../utils/filterData';
const Filters = ({
  setPurpose,
  setProperties,
  setLocationExternalIDs,
  setCategoryExternalID,
  setBathsMin,
  setRentFrequency,
  setPriceMin,
  setPriceMax,
  setRoomsMin,
  setSort,
  setAreaMax,
}) => {
  return (
    <div className=" flex flex-wrap justify-center gap-3 bg-gray-200 py-3">
      {filterData.map((item, i) => {
        return (
          <select
            key={i}
            className="flex items-center bg-gray-200 border-slate-300 border-1 rounded p-2 "
            name={item.queryName}
            onChange={(e) => {}}
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
