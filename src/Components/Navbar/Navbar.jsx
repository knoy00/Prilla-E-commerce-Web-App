import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>PRILLA</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => {setMenu("shop")}}><Link style={{ textDecoration: "none"}} to = "/">HOME</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("men")}}><Link style={{ textDecoration: "none"}} to = "/men">MEN</Link> {menu==="men"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("women")}}><Link style={{ textDecoration: "none"}} to = "/women">WOMEN</Link> {menu==="women"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link style={{ textDecoration: "none"}} to = "/kids">KIDS</Link> {menu==="kids"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("shoes")}}><Link style={{ textDecoration: "none"}} to = "/shoes">SHOES</Link> {menu==="shoes"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
      <Link to = "/login"><button>Login</button></Link>
      <Link to = "/cart"><img src={cart_icon} alt="" /></Link>
       
        <div className='nav-cart-count'>1</div>
      </div>
    </div>
  )
}
