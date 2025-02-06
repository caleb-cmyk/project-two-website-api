import { useParams } from "react-router";
import countryService from "../../services/countryService/countryService";
import { useState , useEffect } from "react";

const CountryCard = () => {
 const countrySelected = useParams().countryId;
 console.log(countrySelected);

  const [countryInfo, setCountryInfo] = useState([]);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      const data = await countryService(countrySelected);
      const cleanCountryData = {
        countryName: data[0].Ctry,
        capital: data[0].Capital,
        population: data[0].Population,
        officialLanguage: data[0].ROL3OfficialLanguage,
        primaryReligion: data[0].ReligionPrimary,
      };
      setCountryInfo(cleanCountryData);
    };
    fetchCountryInfo();
  }, [countrySelected]);

  return (
    <>
      <h1>{countryInfo.countryName}</h1>
      <button>Add to List</button>
      <p>
        Capital: <span>{countryInfo.capital}</span>
      </p>
      <p>
        Population: <span>{countryInfo.population}</span>
      </p>
      <p>
        Official Language: <span>{countryInfo.officialLanguage}</span>
        {/* Languages: iso 639-3 standard */}
      </p>
      <p>
        Predominant Religion: <span>{countryInfo.primaryReligion}</span>
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
