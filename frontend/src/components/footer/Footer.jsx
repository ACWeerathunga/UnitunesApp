import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets';


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Welcome to Sawan Kade, your go-to destination for delicious and freshly prepared meals. We take pride in serving high-quality food with the best flavors to satisfy your cravings. Order online and enjoy convenient doorstep delivery. Thank you for choosing us—we look forward to serving you again!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us
              <p></p>
            </li>
            <li>Delivery</li>
            
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>076 301 2807</li>
            
            <li>https://www.facebook.com/profile.php?id=61563815067524</li>
         <li> 24/1 Colombo Rd , Kadugannawa , Kadugannawa, Sri Lanka</li>
          </ul>
        </div>
        
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2025 © SawanaKade.lk - All Right Reserved.</p>
    </div>
  )
}

export default Footer
