"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const UpdateProfile = () => {
    const { data: session } = authClient.useSession();
    const router = useRouter();

    const [name, setName] = useState(session?.user?.name || "");
    const [image, setImage] = useState(session?.user?.image || "");
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();

        setLoading(true);

        const { error } = await authClient.updateUser({
            name,
            image,
        });

        setLoading(false);

        if (error) {
            alert(error.message);
            return;
        }

        router.push("/my_profile");
    };

    return (
        <div className="  mx-auto px-20 lg: px-50 py-10">
            <div className="bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-3xl font-bold text-center text-amber-900 mb-8">  Update Profile </h2>

                <form onSubmit={handleUpdate} className="space-y-6">
                    <div>
                        <label className="block mb-2 font-semibold">  Name </label>

                        <input type="text" placeholder="Enter your name" className="input input-bordered w-full" value={name}
                            onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold"> Image URL </label>

                        <input type="text" placeholder="Enter image URL" className="input input-bordered w-full"
                            value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>

                    <button  type="submit" disabled={loading} className="btn btn-warning w-full text-lg font-bold" >
                        {loading ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                            "Update Information"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;