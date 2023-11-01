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
                    ${product.old_price}
                </div>
                <div className='productdisplay_right_newprice'>
                    ${product.new_price}
                </div>
            </div>
            <div className='productdisplay_right_description'>
                Style FJ0982-600 Colorway MEDIUM SOFT PINK/WHITE/LOTUS PINK Retail Price $130 Release Date 10/15/2023
            </div>
            <div className='productdisplay_right_size'>
                <h1>Choose Size</h1>
                <div className='productdisplay_right_sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            <p className='productdisplay_right_category'><span>Category :</span>Women, T-shirt, Hoodies</p>
            <p className='productdisplay_right_category'><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}
