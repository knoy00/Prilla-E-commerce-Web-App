import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import pinterest from '../Assets/pintester_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt='' />
            <p>PRILLA</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Offices</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={instagram} alt='' />
            </div>
            <div className='footer-icons-container'>
                <img src={whatsapp} alt='' />
            </div>
            <div className='footer-icons-container'>
                <img src={pinterest} alt='' />
            </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright @ 2023- All Rights Reserved</p>
        </div>
    </div>
  )
}
