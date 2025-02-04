// import { useState } from "react";
import countryCodes from "../../services/countryService/countryCodes";
import { Navigate, useNavigate } from "react-router";
// import { Link } from "react-router";

const CountryList = (props) => {
  const navigate = useNavigate();
  const countryNamesList = [];
  const createCountryNamesList = () => {
    for (let i = 0; i < Object.keys(countryCodes).length; i++) {
      countryNamesList.push(Object.keys(countryCodes)[i]);
    }
  };
  createCountryNamesList();

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

  //returns array of countries starting with input alphabet
  const sortByStartingAlphabet = (alphabet) => {
    let countriesSorted = [];
    for (let i = 0; i < countryNamesList.length; i++) {
      if (countryNamesList[i][0] === alphabet) {
        countriesSorted.push(countryNamesList[i]);
      }
    }
    return countriesSorted;
  };

  const handleAddToList = (country) => {
    props.addCountryToUserList(country.country);
  };

  const handleInfo = (country) => {
    console.log("clicked!");
    props.chooseCountry(country.country);
    navigate("/countries/666");
  };

  const testArray = ["test array item"];

  return (
    <>
      <h1>Countries and Territories</h1>
      <h2>A</h2>
      <ul>
        {sortByStartingAlphabet("A").map((country) => (
          <li>{country}</li>
        ))}

        {/* {countryNamesList.map((country) => (
          <li key={country}>{country}
            <button onClick={()=>handleInfo({country})}>Details</button>
            <button onClick={()=>handleAddToList({country})}>Add to List</button>
          </li>
        ))} */}
      </ul>
    </>
  );
};

export default CountryList;
