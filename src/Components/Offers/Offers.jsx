import React from 'react'
import './Offers.css'
import unique from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Unique</h1>
            <h1>Offers for <span>YOU</span></h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            {/* <img src={unique} alt='' /> */}
        </div>
    </div>
  )
}


