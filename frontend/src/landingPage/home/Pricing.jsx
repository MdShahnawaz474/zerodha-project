import React from 'react'
import { Link } from 'react-router-dom'
import pricinglogo from "../../assets/images/pricing-eq.svg"
const Pricing = () => {
  return (
    <div className='mt-5 container '
    style={{ maxWidth: "75%", margin: "0 auto" }}>
    <div className='row 'style={{marginTop:"100px"}}>
      <div className='col-5'>
        <h1>Unbeatable pricing</h1>
        <p>
        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
        </p>
        <div style={{color: '#387ed1', fontWeight:"500"}}>
        <Link style={{textDecoration:"none", }} to="/pricing">  See pricing </Link>
            </div>
      </div>

    
      <div className='col-7' style={{display:'flex'}}>
          <div style={{display:"flex"}}>
          <img style={{width:"120px"}} src={pricinglogo} alt="pricinglogo" />
          <p className="" style={{position:"relative",left:"-25px" ,fontSize: "10px", marginTop:"68px"}}>Free account
            <br />
            opening
          </p>
          </div>
          <div style={{display:"flex"}}>
          <img style={{width:"120px"}} src={pricinglogo} alt="pricinglogo" />
          <p className="" style={{position:"relative",left:"-25px" ,fontSize: "10px", marginTop:"68px"}}>Free equity delivery
          
            <br />
            and direct mutual funds
          </p>
          </div>
          <div style={{display:"flex"}}>
          <img style={{width:"120px"}} src={pricinglogo} alt="pricinglogo" />
          <p className="" style={{position:"relative",left:"-25px" ,fontSize: "10px", marginTop:"68px"}}> Intraday and
         
            <br />
            F&O
          </p>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Pricing