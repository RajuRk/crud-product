import React, { useContext } from "react";
import { FoodContext } from "../App";

function Beef() {
  let context = useContext(FoodContext);
  console.log(context);

  return <div>Beef</div>;
}

export default Beef;
