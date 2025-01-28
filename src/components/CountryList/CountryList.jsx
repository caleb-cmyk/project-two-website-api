import countryCodes from "../../services/countryService/countryCodes";

const CountryList = () => {
  const countryNamesList = [];
  const createCountryNamesList = () => {
    for (let i = 0; i < Object.keys(countryCodes).length; i++) {
      countryNamesList.push(Object.keys(countryCodes)[i]);
    }
  };
  createCountryNamesList();

  return (
    <>
      <select>
        {countryNamesList.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </select>
      <button>Find</button>
    </>
  );
};

export default CountryList;
