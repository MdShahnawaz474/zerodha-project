import React from 'react';
import signupimg from "../../assets/images/signup2.png";
import {Link} from "react-router-dom"

const Signup = () => {
  
  return (
    <div className='container' style={{ maxWidth: "75%", margin: "0 auto", paddingTop: "20vh", paddingBottom: "20vh" }}>
      <div className='row'>
        <div className='col-7'>
          <div style={{ width: "50%" }}>
            <img src={signupimg} alt='signup page' />
          </div>
        </div>
        <div className='col-1'>
          <p style={{ width: "4%" }}></p>
        </div>
        <div className='col-4 mt-5'>
          <div>
            <h1 style={{ marginBottom: '5px', fontSize: "1.8rem", lineHeight: "3rem" }}>Signup Now</h1>
            <p style={{ color: "#9b9b9b" }}>Or track your existing application.</p>
          </div>

          <div>
            <label>Mobile Number</label>
          </div>
          
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <span style={{
              position: "absolute",
              left: "2px",
              color: "#4a4a4a",
              backgroundColor:"#fafafb", 
              fontSize: ".875rem",
              padding: "11px 0 10px",
              width:"40px"
            }}>+91</span>
           
            <input
              style={{
                border: "1px solid #e3e3e3",
                color: "#4a4a4a",
                width: "90%",
                height: "45px",
                padding: "10px 15px 10px 42px",
                maxWidth: "300px",
                borderRadius: "3px",
              }}
              type="number"
              placeholder='Enter your mobile number'
            />
            
          </div>
          <p className="mt-2" style={{ color: "#9b9b9b" , fontSize:".75rem"}}>
  Please provide your mobile number to continue.
</p>

<Link to="http://localhost:5173/">
<button onClick={()=>{}}
  style={{
    background: '#387ed1',
    color: '#fff',
    borderRadius: '2px',
    border: '1px solid #387ed1',
    
    fontWeight: 400,
    fontSize: '.825rem',
    letterSpacing: '.5px',
    display: 'inline-block',
    cursor: 'pointer',
    
    padding: '10px 30px',
  }}
>
  Continue
</button>
</Link>
        </div>
      </div>
      <div className='text-center mt-5' style={{fontSize:'.75rem', lineHeight:"18px", color:'#9b9b9b'}}>
      <p>
      I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. 
      <br />
      Please visit this article to know more.
      <br />
      <br />
      By submitting your contact details, you authorize Zerodha to contact you even if you are registered on DND & conduct online KYC for trading & demat account opening as per KRA regulations and PMLA guidelines.
      <br /><br />
      If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.
      </p></div>
    </div>
  );
};

export default Signup;
