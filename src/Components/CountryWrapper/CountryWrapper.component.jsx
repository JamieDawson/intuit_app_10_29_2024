import React, { useState, useEffect } from "react";
import CountryDisplayer from "../CountryDisplayer/CountryDisplayer.component";

const CountryWrapper = () => {
  const [countryData, setCountryData] = useState([]);

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

  return <div>counry wrapper</div>;
};

export default CountryWrapper;
