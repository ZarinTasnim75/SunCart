"use client";
import React from 'react';
import { useEffect, useState } from "react";
import RightSideBar from "@/components/homepage/RightSideBar";

const AllProducts = () => {

   const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("/productData.json");
      const data = await res.json();

      setProducts(data);
    }

     getProducts();
  }, []);

  return (
        <div className="container mx-auto my-10">
        <RightSideBar products={products} />
        </div>
    );
};

export default AllProducts;