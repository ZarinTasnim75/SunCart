import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center">

                <div className=" text-center max-w-md w-full space-y-10">
                    <h1 className="text-9xl font-extrabold text-red-900"> 404  </h1>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold text-orange-700">
                            Page Not Found
                        </h2>
                        <p className="text-gray-400 text-sm">
                            The page you're looking for vanished into the solar flare, or never existed in the first place.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center py-4 ">
                        <span className="loading loading-infinity loading-xl"></span> </div>
                    <div>
                        <Link
                            href="/" className="inline-block px-8 py-3 text-sm font-bold  uppercase bg-gradient-to-r from-yellow-500 to-orange-600 text-black rounded-lg ">
                            Back to Suncart
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotFound;