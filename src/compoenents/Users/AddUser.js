// Write your code below:
import React from 'react';

const AddUser = (props) => {
  function addUserHandler(event) {
    event.preventDefault();
  }
  return (<>
    <form onSubmit={addUserHandler}>
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username"/>
    </div>

    <div>
      <label htmlFor="age">Age</label>
      <input type="number" name="age" id="age"/>
      </div>
    <button type="submit">Add User</button>
    </form>
  </>)
}

export default AddUser;