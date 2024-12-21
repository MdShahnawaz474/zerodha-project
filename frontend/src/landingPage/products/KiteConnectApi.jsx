import React from 'react'

import KiteConnectApiImg from "../../assets/images/kiteConnectApi.png"
import { Link } from 'react-router-dom'
import BadgeIcons from './BadgeIcons'


const KiteConnectApi = () => {
  return (
    <div>
        <div className='container' 
           style={{ maxWidth: "75%", margin: "0 auto",padding:"80px 0 0 0"} }
        >
            
             <div className='mt-5 row ' style={{width:"100%",display:"flex", justifyContent:"space-between",       marginLeft:"10px"}}>
        <div className='col-4 mt-5'>
        <h2  style={{
            lineHeight:"1.5rem", 
            marginBottom:"12px",
            marginTop:"14px"
          
           
        }}>Kite Connect API</h2>
        <p style={{
            marginTop:"20px"
        }}>
          
          Build powerful trading platforms and experiences with our
            super simple HTTP/JSON APIs. If you are a startup, build your
            investment app and showcase it to our clientbase.
          
            <p className='mt-2'><Link style={{
                textDecoration:"none", color:"#387ed1", fontWeight:"500"
            }} to={"/"}>Kite Connect</Link></p>
          </p>
          <BadgeIcons/>

        </div>
        <div className='col-7'>
          <div>  <img  src={KiteConnectApiImg} alt='KiteConnectApiImg'/>
          </div>
        </div>
        </div>
        </div>

     
    </div>
  )
}

export default KiteConnectApi