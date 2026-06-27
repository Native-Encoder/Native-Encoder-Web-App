"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/about-us", label: "About Us" },
        { href: "/feedback", label: "Client Feedback" },
    ];

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Brand/Logo */}
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <Image
                            src="/assets/images/native-encoder-logo.svg"
                            alt="Native Encoder Logo"
                            width={48}
                            height={48}
                            className="h-10 w-10 md:h-12 md:w-12 object-contain"
                            priority
                        />
                        <h1 className="hidden sm:block text-lg md:text-xl font-bold text-gray-800">
                            Native Encoder
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-sm lg:text-base"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Call Button - Desktop */}
                    <a
                        href="tel:+92716032454"
                        className="hidden md:flex px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-sm items-center gap-2"
                    >
                        <svg
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M3 9.1c0-.5.1-1 .3-1.6l2.1 2.1c.1.3.3.5.5.7L3.9 14c-.5-1.5-.9-3-1.9-4.9m16.8-3.5l2.1-2.1c.2.6.3 1.1.3 1.6-1 1.9-1.4 3.4-1.9 4.9l-1.9-1.9c.2-.2.4-.4.5-.7m-8.4-2.5c2.2 0 4.4.8 6.1 2.5s2.5 3.9 2.5 6.1-8 0-4.4.8-6.1 2.5-2.5 6.1.8 4.4 2.5 6.1 3.9 2.5 6.1 2.5 4.4-.8 6.1-2.5 2.5-3.9 2.5-6.1-8 0-4.4-.8-6.1-2.5-2.5-6.1-.8-4.4-2.5-6.1-3.9-2.5-6.1-2.5" />
                        </svg>
                        Call Us: 071 603 2454
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden pb-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-2 pt-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors duration-300 font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href="tel:+92716032454"
                                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-center mt-2 flex items-center justify-center gap-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M3 9.1c0-.5.1-1 .3-1.6l2.1 2.1c.1.3.3.5.5.7L3.9 14c-.5-1.5-.9-3-1.9-4.9m16.8-3.5l2.1-2.1c.2.6.3 1.1.3 1.6-1 1.9-1.4 3.4-1.9 4.9l-1.9-1.9c.2-.2.4-.4.5-.7m-8.4-2.5c2.2 0 4.4.8 6.1 2.5s2.5 3.9 2.5 6.1-8 0-4.4.8-6.1 2.5-2.5 6.1.8 4.4 2.5 6.1 3.9 2.5 6.1 2.5 4.4-.8 6.1-2.5 2.5-3.9 2.5-6.1-8 0-4.4-.8-6.1-2.5-2.5-6.1-.8-4.4-2.5-6.1-3.9-2.5-6.1-2.5" />
                                </svg>
                                Call Us: 071 603 2454
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}