import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

export const ProductDisplay = (props) => {
    const {product} = props
  return (
    <div className='productDisplay'>
        <div className='product_left'>
            <div className='product_img_list'>
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
            </div>
            <div className='product_display_img'>
                <img className='product_display_main' src={product.image} alt='' />
            </div>
        </div>
        <div className='product_right'>
            <h1>{product.name}</h1>
            <div className='productdisplay_right_star'>
                <img src ={star_icon} alt='' />
                <img src ={star_icon} alt='' />
                <img src ={star_icon} alt='' />
                <img src ={star_icon} alt='' />
                <img src ={star_dull_icon} alt='' />
                <p>(212)</p>
            </div>
            <div className='productdisplay_right_prices'>
                <div className='productdisplay_right_oldprice'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
