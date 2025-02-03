import { useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import countryService from "./services/countryService/countryService";
import peopleService from "./services/PeopleService/peopleService";
import listService from "./services/ListService/ListService";
import HomePage from "./components/HomePage/HomePage";
import CountryList from "./components/CountryList/CountryList";
import CountryCard from "./components/CountryCard/CountryCard";
import PeoplesList from "./components/PeoplesList/PeoplesList";
import PeoplesCard from "./components/PeoplesCard/PeoplesCard";
import UserList from "./components/UserList/UserList";

function App() {
  
  const [countryInfo, setCountryInfo] = useState([]);
  const [countrySelected, setCountrySelected] = useState("Iran");
  const [userList, setUserList] = useState([]);
  const [userListAirtable, setUserListAirtable] = useState([]);
  
  const addCountryToUserList = (country) => {
    if (!userList.includes(country)){
    setUserList((list) => [...list, country]);
    console.log(userList);
    }
  };

  const removeCountryFromUserList = (country) => {
    if (userList.includes(country)) {
      const indexOfCountry = userList.indexOf(country);
      const newUserList = [...userList];
      newUserList.splice(indexOfCountry, 1);
      setUserList(newUserList);
    }
  };
  
  const chooseCountry = (country) => {
    setCountrySelected(country);
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

  useEffect(() => {
    const fetchUserList = async () => {
      const data = await listService(userListAirtable);
      const userListData = data.records.map(record => record.fields.Country);
      setUserList(userListData);
    };
    fetchUserList();
  }, []);
  


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<CountryList chooseCountry={chooseCountry} countryInfo={countryInfo} addCountryToUserList={addCountryToUserList} />} />
        <Route path="/countries/:countryId" element={<CountryCard countryInfo={countryInfo} userList={userList} addCountryToUserList={addCountryToUserList} />} />
        <Route path="/peoples" element={<PeoplesList />} />
        <Route path="/peoples/:peopleId" element={<PeoplesCard />} />
        <Route path="/userList" element={<UserList chooseCountry={chooseCountry} userList={userList} removeCountryFromUserList={removeCountryFromUserList} />} />
        <Route path="*" element="Whoops, there's nothing here at the moment!" />
      </Routes>
    </>
  );
};

export default App;
