import React from "react";
import { render, screen } from "@testing-library/react";
import CountryDisplayer from "./CountryDisplayer.component";

//assign

//act

//assert

describe("CountryDisplayer", () => {
  const mockCountryData = [
    {
      name: {
        common: "United States",
      },
      flags: {
        png: "https://flagcdn.com/w320/us.png",
      },
      region: "Americas",
      population: 1000000,
      capital: "Washington, D.C.",
    },
  ];

  test("renders correctly", () => {
    render(<CountryDisplayer countryData={mockCountryData} />);
    expect(
      screen.getByText(`Name: ${mockCountryData[0].name.common}`)
    ).toBeInTheDocument();
  });
});
