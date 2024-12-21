import React from 'react'
import CEO_Image from "../../assets/images/nithinKamath.jpg"
import { Link } from 'react-router-dom'
const CEO = () => {
  return (
    <div className='container 'style={{ width:"900px", margin:"auto"}}>
    <div className='mt-3'>
    <h2 className='text-center'>People</h2>

  </div>
  <div className='mt-5'>
    <div className='row ' style={{
      display:'flex',
      justifyContent:"center"
    }}>

      <div className='col-5'>
      <div className='text-center' >
        <img style={{height:"295px",
        marginBottom:"10px", borderRadius:"100%"
      }} src={CEO_Image} alt="CEO" />
      <h5 style={{fontSize:"1.25rem"}}>Nithin Kamath</h5> 
      <p style={{
        color:"#666",
        fontSize:".9rem"
      }}>Founder, CEO</p>
      </div>
      </div>

      <div className='col-7'>
        <p>
          
        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader.
            Today, Zerodha has changed the landscape of the Indian broking
            industry.
          
        </p>

        <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>Connect on <span  style={{color:"#387ed1"}}>Homepage</span> / <span  style={{color:"#387ed1"}}>TradingQnA</span> / <Link  style={{color:"#387ed1", textDecoration:"none"}} to="https://x.com/Nithin0dha">Twitter</Link> </p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default CEO