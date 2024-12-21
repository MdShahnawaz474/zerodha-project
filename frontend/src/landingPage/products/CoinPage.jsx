import React from 'react'

import ProductCoin from "../../assets/images/products-coin.png"
import { Link } from 'react-router-dom'
import BadgeIcons from './BadgeIcons'

const CoinPage = () => {
  return (
    <div className='container'style={{ maxWidth: "75%", margin: "0 auto",padding:"80px 0 0 0"} }>
         <div className='mt-5 row ' style={{width:"100%",display:"flex", justifyContent:"space-between",       marginLeft:"10px"}}>
         <div className='col-7'>
          <div>  <img  src={ProductCoin} alt='Console-products'/></div>
        </div>

        <div className='col-4 mt-5'>
        <h2  style={{
            lineHeight:"1.5rem", 
            marginBottom:"14px",
           
           
        }}>Coin</h2>
        <p style={{
            marginTop:"20px"
        }}>
           
           Buy direct mutual funds online, commission-
           <br /> 
           free, delivered directly
            to your Demat <br /> account. Enjoy the investment experience <br /> on your
            Android and iOS devices.
          
            <br />
            <p className='mt-2'><Link style={{
                textDecoration:"none", color:"#387ed1", fontWeight:"500"
            }} to={"/"}>Coin</Link></p>
          </p>
        <BadgeIcons/>
        </div>
        </div> 
      </div>
  )
}

export default CoinPage