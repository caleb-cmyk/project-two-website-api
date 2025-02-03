import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/countries">Countries</Link>
        </li>
        {/* <li>
          <Link to="/peoples">Peoples</Link>
        </li> */}
        <li>
          <Link to="/userList">Your List</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
