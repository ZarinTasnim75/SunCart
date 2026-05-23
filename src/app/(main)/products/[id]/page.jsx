import React from 'react';

const DetailsPage = () => {
    return (
        <div className="container mx-auto py-10 px-5">
            <div className="grid md:grid-cols-2 gap-10 items-center bg-white shadow-lg rounded-2xl p-8">

                <div>
                    <img src={product.image} alt={product.name} className="w-full h-[400px] object-cover rounded-xl"/> </div>

                <div>
                    <h1 className="text-4xl font-bold text-gray-800">  {product.name} </h1>
                    <p className="text-lg text-gray-500 mt-2">   Brand: {product.brand}  </p>
                    <p className="text-amber-600 text-3xl font-bold mt-5"> ${product.price} </p>
                    <p className="mt-5 text-gray-700 "> {product.description} </p>
                    
                    <div className="mt-6 space-y-2">
                        <p> <span className="font-bold">Category:</span>{" "} {product.category} </p>
                        <p> <span className="font-bold">Stock:</span>{" "} {product.stock} </p>
                        <p> <span className="font-bold">Rating:</span>{" "} {product.rating} </p>
                    </div>

                    <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-xl font-semibold">   Buy Now  </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;