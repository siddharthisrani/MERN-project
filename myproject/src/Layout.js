import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";
import logo from "./logo1.png";
import Insert from "./Insert"; // Import the Insert component
import { useSelector } from "react-redux";

const Layout = () => {
  const [isInsertOpen, setIsInsertOpen] = useState(false);
  const mycart=useSelector((state)=>state.productcart.cart)
  const itemlength=mycart.length;


  const openInsertForm = () => {
    setIsInsertOpen(true);
  };

  const closeInsertForm = () => {
    setIsInsertOpen(false);
  };

  return (
    <>
      <ul className="navbar">
        <img src={logo} style={{ width: "50px" }} />
        <li><Link to="home">Home</Link></li>
        <li><Link to="display">Display</Link></li>
        <li><Link to="allproduct">All Products</Link></li>
        <li><Link to="addproduct">Add Procduct</Link></li>
        <li><Link to="cart" style={{width:"20px",height:"25px",padding:"5px",backgroundColor:"yellow",color:"black"}}>{itemlength}</Link></li>
        <button onClick={openInsertForm}>Form</button>

      </ul>

      <Outlet />

      <hr size="4" color="red" />
      <h3 align="center">www.mycompany.com All right reserved</h3>

      {/* Insert Form Popup */}
      {isInsertOpen && (
        <div className="mainform">
        <div className="overlay">
          <Insert />
          <button style={{float:"right"}} onClick={closeInsertForm}>Close</button>
        </div>
        </div>
      )}
    </>
  );
};

export default Layout;
