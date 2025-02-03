import { useState } from "react";
import countryCodes from "./countryCodes";

const API_KEY = "7d19b3b9e2fb";
const BASE_URL = "https://api.joshuaproject.net/v1/countries/";

const countryService = async (countrySelected) => {
    const url = `${BASE_URL}${countryCodes[countrySelected]}.json?api_key=${API_KEY}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json;
    //   console.log(json);
    } catch (error) {
    //   console.error(error.message);
    return undefined;
    };
  };

  export default countryService;
