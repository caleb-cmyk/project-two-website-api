const UserList = (props) => {
  console.log(props.userList[0]);

//   const handleClick = (country) => {
//     console.log(props.userList);
//     const indexToRemove = props.userList.indexOf(country);
//     props.userList.splice(indexToRemove, 1);
//   };

  return (
    <>
      <h1>Your List</h1>
      <ul>
        {props.userList.map((country) => (
          <>
            <li key={country}>{country}</li>
            {/* <button onClick={handleClick(country)}>Remove</button> */}
          </>
        ))}
      </ul>
    </>
  );
};

export default UserList;
