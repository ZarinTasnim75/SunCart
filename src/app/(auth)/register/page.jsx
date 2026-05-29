"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

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

    const { email, name, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
    }

    if (res) {
      alert("Signup successful");

      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 p-4">

      <div className="w-full max-w-md bg-white rounded-xl p-6 shadow-lg">

        <h2 className="text-3xl font-bold text-center text-amber-600 mb-2">
          Create Account
        </h2>

        <p className="text-center mb-8 text-gray-500">
          Register an account
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
      </div>
    </div>
  );
};

export default RegisterPage;