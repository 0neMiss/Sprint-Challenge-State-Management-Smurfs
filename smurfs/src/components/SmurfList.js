import React, { useContext, useState } from "react";

import { smurfContext } from "./App";



const SmurfList = () => {
const smurfList = useContext(smurfContext);
console.log(`smurfList SmurfList.js`, smurfList);
return(
  <div>
  {!!smurfList.length ? smurfList.map(smurf =>(
    <>
      <p>{smurf.name}</p>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
    </>

  ))
  : <> </>}
</div>
)


};

export default SmurfList;
