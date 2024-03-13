import React from 'react'

function ProductItem({product}) {
  return (
    <div>
      <h2>{product.attributes.title} </h2>
    </div>
  )
}

export default ProductItem
