import React, {  useContext, useState } from "react";
import { smurfContext } from "./App";
import axios from 'axios';
const SmurfForm = () => {
  const smurfList = useContext(smurfContext);
  console.log(smurfList);
  // Setting up hook statement for handling changes in the form for creating a new smurf
  //initial state is an object with all the values as the state used in context
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: 0
  });
  //handling changes and setting each key value pair equal to the value/ name of the feild being filled out. and spreading the previous feilds behind it.
  const handleChanges = event => {
    event.preventDefault();
    console.log("value", event.target.value);
    console.log("name", event.target.name)
    setSmurf({...smurf, [event.target.name]: event.target.value})
  };
  // function to handle adding a smurf to the API
  //may be where code is broken
  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3333/smurfs',{
      ...smurf,
      id: Date.now(),

    })
    .then(res =>{
      console.log(res)
      smurfList = res;
    })
    .catch(err => {
      console.log(err);
    })

    setSmurf({
        name: "",
        age: "",
        height: "",
        id: 0
      });
  };
  return(
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
           type="text"
           placeholder="Name"
           id="name"
           name="name"
           value={smurf.name}
           onChange={handleChanges}
         />
         <label htmlFor="age"> Age </label>
         <input
            type="text"
            placeholder="Age"
            id="age"
            name="age"
            value={smurf.age}
            onChange={handleChanges}
          />
          <label htmlFor = "height"> Height </label>
          <input
             type="text"
             placeholder= "Height"
             id="height"
             name="height"
             value={smurf.height}
             onChange={handleChanges}
           />
         <button type ="submit" value = "submitform">Add Smurf</button>
        </form>



  );
}
export default SmurfForm
