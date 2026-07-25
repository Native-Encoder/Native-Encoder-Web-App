"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Header() {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        {
            name: "Home",
            href: "#home",
        },
        {
            name: "Services",
            href: "#services",
        },
        {
            name: "Portfolio",
            href: "#portfolio",
        },
        {
            name: "Testimonials",
            href: "#testimonials",
        },
        {
            name: "Contact",
            href: "#contact",
        },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 z-50 w-full">
                <div
                    className={`transition-all duration-500 ${
                        sticky ? "py-3" : "py-6"
                    }`}
                >
                    <div className="mx-auto max-w-7xl px-5">
                        <div
                            className={`flex items-center justify-between rounded-2xl border transition-all duration-500 ${
                                sticky
                                    ? "border-white/40 bg-white/80 shadow-xl backdrop-blur-xl"
                                    : "border-transparent bg-transparent"
                            } px-6 py-4`}
                        >
                            {/* Logo */}
                            <Link
                                href="/"
                                className="flex items-center gap-3"
                            >
                                <Image
                                    src="/assets/images/native-encoder-logo-black.png"
                                    alt="Native Encoder"
                                    width={60}
                                    height={60}
                                    priority
                                />

                                <div>
                                    <h2 className="text-xl font-bold text-slate-900">
                                        Native
                                        <span className="text-indigo-600">
                                            {" "}
                                            Encoder
                                        </span>
                                    </h2>

                                    <p className="text-xs text-slate-500">
                                        Software & Academic Solutions
                                    </p>
                                </div>
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="hidden items-center gap-10 lg:flex">
                                {navLinks.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="relative text-[15px] font-medium text-slate-700 transition hover:text-indigo-600 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </nav>

                            {/* Desktop CTA */}
                            <div className="hidden lg:flex">
                                <a
                                    href="https://wa.me/94716032454"
                                    target="_blank"
                                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    Chat on WhatsApp
                                </a>
                            </div>

                            {/* Mobile Button */}
                            <button
                                onClick={() => setMobileMenu(!mobileMenu)}
                                className="rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden"
                            >
                                {mobileMenu ? (
                                    <HiOutlineX size={24} />
                                ) : (
                                    <HiOutlineMenuAlt3 size={24} />
                                )}
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        <div
                            className={`overflow-hidden transition-all duration-500 lg:hidden ${
                                mobileMenu
                                    ? "mt-4 max-h-[500px]"
                                    : "max-h-0"
                            }`}
                        >
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl backdrop-blur-xl">
                                <div className="flex flex-col gap-5">
                                    {navLinks.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() =>
                                                setMobileMenu(false)
                                            }
                                            className="font-medium text-slate-700 transition hover:text-indigo-600"
                                        >
                                            {item.name}
                                        </a>
                                    ))}

                                    <a
                                        href="https://wa.me/94716032454"
                                        target="_blank"
                                        className="mt-3 flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 py-4 font-semibold text-white"
                                    >
                                        <FaWhatsapp />
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Spacer */}
            <div className="h-28" />
        </>
    );
}