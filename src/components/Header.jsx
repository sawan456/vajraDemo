import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="centerPart">
        <img src="../a.svg.png" alt="" style={{cursor:"pointer"}} />
        <h3 style={{cursor:"pointer"}}>HOME</h3>
      </div>
      <div className="rightPart" typeof='tel' style={{cursor:"pointer"}}>+91 8971580265</div>
    </div>
  )
}

export default Header