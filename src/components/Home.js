import React, { Fragment, useContext } from "react";
import { FoodContext } from "../App";
import { Link } from "react-router-dom";

function Home() {
  let context = useContext(FoodContext);
  return (
    <div className="itemCard">
      {context.data.map((e, i) => {
        return (
          <Fragment key={i}>
            <Link to={`/` + e.strCategory.toLowerCase()}>
              <div className="itemList">
                <img src={e.strCategoryThumb} alt={e.strCategory} />
                <p>{e.strCategory}</p>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
}

export default Home;
