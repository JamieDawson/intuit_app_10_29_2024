import React, { useState } from "react";

import CountryOne from "../CountryOne/CountryOne.component";

const CountryDisplayer = ({ countryData }) => {
  return (
    <div>
      {countryData.map((country) => (
        <CountryOne key={country.name.common} country={country} />
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

/*
Make component that shows one of the countires.
Inside there, declare the view more.

*/
