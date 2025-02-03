import { Link } from "react-router";
import { Navigate , useNavigate } from "react-router";

const UserList = (props) => {
  const navigate = useNavigate();
  const handleRemoveFromList = (country) => {
    props.removeCountryFromUserList(country);
  };

  const handleInfo = (country) => {
    console.log("clicked!");
    props.chooseCountry(country.country);
    navigate("/countries/666");
  };

  return (
    <>
      <h1>Your List</h1>
      <ul>
        {props.userList.map((country) => (
          <>
            <li key={country}>
              {country}
              <button onClick={() => handleInfo({ country })}>Details</button>
              <button onClick={() => handleRemoveFromList(country)}>
                Remove
              </button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default UserList;

// const indexOfCountry = props.userList.indexOf(country);
// const removeCountryFromList = props.userList.splice(indexOfCountry,1);
// removeCountryFromList;
// setUserList(props.userList);
