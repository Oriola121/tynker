import React from "react"
import './Footer.css';
import tutor from './tutor.png'
import New from './new.png'


function Footer() {
  return (
    <div className='foot'>
    <div className='footwrap'> 
    <img src={tutor} className='tutor'/>
    <img src={New} className='new'/>
    <div className='footext'>
    <h2 className="h_text">Live coding classes with a private teacher</h2>
    <button className="but9">SCHEDULE A PRIVATE CLASS</button>
    </div>
    </div>
  


    </div>
  );
}

export default Footer;
