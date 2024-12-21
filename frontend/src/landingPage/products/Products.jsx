import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='mt-5 content' style={{ maxWidth: "75%", margin: "0 auto" }}>
      <div className=' text-center ' style={{
          paddingTop:"100px",
          paddingBottom:"100px"
        }}>
        <h1 >Zerodha Products</h1>
        <p style={{
          paddingTop:"10px",
          fontSize:"1.25rem"
        }}>
      Sleek, modern, and intuitive trading platforms
        </p>
        <p>
        Check out our <Link style={{textDecoration:"none"}} to={"/"}>investment offerings </Link></p>
    </div>

         <div className='mt-2' style={{
      borderBottom:"1px solid #eee"
    }}>
    </div>
    </div>
  )
}

export default Products