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
  console.log(countryService());

  const [countriesInfo, setCountriesInfo] = useState([]);

  useEffect (() => {
    const fetchCountriesInfo = async () => {
      const data = await countryService();
      console.log("fetched data", data);
      const newCountriesInfo = {
        countryName: data.Ctry,
        capital: data.Capital,
        population: data.Population,
        officialLanguage: data.ROL3OfficialLanguage,
        primaryReligion: data.ReligionPrimary,
      };
      setCountriesInfo(newCountriesInfo);
    };
    fetchCountriesInfo();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<CountryList />} />
        <Route path="/countries/:countryId" element={<CountryCard />} />
        <Route path="/peoples" element={<PeoplesList />} />
        <Route path="/peoples/:peopleId" element={<PeoplesCard />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="*" element="Whoops, there's nothing here at the moment!" />
      </Routes>
    </>
  );
};

export default App;
