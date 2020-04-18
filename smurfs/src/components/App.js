import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

import axios from 'axios';
// import SmurfForm from './SmurfForm';

export const smurfContext = createContext();

export const App = () => {
  const [smurfs, setSmurfs] = useState([])
useEffect(() => {
  axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
          console.log(res.data)
          setSmurfs(res.data);
        })
        .catch(err => {
          console.log(err)
        })

      },

      []);
      console.log(smurfs);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm/>
        <smurfContext.Provider value = {smurfs}>
          <SmurfList/>
        </smurfContext.Provider>
      </div>

    );

}

export default App;
