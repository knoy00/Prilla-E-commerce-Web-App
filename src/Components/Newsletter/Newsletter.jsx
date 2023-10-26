import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get <span>Exclusive</span> Offers</h1>
        <p>Subscribe to our newsletter to get updates on unique offers</p>
        <div>
            <input type='email' placeholder='Enter Your Email Address' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
