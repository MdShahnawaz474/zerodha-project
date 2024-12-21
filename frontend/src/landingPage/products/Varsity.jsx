import React from 'react'

import VarsityImg from "../../assets/images/varsity-products.png"
import { Link } from 'react-router-dom'
import BadgeIcons from './BadgeIcons'

const Varsity = () => {
    return (
        <div>
        <div className='container'style={{ maxWidth: "75%", margin: "0 auto",padding:"80px 0 0 0"} }>
             <div className='mt-5 row ' style={{width:"100%",display:"flex", justifyContent:"space-between",       marginLeft:"10px"}}>
             <div className='col-7'>
              <div>  <img  src={VarsityImg} alt='Console-products'/></div>
            </div>
    
            <div className='col-4 mt-5'>
            <h2  style={{
                lineHeight:"1.5rem", 
                marginBottom:"14px",
               
               
            }}>Varsity mobile</h2>
            <p style={{
                marginTop:"20px"
            }}>
               
              
            An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
          
                
              </p>
            <BadgeIcons/>
            </div>
            </div> 
          </div>

          <div className='container' 
           style={{ maxWidth: "75%", margin: "0 auto",padding:"80px 0 0 0"} }>
            <div className=' text-center' style={{
                fontSize:"1.25rem",
                fontWeight:"400",
                marginTop:"10px"
            }}>
            Want to know more about our technology stack? Check out the 
            <Link style={{
                textDecoration:"none", color:"#387ed1", fontWeight:"500"
            }} > Zerodha.tech </Link>
             blog.
            </div>
        </div>
          </div>      )
}

export default Varsity