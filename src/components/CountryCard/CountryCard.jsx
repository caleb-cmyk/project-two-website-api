import { useParams } from "react-router";
import countryService from "../../services/countryService/countryService";
import peopleService from "../../services/PeopleService/peopleService";
import countryCodes from "../../services/countryService/countryCodes";
import { useState , useEffect } from "react";
import { Navigate , useNavigate } from "react-router";

const CountryCard = () => {
  const navigate = useNavigate();
 const countrySelected = useParams().countryId;
//  console.log(countrySelected);

  const [countryInfo, setCountryInfo] = useState([]);
  const [ethnicsInfo, setEthnicsInfo] = useState([]);

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

  const countryCode = countryCodes[countrySelected];
  useEffect(() => {
    const fetchEthnicsInfo = async () => {
      const data = await peopleService(countryCode);
      console.log(data)
      const cleanEthnicsDataArray = [];
      for (let i = 0; i < data.length; i++) {
        cleanEthnicsDataArray.push({
          peopleName: data[i].PeopNameInCountry,
          peopleIndex: data[i].PeopleID3ROG3,
        });
      }
        setEthnicsInfo(cleanEthnicsDataArray);
      };
    fetchEthnicsInfo();
  }, [countryCode]);

const handleViewEthnic = ( ethnic ) => {
  navigate(`/peoples/${ethnic.peopleName}`);
    // navigate(`/countries/${country.country}`);
  };


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
        Predominant Ethnic Groups {ethnicsInfo.peopleName}
        <ul>
         {ethnicsInfo.map((ethnic) => (
          <>
          <li key={ethnic.PeopleID3ROG3}>{ethnic.peopleName}
          <button onClick={() => handleViewEthnic({ethnic})}>View</button>
          </li>

          </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CountryCard;
