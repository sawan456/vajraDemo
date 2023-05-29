import React from 'react'
import '../styles/Main.css'
import Button from '@mui/material/Button';


const Main = () => {
  return (
    <div className='main'>
      <div className="submain">
        <div className="features" style={{paddingBottom:"1rem",paddingRight:"5rem",paddingLeft:"5rem",borderRadius:"2rem",boxShadow:"2px 2px 2px rgb(50, 95, 173)"}}>
          <h1 style={{display:"flex",justifyContent:"center"}}>Features</h1>
          <div className="digi" style={{display:'flex',gap:'2rem'}}>
            <img src="../dd.png" alt="" style={{height:"5rem",borderRadius:"6px",width:"5.5rem",marginTop:"1rem"}} />
            <div className="condig">
              <h2>Digitize</h2>
              <p>A Bird eye view of the entire Biomedical Operations.</p>
            </div>
          </div>
          <div className="Track" style={{display:'flex',gap:'2rem'}}>
            <img src="../t.svg.png" alt="" style={{height:"5rem",borderRadius:"6px",width:"5.5rem",marginTop:"1rem"}}/>
            <div className="contrac">
              <h2>Track</h2>
              <p>Track the product life cycle and service history.</p>
            </div>
          </div>
          <div className="Bio" style={{display:'flex',gap:'2rem'}}>
            <img src="../b.svg.png" alt="" style={{height:"5rem",borderRadius:"6px",marginTop:"1rem"}}/>
            <div className="conbio" >
            <h2>Biomedical Budget</h2>
            <p>Regulate and save budget through analysed data and informed</p>
            </div>
          </div>
        </div>
        <div className="signin" style={{backgroundColor:" rgb(239, 249, 255)",paddingBottom:"1rem",paddingRight:"5rem",paddingLeft:"5rem",borderRadius:"2rem",boxShadow:"2px 2px 2px rgb(193, 211, 241)"}}>
        <h2 style={{color:"orange",display:"flex",justifyContent:"center"}}>Sign in</h2>
        <div className="containerForm">
          <form action="" style={{borderTop:"1px solid gray"}}>
            <h2 style={{color:"rgb(50, 95, 173)"}}>Sign in to your account</h2>
            <h4>Email Id</h4>
            <input required type="email" style={{width:"30rem",height:"3rem",boxShadow:"2px 2px 2px rgb(193, 211, 241)",border:"none",borderRadius:".2rem"}} placeholder='     xxxxxxxxxxxx' />
            <h4>Password</h4>
            <input required type="password" style={{width:"30rem",height:"3rem",boxShadow:"2px 2px 2px rgb(193, 211, 241)",border:"none",borderRadius:".2rem"}} placeholder='     xxxxxxxxxxxx' />
            <h4 style={{color:"red",cursor:"pointer"}}>Forgot Password</h4>
            <div className="btn" >
            <button style={{color:"white",backgroundColor:"rgb(50, 95, 173)",width:"100%",height:"3rem",fontSize:"1.4rem",boxShadow:"2px 2px 2px rgb(143, 174, 227)",border:"none",cursor:"pointer"}}>Sign in</button>
            </div>
            <div className="info" style={{display:"flex",justifyContent:"center",gap:"1rem"}}>
              <h4 style={{color:"gray",cursor:"pointer"}}>New to vajra?</h4>
              <h4 style={{color:"orange",cursor:"pointer"}}>Sign UP Now</h4>
            </div>
          </form>
        </div>
        </div>
      </div>
      <div className="lastmain" style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"2rem",marginTop:"4rem"}}>
        <h2 style={{color:"rgb(50, 95, 173)"}}>Download Our App</h2>
        <a href="https://play.google.com/store/apps" target='blank'>
        <img src="https://darinnewsom.com/wp-content/uploads/2020/07/get-it-on-google-play-badge.png" alt="" style={{width:"10rem",height:"3rem",cursor:"pointer"}} />
        </a>
        <a href="https://www.apple.com/in/app-store/" target='"blank'>
        <img src="https://w7.pngwing.com/pngs/2/670/png-transparent-logo-app-store-font-brand-product-app-store-play-store-text-logo-monochrome.png" alt="" style={{width:"10rem",height:"3rem",cursor:"pointer"}} />
        </a>
      </div>
    </div>
  )
}

export default Main