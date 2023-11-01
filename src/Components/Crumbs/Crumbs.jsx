import React from 'react'
import './Crumbs.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
export const Crumbs = (props) => {
    const {product} = props;
  return (
    <div className='crumbs'>
        HOME <img src = {arrow_icon} alt = "" /> SHOP <img src = {arrow_icon} alt='' /> {product.categ} <img src={arrow_icon} alt='' /> {product.name}           
    </div>
  )
}
