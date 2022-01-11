import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Beef from "./components/Beef";
import Chicken from "./components/Chicken";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Header from "./components/Header";

export const FoodContext = React.createContext();

const url = "http://localhost:5000";

function App() {
  let [data, setData] = useState([]);
  let [cart, setCart] = useState([]);
  let [cartValue, setCartValue] = useState(cart.length);
  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let res = await axios.get(`${url}/categories`);
    setData(res.data);
  };

  return (
    <div>
      <Router>
        <div className="container">
          <FoodContext.Provider
            value={{ data, cart, setCart, cartValue, setCartValue, url }}
          >
            <Header />
            <Routes>
              <Route path="/header" element={<Header />}></Route>
              <Route path="/beef" element={<Beef />}></Route>
              <Route path="/chicken" element={<Chicken />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </FoodContext.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;
