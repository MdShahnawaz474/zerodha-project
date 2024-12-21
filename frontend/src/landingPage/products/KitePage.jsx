import React from 'react'
import kite_product from "../../assets/images/products-kite.png"

import { Link } from 'react-router-dom'

import console_product from "../../assets/images/products-console.png"
import BadgeIcons from './BadgeIcons'
const KitePage = () => {
  return (
    <div className='container '
    style={{ maxWidth: "75%", margin: "0 auto"} }>
        <div className='mt-5 row'>
            <div className='col-7 mt-2'>
                <img src={kite_product} alt='products-kite'/>
            </div>
            <div className='col-4'>
            <div>
            <h2 style={{marginBottom:"20px"}}>Kite</h2>
                <p style={{marginBottom:"20px"}}>
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </p>


                </div>
                <div className='row'>
                    <div className='col-4'><Link  style={{color:"#387ed1", fontWeight:500, textDecoration:"none"}} to={"/"}>Try Demo</Link></div>


                    <div className='col-6'><Link style={{color:"#387ed1", fontWeight:500, textDecoration:"none"}} to={"/"}>Learn more</Link></div>
                </div>
              <BadgeIcons/>
                
            </div>
        </div>

    {/* Console sections */}

   
        <div className='mt-5 row ' style={{width:"100%",display:"flex", justifyContent:"space-between",       marginLeft:"10px"}}>
        <div className='col-4'>
        <h2  style={{
            lineHeight:"1.5rem", 
            marginBottom:"12px",
            marginTop:"220px",
           
        }}>Console</h2>
        <p style={{
            marginTop:"20px"
            
        }}>
            The central dashboard for your Zerodha <br />account. Gain insights into
            your trades and investments with in-depth reports and
            visualisations.
            <br />
            <p className='mt-2'><Link style={{
                textDecoration:"none", color:"#387ed1", fontWeight:"500"
            }} to={"/"}>Learn more</Link></p>
          </p>
        </div>
        <div className='col-7'>
          <div>  <img  src={console_product} alt='Console-products'/></div>
        </div>
        </div>
    </div>
   
  )
}

export default KitePage