import { useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import countryService from "./services/countryService/countryService";
import HomePage from "./components/HomePage/HomePage";
import CountryList from "./components/CountryList/CountryList";
import CountryCard from "./components/CountryCard/CountryCard";
import PeoplesList from "./components/PeoplesList/PeoplesList";
import PeoplesCard from "./components/PeoplesCard/PeoplesCard";
import UserList from "./components/UserList/UserList";

function App() {
  
  const [countryInfo, setCountryInfo] = useState([]);
  const [countrySelected, setCountrySelected] = useState("Iran");
  // const [userList, setUserList] = useState(["country1", "country2"]);
  const [userList, setUserList] = useState([]);

  const addCountryToUserList = (country) => {
    setUserList((list) => [...list, country]);
    // add code to check for repeat countries on list
    console.log(userList);
  };
  
  const chooseCountry = (country) => {
    setCountrySelected(country);
    console.log(countrySelected);
  };
  
  useEffect (() => {
    const fetchCountriesInfo = async () => {
      const data = await countryService(countrySelected);
      const newCountriesInfo = {
        countryName: data[0].Ctry,
        capital: data[0].Capital,
        population: data[0].Population,
        officialLanguage: data[0].ROL3OfficialLanguage,
        primaryReligion: data[0].ReligionPrimary,
      };
      setCountryInfo(newCountriesInfo);
    };
    fetchCountriesInfo();
  }, [countrySelected]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<CountryList chooseCountry={chooseCountry} countryInfo={countryInfo}/>} />
        <Route path="/countries/:countryId" element={<CountryCard countryInfo={countryInfo} addCountryToUserList={addCountryToUserList} userList={userList} />} />
        <Route path="/peoples" element={<PeoplesList />} />
        <Route path="/peoples/:peopleId" element={<PeoplesCard />} />
        <Route path="/userList" element={<UserList userList={userList} />} />
        <Route path="*" element="Whoops, there's nothing here at the moment!" />
      </Routes>
    </>
  );
};

export default App;
