import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Beef from "./components/Beef";
import Chicken from "./components/Chicken";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { getDefaultNormalizer } from "@testing-library/react";

export const FoodContext = React.createContext();

const url = "http://localhost:5000";

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let res = await axios.get(`${url}/categories`);
    console.log(res.data);
    setData(res.data);
  };

  return (
    <div>
      <Router>
        <FoodContext.Provider value={{ url }}>
          <Routes>
            <Route path="/beef" element={<Beef />}></Route>
            <Route path="/chicken" element={<Chicken />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </FoodContext.Provider>
      </Router>
    </div>
  );
}

export default App;
