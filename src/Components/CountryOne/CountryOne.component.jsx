import React, { useState } from "react";

import ViewMoreButton from "../Buttons/ViewMoreButton/ViewMoreButton.component";
import ExtraCountryData from "../ExtraCountryData/ExtraCountryData.component";
import CountryImage from "../CountryImage/CountryImage.component";

const CountryOne = ({ country }) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div key={country.name.common}>
      <h1 key={country.name.common}>Name: {country.name.common}</h1>
      <CountryImage imageFlag={country.flags.png} viewMore={viewMore} />
      <div>Population: {country.population.toLocaleString()}</div>
      <div>Region: {country.region}</div>
      <div>Capital: {country.capital}</div>
      <ViewMoreButton viewMore={viewMore} setViewMore={setViewMore} />
      {viewMore && <ExtraCountryData country={country} />}
    </div>
  );
};

export default CountryOne;
