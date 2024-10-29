import React from "react";

const ExtraCountryData = ({ country }) => {
  return (
    <div>
      <div>
        Native name:{" "}
        {country.name.nativeName &&
          Object.values(country.name.nativeName)[0].common}
      </div>
      <div>
        Currencies:{" "}
        {country.currencies && Object.values(country.currencies)[0].name}
      </div>
      <div>
        Languages:{" "}
        {country.languages && Object.values(country.languages).join(", ")}
      </div>
      <div>
        Border Countries: {country.borders && country.borders.join(", ")}
      </div>
    </div>
  );
};

export default ExtraCountryData;

/*
Native name: values(name.nativeName[0])
Currencies: mulitple currencies - 
languages: mulitple langauges 
Border Countries - multiiple Array

*/
