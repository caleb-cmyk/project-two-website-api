import { useState } from "react";
import countryCodes from "../../services/countryService/countryCodes";
import { Navigate, useNavigate } from "react-router";

const CountryList = ( props ) => {
  const navigate = useNavigate();
  const countryNamesList = [];
  const createCountryNamesList = () => {
    for (let i = 0; i < Object.keys(countryCodes).length; i++) {
      countryNamesList.push(Object.keys(countryCodes)[i]);
    }
  };
  createCountryNamesList();

const [countrySelected, setCountrySelected] = useState("");

const handleChange = (e) => {
  setCountrySelected(e.target.value);
};

const handleClick = (e) => {
  e.preventDefault();
  props.chooseCountry(countrySelected);
  navigate('/countries/countrySelected');
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
      {/* countryCard below */}
    </>
  );
};

export default CountryList;
