import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer' style={{ display:"flex",justifyContent:"space-around",gap:"20rem",alignItems:"center",backgroundColor:"rgb(239, 249, 255)"}}>
      <div className="folef" style={{display:"flex",justifyContent:"space-between",gap:"2rem",alignItems:"center"}}>
        <img src="../a.svg.png" alt="" />
        <h3>© {new Date().getFullYear()} VAJRA, All Rights Reserved</h3>
      </div>
      <h3>Terms & conditions | FAQ's</h3>
    </div>
  )
}

export default Footer