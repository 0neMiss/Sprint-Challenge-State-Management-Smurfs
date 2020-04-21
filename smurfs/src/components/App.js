import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

import axios from 'axios';

//creating variable for create Context to call in other files
export let smurfContext = createContext();

export const App = () => {
  // setting up hook statement to have an updator function for state.
  let [smurfs, setSmurfs] = useState([])
useEffect(() => {
  axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
          console.log(`res.data App.js`, res.data)
          //setting the variable in the hook statement equal to the resposse from the axios.get

          setSmurfs(res.data);
        })
        .catch(err => {
          console.log(err)
        })

      },

      []);
      console.log(`smurfs varray App.js`,smurfs);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        {/*passing the Provider constructor smurfs through the keyword value and wrapping smurfList in it so it has access to that conetxt*/}
        <smurfContext.Provider value = {smurfs}>
          <SmurfForm/>
          <SmurfList/>
        </smurfContext.Provider>
      </div>

    );

}

export default App;
