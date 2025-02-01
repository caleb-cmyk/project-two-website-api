import { useState } from "react";
import countryCodes from "../../services/countryService/countryCodes";

const CountryList = () => {
  const countryNamesList = [];
  const createCountryNamesList = () => {
    for (let i = 0; i < Object.keys(countryCodes).length; i++) {
      countryNamesList.push(Object.keys(countryCodes)[i]);
    }
  };
  createCountryNamesList();

const [countrySelected, setCountrySelected] = useState("");

const handleChange = (e) => {
  console.log(e);
  setCountrySelected(e.target.value);
};

const handleClick = (e) => {
  e.preventDefault();
  console.log(countrySelected);
};

  return (
    <>
      <select onChange={handleChange}>
        <option key="select">Select Country</option>
        {countryNamesList.map((country) => (
          <option key={country} value={country} onChange={handleChange}>{country}</option>
        ))}
      </select>
      <button onClick={handleClick}>Find</button>
    </>
  );
};

export default CountryList;

          // const handleClick = (event) => {
          //   event.preventDefault();
          //   console.log(event.target.value);
          // };