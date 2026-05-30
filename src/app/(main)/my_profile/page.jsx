"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import avatar from "@/assets/user.png";
import { useRouter } from "next/navigation";

const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

useEffect(() => {
  if (!session && !isPending) {
    router.push("/login");
  }
}, [session, isPending]);

if (isPending) {
  return (
    <div className="flex justify-center">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
}

if (!session) {
  return null;
}

const user = session.user; 

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <div className="flex flex-col items-center gap-4">
          <Image src={user.image || avatar}  width={120}  height={120}  alt="user-avatar" className="rounded-full border" />

          <h2 className="text-3xl font-bold text-amber-900"> {user.name}  </h2>
          <p className="text-gray-600 text-lg"> {user.email} </p>
          <Link  href="/my_profile/update" className="btn btn-warning text-lg font-semibold px-6" > Update Information </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;