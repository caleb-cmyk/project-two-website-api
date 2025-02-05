import { useState } from "react";
import { useEffect } from "react";

const CountryCard = (props) => {

  const handleAddToList = () => {
    props.addCountryToUserList(props.countryInfo.countryName);
};

  return (
    <>
      <h1>{props.countryInfo.countryName}</h1>
      <button onClick={handleAddToList}>Add to List</button>
      <p>
        Capital: <span>{props.countryInfo.capital}</span>
      </p>
      <p>
        Population: <span>{props.countryInfo.population}</span>
      </p>
      <p>
        Official Language: <span>{props.countryInfo.officialLanguage}</span>
        {/* Languages: iso 639-3 standard */}
      </p>
      <p>
        Predominant Religion: <span>{props.countryInfo.primaryReligion}</span>
      </p>
      <div>
        Predominant Ethnic Groups
        <ul>
          <li>Group 1: #XXX</li>
          <li>Group 2: #XXX</li>
          <li>Group 3: #XXX</li>
        </ul>
      </div>
    </>
  );
};

export default CountryCard;
