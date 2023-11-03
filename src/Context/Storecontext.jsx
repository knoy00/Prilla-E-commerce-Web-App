import React, { createContext, useContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'
// import { Item } from '../Components/Items/Item';


export const Storecontext = createContext(null);
const getDefaultCart = () => {
    let cart = {}
    for(let index = 0; index < all_product.length + 1; index++){
        cart[index] = 0
    }
    return cart;
}


const Storecontextprovider = (props) =>{

    const [cartItem, setCartItem] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] +1}))
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] -1}))
    }

    const contextValue = {all_product, cartItem, addToCart, removeFromCart}
    return(
        <Storecontext.Provider value = {contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default Storecontextprovider

