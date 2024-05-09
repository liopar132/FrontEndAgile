import React from "react";
import Logo from '../Assets/ware.jpeg';
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar () {
  return (
    <div className="navbar">
        <div className="leftSide">
          <img src={Logo}/>
        </div>
        <div className="rightSide">
          <Link to ="/"> Home </Link>
          <Link to ="/Inventory"> Inventory </Link>
          <Link to ="/CreateOrder"> Create Order </Link>
          <Link to ="/About"> About </Link>
          <Link to ="/contact"> Contact </Link>
        </div>
    </div>
  );
};

export default Navbar;
