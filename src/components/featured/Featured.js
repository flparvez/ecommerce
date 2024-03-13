"use client";

import React, { useEffect, useState } from "react";
import GlobalApi from '@/lib/GlobalApi'
import ProductList from '../ProductList'

const Featured = () => {
  const [productsList, setProductsList] = useState([]);

  const getAllProduct = ()=>{
  GlobalApi.GetLatestProducts().then(response=>{


    setProductsList(response.data.data)
    
    
  })
}
// console.log(productsList)

useEffect(() => {
getAllProduct()
}, [])




  return productsList&&(
    <div>
      <h2>Product List</h2>
      <ProductList products ={productsList} />
      
    </div>
  );
};

export default Featured;
