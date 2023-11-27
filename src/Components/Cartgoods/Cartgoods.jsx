import React, { useContext } from 'react'
import './Cartgoods.css'
import { Storecontext } from '../../Context/Storecontext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const Cartgoods = () => {
    const {all_product, Cartgoods, removeFromCart} = useContext(Storecontext)
  return (
    <div className ='cartgoods'>
        <div className='cartgoods-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
            <hr />
            <div>
                <div className='cartgoods-format'>
                    <img src = '' alt='' className='cartgoods-icon' />
                    <p></p>
                    <p></p>
                    <button className='cartgoods-quantity'></button>
                    <p></p>
                    <img src = {remove_icon} onClick={() =>{removeFromCart}} alt='' />
                </div>
                <hr />
            </div>
        </div>
    </div>
  )
}
