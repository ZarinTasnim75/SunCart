"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterPage = () => {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPass, setIsShowPass] = useState(false);

  const handleRegisterFunc = async (data) => {

    const { email, name, password, photoURL } = data;

    const { data: res, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photoURL,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Registration failed", {
        duration: 3000,
      });

      return;
    }

    toast.success("Signup successful", {
      duration: 3000,
    });

    router.push("/login");
  };

  const handleGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

    } catch (error) {
      toast.error("Google login failed", {
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 p-4">

      <div className="w-full max-w-md bg-white rounded-xl p-6 shadow-lg">

        <h2 className="text-3xl font-bold text-center text-amber-600 mb-2">
          Create Account
        </h2>

        <p className="text-center mb-8 text-gray-500">
          Register your account
        </p>

        <form onSubmit={handleSubmit(handleRegisterFunc)}>

          <div className="mb-4">
            <h4 className="block text-gray-700 font-bold mb-2">
              Full Name
            </h4>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              {...register("name", {
                required: "Name field is required",
              })}
            />

            {errors.name && (
              <p className="text-red-500 mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <h4 className="block text-gray-700 font-bold mb-2">
              Email
            </h4>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              {...register("email", {
                required: "Email field is required",
              })}
            />

            {errors.email && (
              <p className="text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <h4 className="block text-gray-700 font-bold mb-2">
              Photo URL </h4>

            <input
              type="text"
              placeholder="Enter photo url"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              {...register("photoURL", {
                required: "Photo URL is required",
              })} />

            {errors.photoURL && (
              <p className="text-red-500 mt-1">
                {errors.photoURL.message}
              </p>)}
          </div>

          <div className="mb-4 relative">

            <h4 className="block text-gray-700 font-bold mb-2">
              Password
            </h4>

            <input
              type={isShowPass ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              {...register("password", {
                required: "Password field is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            <span
              className="absolute right-5 top-12 cursor-pointer"
              onClick={() => setIsShowPass(!isShowPass)}
            >
              {isShowPass ? <FaEye /> : <FaEyeSlash />}
            </span>

            {errors.password && (
              <p className="text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mb-6">

            <h4 className="block text-gray-700 font-bold mb-2">
              Confirm Password
            </h4>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") ||
                  "Passwords do not match",
              })}
            />

            {errors.confirmPassword && (
              <p className="text-red-500 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition"
          >
            Register
          </button>

        </form>

        <p className="text-center my-5 text-gray-400 text-sm">
          OR
        </p>

        <button
          onClick={handleGoogle}
          className="w-full flex justify-center items-center gap-3 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition" >
          <FcGoogle size={22} />

          <span className="font-medium">
            Continue with Google
          </span>
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}

          <Link href="/login" className="text-amber-600 font-semibold"> Login </Link> </p>

      </div>
    </div>
  );
};

export default RegisterPage;