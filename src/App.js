// Write your code at relevant places in the code below:

import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (username, age) =>{
    setUsers((prevState)=>{
      return [
        ...prevState,
      {name:username, age:age, id: Math.random().toString()}
    ]});
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
