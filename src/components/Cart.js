import React, { useContext, useState } from "react";
import { FoodContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  
  let context = useContext(FoodContext);

  let [cartPrice] = useState(0);

  let handleRemove = (e) => {
    context.cart.splice(context.cart.indexOf(e),1);
    context.setCartValue(context.cart.length);
  }

  return (
    <div className="itemCard itemPage">
      {
        context.cart.length?<>
        <h2>You Have Ordered</h2>
        {
            context.cart.map((e,i) => {
              cartPrice += Number(e.strPrice);
               return <div class="itemCart" key={i}>
                  <div className="itemImg">
                    <img src={e.strCategoryThumb} alt={e.strCategory}/>  
                  </div>
                  <div className="itemTitle">
                    <h4>{e.strCategory}</h4>
                    <p>{e.strCategoryDescription}</p>
                  </div>
                  <div className="itemPrice">
                    <p></p><strong>&#8377;{e.strPrice}</strong><p></p>
                    <button className="btn btn-danger" onClick={() => handleRemove(e)}>Remove</button>
                  </div>
               </div>
                   
               
            })
        }
        
      <div className="placeholder-wrapper">
        <div className="product-price"><strong>Total Price: </strong><span>&#8377;{cartPrice}</span></div>
        <Link to="/"><button className="btn btn-success" onClick={() => {
          context.setCart([]);
          context.setCartValue(0);
        }}>Place Order</button>
        </Link>
      </div>
      </>:<h2>Your Cart is Empty</h2>
      }   
    </div>
  );
}

export default Cart;
