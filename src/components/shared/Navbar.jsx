"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import avatar from "@/assets/user.png";
import Navlink from "./Navlink";
import { FaBars } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const UseAva = user?.image ? user.image : avatar;

  return (
    <nav className="w-full shadow-sm bg-white px-4 md:px-8 py-3">
      <div className="flex items-center justify-between">
        <Image src={logo} width={170} height={50} alt="logo" className="w-auto h-auto" />

        <ul className="hidden md:flex items-center gap-6 text-amber-900 font-medium">
          <li> <Navlink href="/">Home</Navlink> </li>
          <li>  <Navlink href="/allproduct">Products</Navlink>  </li>
          <li> <Navlink href="/my_profile">My Profile</Navlink> </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {isPending ? (<span className="loading loading-ring loading-md"></span>
          ) : user ? (
            <>
              <Image src={UseAva} width={45} height={45} alt="user-avatar" className="rounded-full border" />
              <p>Hello {user.name}</p>

              <button className="btn btn-warning text-xl font-bold p-5 " onClick={async () => {
                await authClient.signOut();
                router.push("/login");
              }}> Logout </button>
            </>) : (
            <>
              <button className="btn btn-warning text-xl font-bold p-5 "> 
              <Navlink href="/login" className="btn btn-warning text-xl font-bold p-5">Login Now!</Navlink> </button>
            </>
          )}
        </div>

        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)} > <FaBars size={25} /> </button>
      </div>

      { menuOpen && (
        <div className="md:hidden mt-4 bg-white p-4 rounded-lg shadow">
          <ul className="flex flex-col gap-4 text-amber-900">
            <li> <Navlink href="/">Home</Navlink> </li>

            <li> <Navlink href="/allproduct">Products</Navlink> </li>

            <li> <Navlink href="/my_profile">My Profile</Navlink> </li>
          </ul>

          <div className="mt-4 flex flex-col gap-3">
            {user ? (
              <>
                <Image src={user.image || avatar} width={40} height={40} alt="avatar" className="rounded-full" />
                 <button className="btn btn-warning text-xl font-bold p-5 " onClick={async () => {await authClient.signOut();
                 router.push("/login");
                  }} > Logout </button>
              </>
            ) : (
              <>
                <button className="btn btn-warning text-2xl font-bold p-6"> <Navlink href="/login">Login Now!</Navlink> </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;