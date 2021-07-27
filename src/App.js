import React, { useState } from 'react';
import AddUser from './Components/AddUser';
import UsersList from './Components/UsersList';

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
    <div>
      <AddUser addUserHandler={addUserHandler} />
      {users.length > 0 && <UsersList users={users} />}
    </div>
  );
}

export default App;
