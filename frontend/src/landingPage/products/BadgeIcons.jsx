import React from 'react'
import GoogleBadge from "../../assets/badges/google-play-badge.svg"
import AppstoreBadge from "../../assets/badges/appstore-badge.svg"
import { Link } from 'react-router-dom'
const BadgeIcons = () => {
  return (
    <div> <div className='flex  mt-3' >
                    
    <Link to={"/"}><img src={GoogleBadge} alt="GoogleBadge" /></Link>
    <img style={{paddingLeft:"15px"}} src={AppstoreBadge} alt="GoogleBadge" />
</div></div>
  )
}

export default BadgeIcons