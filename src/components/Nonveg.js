import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

function Nonveg() {
    
    let context = useContext(FoodContext);
    console.log(context.data)
    
    let [products, setProducts] = useState([]);

    let navigate = useNavigate();

    let getData = () => {
        
        if(context.data.length > 0) {
            setProducts(context.data[0].subItemData.subItems)
        }else{
            navigate('/');
        }
    }

    useEffect(() =>{
        getData();  
    })


    return (
        <div className="itemCard">
        {
            products.map((e,i) => {
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
                    <button className="btn btn-success" onClick={() => {
                        context.cart.push(e)
                        context.setCartValue(context.cart.length)
                    }}>Add to Cart</button>
                  </div>
               </div>
                   
               
            })
        }    
        </div>
    )
}

export default Nonveg
