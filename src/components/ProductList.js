import React from 'react'
import ProductItem from './ProductItem'

function ProductList({products}) {
  return (
    <div>
   <h2>Test</h2>
   {
    products.map((item,index)=>(
      <div key={index}>
     <ProductItem product ={item} />
      </div>
    ))
   }
    </div>
  )
}

export default ProductList
