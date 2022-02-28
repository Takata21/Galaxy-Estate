import React, { useState, useEffect } from 'react';
import { useParams, Router } from 'react-router-dom';
import Filters from '../components/Filters';
import Search from './Search';
const Properties = () => {
  console.log(Router);
  const params = useParams();
  console.log(params);
  return (
    <div>
      <Search />
    </div>
  );
};

export default Properties;
