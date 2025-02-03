import { useState } from "react";
import countryCodes from "../../services/countryService/countryCodes";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router";

const CountryList = (props) => {
  const navigate = useNavigate();
  const countryNamesList = [];
  const createCountryNamesList = () => {
    for (let i = 0; i < Object.keys(countryCodes).length; i++) {
      countryNamesList.push(Object.keys(countryCodes)[i]);
    }
  };
  createCountryNamesList();

  const handleAddToList = (country) => {
      props.addCountryToUserList(country.country);
  };

  const handleInfo = (country) => {
    console.log("clicked!");
    props.chooseCountry(country.country);
    navigate("/countries/666");
  };

  return (
    <>
      <h1>Countries and Territories</h1>
      <ul>
        {countryNamesList.map((country) => (
          <li key={country}>{country}
            <button onClick={()=>handleInfo({country})}>Details</button>
            <button onClick={()=>handleAddToList({country})}>Add to List</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CountryList;
