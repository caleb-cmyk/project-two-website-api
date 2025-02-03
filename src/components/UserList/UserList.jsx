import { Link } from "react-router";

const UserList = (props) => {

    // const handleClick = (country) => {
    //   console.log(props.userList);
    //   const indexToRemove = props.userList.indexOf(country);
    //   props.userList.splice(indexToRemove, 1);
    // };

  return (
    <>
      <h1>Your List</h1>
      <ul>
        {props.userList.map((country) => (
          <>
            <li>{country}</li>
            {/* <Link to="/countries/:id" key={country}>
              <button>Details</button>
            </Link> */}
            {/* <button onClick={handleClick(country)}>Remove</button> */}
          </>
        ))}
      </ul>
    </>
  );
};

export default UserList;
