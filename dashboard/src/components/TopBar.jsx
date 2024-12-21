import React from "react";
import '../../src/index.css';
import "./BuyActionWindow.css";


import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        
        <div className="sensex">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">₹{"24,198.85"} </p>
          <p className="percent"> </p>
        </div>
          <p className="index">BANKNIFTY</p>
          <p className="index-points ">₹{"52,139.55"}</p>
          <p className="percent"></p>
          <p className="index">SENSEX</p>
          <p className="index-points sensexprice">₹{"80,182.20"}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
