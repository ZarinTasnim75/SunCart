"use client";
import Link from "next/link";
import React from "react";

const RightSideBar = ({ products }) => {
  return (
    <div className="col-span-3">
      
      <h2 className="font-bold text-center text-2xl bg-amber-200 text-amber-900 rounded-md py-3 mb-5">  Products  </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl border border-amber-400" >
            
            <div className="p-4 flex justify-center">
              <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-lg" /> </div>

            <div className="p-3">
              <h2 className="text-lg font-bold text-gray-800">  {product.name} </h2>
              <p className="text-gray-500 text-sm mt-1"> {product.brand} </p>
              <p className="text-gray-600 text-sm mt-2"> {product.description} </p>
              <div className="flex justify-between items-center mt-4">
                 <p className="text-amber-600 font-bold text-lg"> ${product.price} </p>
                 <p className="text-sm text-gray-500"> Rating: {product.rating} </p>
              </div>

              <div className="mt-5">
                <Link href={`/products/${product.id}`}>
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-xl transition "> View Details </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSideBar;