import React, { useState } from 'react';
import AddUser from './Components/User/AddUser';
import UsersList from './Components/User/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (username, age) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: username, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser addUserHandler={addUserHandler} />
      {users.length > 0 && <UsersList users={users} />}
    </React.Fragment>
  );
}

export default App;
