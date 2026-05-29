"use client";

import React from "react";
import { FaSun, FaGlassWater } from "react-icons/fa6";
import { FaTint } from "react-icons/fa";

const ExtraSec = () => {

  const tips = [
    {
      id: 1,
      title: "Stay Hydrated",
      desc: "Drink plenty of water during hot summer days to stay fresh and energetic.",
      icon: <FaGlassWater size={28} className="text-blue-500" />,
    },

    {
      id: 2,
      title: "Use Sunscreen",
      desc: "Protect your skin from harmful UV rays with quality sunscreen.",
      icon: <FaSun size={28} className="text-yellow-500" />,
    },

    {
      id: 3,
      title: "Moisturize Skin",
      desc: "Keep your skin soft and healthy by using light moisturizers.",
      icon: <FaTint size={28} className="text-cyan-500" />,
    },
  ];

  const brands = [
    {
      id: 1,
      name: "SunShade",
      tagline: "Premium Summer Accessories",
    },

    {
      id: 2,
      name: "CoolBreeze",
      tagline: "Stay Cool Anywhere",
    },

    {
      id: 3,
      name: "BloomStyle",
      tagline: "Modern Summer Fashion",
    },

    {
      id: 4,
      name: "HydroFresh",
      tagline: "Hydration For Life",
    },
  ];

  return (
    <div className="container px-5 mx-auto my-7 space-y-16">
      <div>

        <h2 className="text-3xl font-bold text-center text-amber-700 mb-10"> Summer Care Tips </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">

          {tips.map((tip) => (
            <div key={tip.id} className="bg-white rounded-2xl shadow-md p-6 border border-amber-200 hover:shadow-xl "  >

              <div className="mb-4">
                {tip.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {tip.title}
              </h3>

              <p className="text-gray-600 ">
                {tip.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
      <div>
   <h2 className="text-3xl font-bold text-center text-green-700 mb-10"> Top Brands </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {brands.map((brand) => (
            <div key={brand.id} className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl p-6 text-center shadow-md">

              <h3 className="text-2xl font-extrabold text-amber-900 mb-3">
                {brand.name}
              </h3>

              <p className="text-gray-700 font-medium">
                {brand.tagline}
              </p>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ExtraSec;