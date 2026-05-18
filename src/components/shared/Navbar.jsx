'use client'
import React from 'react';
import logo from "@/assets/logo.png";
import avatar from "@/assets/user.png";
import Image from 'next/image';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='flex justify-between m-3'>

            <Image src={logo} width={170} height={50} alt="logo-of-site"></Image>

            <ul className='flex justify-between gap-4 mt-5 items-center text-amber-900'>
                <li> <Navlink href={'/'}>Home</Navlink ></li>
                <li><Navlink href={'/products'}>Products</Navlink></li>
                <li><Navlink href={'/my_profile'}>My profile</Navlink></li>
            </ul>

            <div className='flex gap-2'>
                <Image src={avatar} alt="avatar"></Image>
                <button className='btn bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold text-xl'>
                    <Navlink href={"/login"}>Login Now!</Navlink>
                </button>
            </div>
        </div>
    );
};

export default Navbar;