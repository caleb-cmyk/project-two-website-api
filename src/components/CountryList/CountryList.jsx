// import { useState } from "react";
import countryCodes from "../../services/countryService/countryCodes";
import { Navigate, useNavigate } from "react-router";
import { Route , Routes } from "react-router";
// import { Link } from "react-router";

const CountryList = (props) => {
  const navigate = useNavigate();

  //returns array of countries as their full name (transcribed from two letter country code)
  const countryNamesList = [];
  const createCountryNamesList = () => {
    for (let i = 0; i < Object.keys(countryCodes).length; i++) {
      countryNamesList.push(Object.keys(countryCodes)[i]);
    }
  };
  createCountryNamesList();

  //returns array of countries starting with input alphabet
  const alphabetArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const sortByStartingAlphabet = (alphabet) => {
    let countriesSorted = [];
    for (let i = 0; i < countryNamesList.length; i++) {
      if (countryNamesList[i][0] === alphabet) {
        countriesSorted.push(countryNamesList[i]);
      }
    }
    return countriesSorted;
  };

  //handlers
  const handleAddToList = (country) => {
    props.addCountryToUserList(country.country);
  };

  const handleInfo = (country) => {
    navigate(`/countries/${country.country}`);
  };

  return (
    <>
      <h1>Countries and Territories</h1>
      {alphabetArray.map((alphabet) => (
        <>
          <h2>{alphabet}</h2>
          <ul>
            {sortByStartingAlphabet(alphabet).map((country) => (
              <li key={country}>
                {country}
                <button onClick={() => handleInfo({ country })}>Details</button>
                <button onClick={() => handleAddToList({ country })}>Add to List</button>
              </li>
            ))}
          </ul>
        </>
      ))}
    </>
  );
};

export default CountryList;
