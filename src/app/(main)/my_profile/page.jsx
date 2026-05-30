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
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (!session) return null;

  const user = session.user;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-10">

        <div className="flex flex-col items-center text-center gap-4 sm:gap-6">

          <div className="w-24 h-24 sm:w-32 sm:h-32">
            <Image src={user.image || avatar} width={150} height={150} alt="user-avatar"
              className="rounded-full border object-cover w-full h-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-amber-900">
            {user.name}
          </h2>

          <p className="text-gray-600 text-sm sm:text-lg break-all">
            {user.email}
          </p>

          <Link href="/my_profile/update"  className="btn btn-warning text-sm sm:text-lg font-semibold px-5 sm:px-8 py-2 sm:py-3 w-full sm:w-auto">
            Update Information
          </Link>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;