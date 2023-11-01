import React, { useContext } from 'react'
import './CSS/Shopcontent.css'
import { Storecontext } from '../Context/Storecontext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import all_product from '../Components/Assets/all_product'
import { Item } from '../Components/Items/Item'
import { Footer } from '../Components/Footer/Footer'


export const Shopcontent = (props) => {
  const {all_products} = useContext(Storecontext)
  return (
    <div className='shopcontent'>
      <img className='shopcontent-banner' src={props.banner} alt='' />
      <div className='content-index'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='content-sort'>
          Sort by <img src = {dropdown_icon} alt=''/>
        </div>
      </div>
      <div className='content-product'>
        {all_product.map((item, i) =>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className='loadmore'>
        Explore
      </div>
    </div>
  )
}
