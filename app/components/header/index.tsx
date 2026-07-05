
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const [sticky, setSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/about-us", label: "About Us" },
        { href: "/feedback", label: "Client Feedback" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <main className="pt-20">
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${sticky
                        ? "bg-white/90 backdrop-blur-md shadow-md py-0"
                        : "bg-transparent py-2"
                    }`}
            >
                <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/assets/images/native-encoder-logo.svg"
                                alt="Native Encoder"
                                width={52}
                                height={52}
                                priority
                            />

                            <span className="text-xl font-bold tracking-tight text-gray-900">
                                Native Encoder
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <nav className="hidden lg:flex items-center gap-10">
                            {navLinks.map((item) => {
                                const active = pathname === item.href;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`relative font-medium transition-all duration-300
                  ${active
                                                ? "text-blue-600"
                                                : "text-gray-700 hover:text-blue-600"
                                            }
                  after:absolute after:left-0 after:-bottom-2 after:h-[2px]
                  after:bg-blue-600 after:transition-all after:duration-300
                  ${active
                                                ? "after:w-full"
                                                : "after:w-0 hover:after:w-full"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Desktop CTA */}
                        <a
                            href="tel:+94716032454"
                            className="hidden lg:flex items-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
                        >
                            Call Us
                        </a>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden relative h-10 w-10 flex items-center justify-center"
                        >
                            <span
                                className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-2"
                                    }`}
                            />

                            <span
                                className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                    }`}
                            />

                            <span
                                className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-2"
                                    }`}
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px]" : "max-h-0"
                        }`}
                >
                    <div className="bg-white border-t border-gray-100 shadow-lg">
                        <div className="px-5 py-6 flex flex-col gap-1">
                            {navLinks.map((item) => {
                                const active = pathname === item.href;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`rounded-lg px-4 py-3 font-medium transition-all duration-300 ${active
                                                ? "bg-blue-50 text-blue-600"
                                                : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}

                            <a
                                href="tel:+94716032454"
                                className="mt-4 flex justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Call Us: 071 603 2454
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </main>

    );
}