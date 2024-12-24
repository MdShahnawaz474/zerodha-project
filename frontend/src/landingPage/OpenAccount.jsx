import React from 'react';
import { Link } from 'react-router-dom';

const OpenAccount = () => {
  

  return (
    <div
    className="container mt-5 text-center mb-5"
    style={{ maxWidth: "75%", margin: "0 auto" }}
  >
      <h2 style={{fontWeight:"500",fontSize:"2rem", marginBottom:"20px"}}>Open Zerodha Account</h2>
      <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
      <Link to={"/signup"}>
      <button className='btn btn-primary' style={{
        marginTop:"20px"
      }} >Sign up for free</button></Link>
    </div>
  );
};

export default OpenAccount;

