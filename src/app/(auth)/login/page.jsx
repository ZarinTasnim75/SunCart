"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/Footer";

const LoginPage = () => {
  return (
    <div>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-amber-50 p-4">
      
      <div className="w-full max-w-md bg-white rounded-xl p-5">
        
        <h2 className="text-3xl font-bold text-center text-amber-600 mb-2"> Welcome Back</h2>

        <p className="text-center mb-8">  Login to your account </p>

        <div className="mb-4">
          <h4 className="block text-gray-700 font-bold mb-2"> Email </h4>

          <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded-xl px-4 py-3 "/>
        </div>

        <div className="mb-2">
          <h4 className="block text-gray-700 font-bold mb-2"> Password</h4>

          <input type="password" placeholder="Enter your password" className="w-full border border-gray-300 rounded-xl px-4 py-3 " />
        </div>

        <div className="text-right mb-6">
          <p className="text-sm text-amber-600 "> Forgot Password? </p>
        </div>

        <button className="w-full bg-amber-500 text-white font-semibold py-3 rounded-xl "> Login </button>

        <p className="text-center my-5 px-4 text-gray-400 text-sm">OR</p>

        <button className="w-full flex justify-center gap-3 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 mb-4"> <FcGoogle size={22} />
         <span className="font-medium">Login with Google</span>
        </button>

        <button className="w-full flex justify-center gap-3 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"> <FaGithub size={24} />
          <span className="font-medium">Login with GitHub</span>
        </button>

      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default LoginPage;