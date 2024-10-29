import React, { useState, useEffect } from "react";
import CountryDisplayer from "../CountryDisplayer/CountryDisplayer.component";

const CountryWrapper = () => {
  const [countryData, setCountryData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getCountryData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setCountryData(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountryData();
  }, []);

  const filteredCountryData = countryData.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CountryDisplayer countryData={filteredCountryData} />
    </>
  );
};

export default CountryWrapper;
