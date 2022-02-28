import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Property from '../components/Property';
import Spinner from '../components/Spinner';
const Home = ({ forSale, forRent, isLoading }) => {
  return (
    <div className="w-full">
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc=" Explore from Apartments, builder floors, villas"
        buttonText="Explore Renting"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <div className="properties-container flex w-full my-7 flex-wrap gap-6 lg:gap-3">
        {isLoading && <Spinner />}
        {forRent.map((property, index) => (
          <Property property={property} key={index} />
        ))}
      </div>
      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc=" Explore from Apartments, land, builder floors, villas and more"
        buttonText="Explore Buying"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <div className="properties-container flex w-full my-7 flex-wrap gap-6 lg:gap-3">
        {isLoading && <Spinner />}
        {forSale.map((property, index) => (
          <Property property={property} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
