import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div className=" container mx-auto col-span-1 text-center  rounded-md">
            <h2 className="font-bold  text-2xl bg-green-200 text-black rounded-md py-3">All Categories</h2>
            <ul className=" flex flex-col gap-3 mt-3">
                {categories.map((product) => (
                    <li key={product.id}  className={`
                            ${activeId === product.id ? " bg-green-300 text-green-700":" bg-blue-300  text-white"}
                            font-bold text-xl  rounded-lg`}>
                                
                                <Link href={`/category/${product.id}`} className='block py-2'>
                                {" "}
                                {product.category}
                                </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftSideBar;