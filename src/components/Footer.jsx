import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-yellow-50 pt-16">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div>
                        <h2 className="text-2xl font-bold text-orange-500"> SunCart </h2>
                        <p className="text-gray-600 mt-3 text-sm ">
                            Your one-stop summer shopping destination for trendy,
                            comfortable, and sunshine-ready products.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">
                            Contact Info
                        </h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Email: support@suncart.com</li>
                            <li>Phone: 01234-56789</li>
                            <li>Location: Dhaka, Bangladesh</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">
                            Follow Us
                        </h3>

                        <div className="flex gap-4 text-sm">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                className="hover:text-orange-500 "
                            >
                                Facebook
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                className="hover:text-orange-500 "
                            >
                                Instagram
                            </a>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                className="hover:text-orange-500"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">
                            Legal
                        </h3>

                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <a href="#" className="hover:text-orange-500 ">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-orange-500 ">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className=" py-4 text-center text-sm text-gray-500">
                    © 2026 SunCart. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;