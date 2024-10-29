import React, { useState } from "react";
import ViewMoreButton from "../Buttons/ViewMoreButton/ViewMoreButton.component";
import ExtraCountryData from "../ExtraCountryData/ExtraCountryData.component";

const CountryDisplayer = ({ countryData }) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div>
      {countryData.map((country) => (
        <div key={country.name.common}>
          <h1 key={country.name.common}>Name: {country.name.common}</h1>
          <img src={country.flags.png} alt="country flag" />
          <div>Population: {country.population.toLocaleString()}</div>
          <div>Region: {country.region}</div>
          <div>Capital: {country.capital}</div>
          <ViewMoreButton viewMore={viewMore} setViewMore={setViewMore} />
          {viewMore && <ExtraCountryData country={country} />}
        </div>
      ))}
    </div>
  );
};

export default CountryDisplayer;

/*
{<component/> && do this component}

*/

/*
Make same flag bigger
make view more button with boolean 
make component for widget 2 items to dispaly when view mroe is clicked.

*/
