"use client";
import axios from "axios";
import React, { useState } from "react";

const Featured = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const data = await axios.get("http://localhost:1337/api/products", {
        headers:{
          Authorization: 'bearer 425fb73b00592ceb86deb970c1c46e3c9d6fb6f66378bc8ae57165910ad8656766dd5d4d8ed52f2aeff95e6dcdf967a3a43e4ffd5222afebe492c2afefb26821fa99a8cbd036665842db5f09dd7de15fc1157799276f01ebd15675c3ea6a8ebe4548845a5541c139e0cdb1d9c7827e3299448a1774a85733087271d0c280dc08',
        }
      });
      console.log(data)
    } catch (error) {}
  };

  fetchData()
  return (
    <div>
      <h2>This is featured page</h2>
    </div>
  );
};

export default Featured;
