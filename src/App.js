import React, { useState } from 'react';
import AddUser from './Components/AddUser';
import UsersList from './Components/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <AddUser />
      <UsersList />
    </div>
  );
}

export default App;
