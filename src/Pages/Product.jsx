import React, { useContext } from 'react'
import all_product from '../Components/Assets/all_product'
import { Storecontext } from '../Context/Storecontext'
import { useParams } from 'react-router-dom'
import { Crumbs } from '../Components/Crumbs/Crumbs'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'

export const Product = () => {
  const {all_product} = useContext(Storecontext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div className='product'>
      <Crumbs product = {product} />
      <ProductDisplay product ={product}/>
    </div>
  )
}
