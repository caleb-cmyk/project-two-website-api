import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router";
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

  useEffect (() => {
    const fetchCountriesInfo = async () => {
      const data = await countryService(countrySelected);
      // console.log("fetched data", data[0].Ctry);
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
        <Route path="/countries" element={<CountryList />} />
        <Route path="/countries/:countryId" element={<CountryCard countryInfo={countryInfo} />} />
        <Route path="/peoples" element={<PeoplesList />} />
        <Route path="/peoples/:peopleId" element={<PeoplesCard />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="*" element="Whoops, there's nothing here at the moment!" />
      </Routes>
    </>
  );
};

export default App;
