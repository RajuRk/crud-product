import React, { Fragment, useContext } from "react";
import { FoodContext } from "../App";
import { Link } from "react-router-dom";

function Home() {

let context = useContext(FoodContext);

return (
  <div className="itemSec">
    {
      context.data.map((e,i) => {
        return(
          <Fragment>
            <Link to={`/` + e.name.toLowerCase()}>
              <div className="itemShow">
                <img src={e.image} alt={e.name}/>
                <h4>{e.name}</h4>
              </div>
            </Link>
          </Fragment>
        )  
      })
    }
  </div>
    
  );
}

export default Home;
