import React, {useEffect, useState} from 'react';
import Album from './components/album'
import {getUsers} from 'services';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const [users, setUsers] = useState({});

  useEffect(function retrieveUsers() {
    getUsers().then(res => {
      setUsers(res);
    })
  }, []);
  

  return (
    <div className="App">
      <CssBaseline/>
      <Album {...{users}}/>
    </div>
  );
}

export default App;
