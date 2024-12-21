import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='mt-5' style={{
      backgroundColor:"#387ed1",
      padding:"80px 0 100px 0",
      color:"#fff"
    }}>
      <div className='container' style={{maxWidth: "75%", margin: "0 auto",  justifyContent:'space-between', 
      }}>
        <div className='row'>
          <div className='col-6'style={{color:"#fff", fontSize:'1.275rem', fontWeight:"500", marginBottom:"30px"}}>
            Support Portal
          </div>
          <div className='col-6 ' style={{
            textAlign:"right",
            
            fontWeight:"400",
           textDecoration:"underline",
           textUnderlineOffset:"2px",
            paddingTop:'2px',
            bottom:'3px'
          }}>
            <Link style={{ color:"#fff",}}>
          Track tickets</Link>
          </div>
        </div>

        <div className="row">
        <div className="col-7">
          <div style={{
            marginTop: '20px', marginBottom: '30px', fontWeight: "400", fontSize: '22px', lineHeight: "1.5" 
          }}>
          Search for an answer or browse help topics to create a <br /> ticket
          </div>

          <div style={{ 
           textAlign: 'left', 
           
          }}>
            <input style={{
           height: '55px',
            padding: '10px',  
            margin: 'auto', 
           marginBottom: '15px',
           paddingLeft: '20px', 
           background: '#fff',
           border:"white", 
           borderRadius: '2px',
           width:"80%"}} type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." />
          </div>

          <div style={{display:"flex"}}>
            <p style={
              {
                display:"inline-block",
                marginRight:"20px",
                textDecoration:"underline",
           textUnderlineOffset:"5px",
           paddingBottom:"4px",
           marginBottom:"15px"
              }
            }>Track account opening</p>
            <p style={
              {
                marginRight:"20px",
                textDecoration:"underline",
           textUnderlineOffset:"5px",
           paddingBottom:"4px",
           marginBottom:"15px"
              }
            }> Track segment activation </p>
            <p style={
              {
                marginRight:"20px",
                textDecoration:"underline",
           textUnderlineOffset:"5px",
           paddingBottom:"4px",
           marginBottom:"15px"
              }
            }>  Intraday margins  </p>
           

          </div>
          <p style={
              {
                display:"inline-block",
                marginRight:"20px",
                textDecoration:"underline",
           textUnderlineOffset:"5px",
           paddingBottom:"4px",
           marginBottom:"15px"
              }
            }>Kite user manual</p>
        </div>


        <div className="col-5">
          <div className='mt-5' style={{
            fontSize:"1.275rem",
            fontWeight:"500"
          }}>
          Featured
          </div>
          <p className='mt-3' style={{
             textDecoration:"underline",
             textUnderlineOffset:"5px",
          }}>
             <Link style={{ color:"#fff",}}>1. Latest Intraday leverages and Square-off timings</Link></p>
          <p className='mt-3' style={{
             textDecoration:"underline",
             textUnderlineOffset:"5px",
          }}>
            <Link style={{ color:"#fff",}}>2. Offer for sale (OFS) - December 2024</Link></p>
        </div>
      </div>

      </div>
      
      
    </div>
  )
}

export default Hero