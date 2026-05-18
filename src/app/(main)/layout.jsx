import Animate from '@/components/shared/Animate';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Animate />
             {children}
        </div>
    );
};

export default Mainlayout;