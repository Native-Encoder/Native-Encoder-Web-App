"use client";

import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gray-50 border-t border-gray-200">
            {/* Left Decorative Shape */}
            <div className="absolute bottom-0 left-0 opacity-70 pointer-events-none">
                <Image
                    src="/assets/images/footer/shape-left.svg"
                    alt=""
                    width={180}
                    height={180}
                />
            </div>

            {/* Right Decorative Shape */}
            <div className="absolute top-8 right-0 opacity-70 pointer-events-none">
                <Image
                    src="/assets/images/footer/shape-right.svg"
                    alt=""
                    width={140}
                    height={140}
                />
            </div>

            <div className="relative z-10 max-w-[1320px] mx-auto px-5 lg:px-8 py-24">
                <div className="grid gap-12 lg:grid-cols-12">
                    {/* Company */}
                    <div className="lg:col-span-5">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/assets/images/native-encoder-logo.svg"
                                alt="Native Encoder"
                                width={55}
                                height={55}
                            />

                            <span className="text-2xl font-bold text-gray-900">
                                Native Encoder
                            </span>
                        </Link>

                        <p className="mt-6 max-w-md text-gray-600 leading-8">
                            We empower students, startups, and businesses with professional
                            software development, assignment assistance, research guidance,
                            and innovative digital solutions.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-8 flex items-center gap-6">
                            <a
                                href="#"
                                className="text-gray-500 transition-all duration-300 hover:text-blue-600 hover:-translate-y-1"
                            >
                                <FaFacebookF size={18} />
                            </a>

                            <a
                                href="#"
                                className="text-gray-500 transition-all duration-300 hover:text-blue-600 hover:-translate-y-1"
                            >
                                <RiTwitterXFill size={18} />
                            </a>

                            <a
                                href="#"
                                className="text-gray-500 transition-all duration-300 hover:text-blue-600 hover:-translate-y-1"
                            >
                                <FaYoutube size={18} />
                            </a>

                            <a
                                href="#"
                                className="text-gray-500 transition-all duration-300 hover:text-blue-600 hover:-translate-y-1"
                            >
                                <FaLinkedinIn size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-6 text-xl font-semibold text-gray-900">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition hover:text-blue-600"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about-us"
                                    className="text-gray-600 transition hover:text-blue-600"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services"
                                    className="text-gray-600 transition hover:text-blue-600"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/feedback"
                                    className="text-gray-600 transition hover:text-blue-600"
                                >
                                    Client Feedback
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-6 text-xl font-semibold text-gray-900">
                            Services
                        </h3>

                        <ul className="space-y-4">
                            <li className="text-gray-600 transition hover:text-blue-600 cursor-pointer">
                                Assignment Writing
                            </li>

                            <li className="text-gray-600 transition hover:text-blue-600 cursor-pointer">
                                Research Projects
                            </li>

                            <li className="text-gray-600 transition hover:text-blue-600 cursor-pointer">
                                Web Development
                            </li>

                            <li className="text-gray-600 transition hover:text-blue-600 cursor-pointer">
                                IT Consultation
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-3">
                        <h3 className="mb-6 text-xl font-semibold text-gray-900">
                            Contact
                        </h3>

                        <div className="space-y-5">
                            <div className="flex items-center gap-3 text-gray-600">
                                <FaPhone size={18} className="text-blue-600" />
                                <span>+94 71 603 2454</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-600">
                                <FaEnvelope size={18} className="text-blue-600" />
                                <span>info@nativeencoder.com</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-600">
                                <FaMapMarkerAlt size={18} className="text-blue-600" />
                                <span>Colombo, Sri Lanka</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Native Encoder. All rights reserved.
                    </p>

                    <div className="flex items-center gap-8 text-sm">
                        <Link
                            href="/privacy-policy"
                            className="text-gray-500 transition hover:text-blue-600"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms-and-conditions"
                            className="text-gray-500 transition hover:text-blue-600"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}