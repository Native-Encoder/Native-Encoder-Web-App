
"use client";

import Link from "next/link";


export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-blue-600">Native Encoder</h3>
                        <p className="text-gray-300">
                            Delivering innovative solutions for your business needs.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-blue-600">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/" className="hover:text-blue-600 transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" className="hover:text-blue-600 transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-blue-600 transition-colors duration-300">
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-blue-600">Support</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            &copy; 2024 Native Encoder. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}