import React, { createContext } from 'react'
import all_product from '../Components/Assets/all_product'

export const Storecontext = createContext(null);

const Storecontextprovider = (props) =>{
    const contextValue = {all_product}

    return(
        <Storecontext.Provider value = {contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default Storecontextprovider

