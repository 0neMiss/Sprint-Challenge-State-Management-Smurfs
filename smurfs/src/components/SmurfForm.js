import React, {  useState } from "react";
import axios from 'axios';
const SmurfForm = () => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: 0
  });
  const handleChanges = event => {
    event.preventDefault();
    console.log("value", event.target.value);
    console.log("name", event.target.name)
    setSmurf({...smurf, [event.target.name]: event.target.value})
  };
  const addNewSmurf = smurf => {


    axios.post(`http://localhost:3333/smurfs`,{
      id: Date.now(),
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    })
    .then(res =>{
      // console.log(res);
      // setSmurf(newSmurf);
      // res.push(newSmurf);
    })
    .catch(err => {
      console.log(err);
    })


  };
  return(
      <form onSubmit={addNewSmurf}>
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
           <button type ="submit" value = "submitform">Add Member</button>
        </form>



  );
}
export default SmurfForm
