"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";

const LoginPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [isShowPass, setIsShowPass] = useState(false)

const handleLoginFunc = async (data) => {

  const { data: res, error } = await authClient.signIn.email({
    email: data.email,
    password: data.password,
    rememberMe: true,
    callbackURL: "/",
  });

  if (error) {
    toast.error(error.message || "Login failed");
    return;
  }

  toast.success("Login successful");
};

 const handleGoogle = async () => {
  try {
    const data = await authClient.signIn.social({
      provider: "google",
    });

  } catch (error) {
    toast.error("Google login failed");
  }
};

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-amber-50 p-4">

        <div className="w-full max-w-md bg-white rounded-xl p-5">

          <h2 className="text-3xl font-bold text-center text-amber-600 mb-2"> Welcome Back</h2>

          <p className="text-center mb-8">  Login to your account </p>

          <form onSubmit={handleSubmit(handleLoginFunc)}>

            <div className="mb-4">
              <h4 className="block text-gray-700 font-bold mb-2"> Email </h4>
              <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded-xl px-4 py-3"
                {...register("email", { required: "Email field is required" })} />

              {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
            </div>

            <div className="mb-2 relative">
              <h4 className="block text-gray-700 font-bold mb-2"> Password</h4>

              <input type={isShowPass ? "text" : "password"} name="password" placeholder="Enter your password" className="w-full border border-gray-300 rounded-xl px-4 py-3"
                {...register("password", { required: "Password field is required" })} />
              <span className="absolute right-5 top-12 cursor-pointer" onClick={() => setIsShowPass(!isShowPass)}>
                {isShowPass ? <FaEye /> : <FaEyeSlash />}
              </span>
              {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
            </div>

            <div className="text-right mb-6">
              <p className="text-sm text-amber-600 "> Forgot Password? </p>
            </div>

            <button className="w-full bg-amber-500 text-white font-semibold py-3 rounded-xl "> Login </button></form>

          <p className="text-center my-5 px-4 text-gray-400 text-sm">OR</p>

          <button onClick={handleGoogle} className="w-full flex justify-center gap-3 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 mb-4"> <FcGoogle size={22} />
            <span className="font-medium"> Login with Google </span>
          </button>

          <p className="text-sm text-gray-600 py-5"> If don't have an account :-</p>
          <div className="w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition">

            <Link href="/register" className="font-medium "> Register </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;