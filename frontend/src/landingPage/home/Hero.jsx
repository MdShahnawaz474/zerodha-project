import React from 'react'
import heroimage from "../../assets/images/homeHero.png"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='container p-5 '>
      <div className='row text-center ' >
      <img  src={heroimage} alt='HeroImage'/>
      <h1 className='mt-4 '>
    Invest in everything
      </h1>
      <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.Sign up for free</p>
     <Link to={"/signup"}> <button className='pt-2 btn btn-primary' style={{width:"20%", margin:"0 auto" }}>Sign up for free</button></Link>
      </div>
    </div>
  )
}

export default Hero