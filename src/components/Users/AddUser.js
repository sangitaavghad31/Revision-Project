import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = () => {
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("")
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(username, age);
  };

  function usernameChangeHandler(event) {
    setUsername(event.target.value);
    event.target.value = "";
  }

  function ageChangeHandler(event) {
    setAge(event.target.value);
    event.target.value = "";
  }
  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
