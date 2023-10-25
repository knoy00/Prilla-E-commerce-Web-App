import React from 'react'
import "./Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW PRODUCTS</h2>
            <div>
                <div className='hand-hand-icon'>
                    <p>New</p>
                    {/* <img src={hand_icon} alt='' /> */}
                </div>
                <p>Collections<br/><span>For Everyone</span></p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collections</div>
                <img src={arrow_icon} alt='' />
            </div>
        </div>
        <div className='hero-right'>
            {/* <img src={hero_image} alt='' /> */}
        </div>
    </div>
  )
}

export default Hero;



