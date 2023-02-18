import './App.css';
import Login from './Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token,setToken] = useState();

  // Run code based on a given condition
  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = "";

      const _token = hash.access_token;

      if(_token){
        setToken(_token)
      }

      console.log("I have a token : ", token);
  },[]);

  return (
    <div className="App">
    {
      token ? (
        <h1>Player: I'm loggoed in</h1>
      ) : (
        <Login/>
      )
    }
    </div>
  );
}

export default App;
