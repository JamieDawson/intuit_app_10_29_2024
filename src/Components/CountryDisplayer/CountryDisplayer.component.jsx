import React from "react";

const CountryDisplayer = ({ countryData }) => {
  return (
    <div>
      {countryData.map((country) => (
        <div key={country.name.common}>
          <h1 key={country.name.common}>Name: {country.name.common}</h1>
          <img src={country.flags.png} />
          <div>Population: {country.population.toLocaleString()}</div>
          <div>Region: {country.region}</div>
          <div>Capital: {country.capital}</div>
        </div>
      ))}
    </div>
  );
};

export default CountryDisplayer;
