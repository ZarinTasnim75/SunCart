import React from 'react';
import logo from "@/assets/logo.png";
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className=''>
           <Image src={logo} width={170} height={50} alt="logo-of-site"></Image>
        </div>
    );
};

export default Navbar;