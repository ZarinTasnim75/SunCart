import Footer from '@/components/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Toaster
                position="top-center"
                toastOptions={{  duration: 4000,  removeDelay: 500,  }}  />
            {children}
            <Footer />
        </div>
    );
};

export default AuthLayout;