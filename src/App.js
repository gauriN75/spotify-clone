import './App.css';
import Login from './Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';

const spotify = new SpotifyWebApi();

function App() {
  const [token,setToken] = useState(null);

  // Run code based on a given condition
  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = "";

      const _token = hash.access_token;

      if(_token){
        setToken(_token)

        spotify.setAccessToken(_token);

        spotify.getMe().then((user) => {
          console.log("user : ", user);
        });
      }

      // console.log("I have a token : ", token);
  }, []);

  return (
    <div className="App">
    {
      token ? (
        <Player/>
      ) : (
        <Login/>
      )
    }
    </div>
  );
}

export default App;
