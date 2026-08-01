"use client";

import Link from "next/link";
import {
    FaArrowRight,
    FaBullseye,
    FaEye,
    FaCheckCircle,
} from "react-icons/fa";

const features = [
    "Professional Academic Assistance",
    "Modern Website Development",
    "Industry-Level Programming Classes",
    "Dedicated Client Support",
];

export default function About() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* LEFT */}

                    <div className="relative">

                        <div className="absolute left-5 top-5 h-[88%] w-1 rounded-full bg-blue-200"></div>

                        <div className="space-y-12">

                            {/* 2022 */}

                            <div className="relative flex gap-6">

                                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg">
                                    22
                                </div>

                                <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 w-full">

                                    <span className="text-sm font-semibold text-blue-600">
                                        2022
                                    </span>

                                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                                        Native Encoder Founded
                                    </h3>

                                    <p className="mt-3 text-gray-600 leading-7">
                                        Started with a vision of helping undergraduate and postgraduate
                                        students succeed through professional academic support.
                                    </p>

                                </div>

                            </div>

                            {/* 2023 */}

                            <div className="relative flex gap-6">

                                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg">
                                    23
                                </div>

                                <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 w-full">

                                    <span className="text-sm font-semibold text-blue-600">
                                        2023
                                    </span>

                                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                                        Expanded Academic Services
                                    </h3>

                                    <p className="mt-3 text-gray-600 leading-7">
                                        Introduced research writing, thesis support, programming
                                        guidance, and final-year project assistance.
                                    </p>

                                </div>

                            </div>

                            {/* 2024 */}

                            <div className="relative flex gap-6">

                                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg">
                                    24
                                </div>

                                <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 w-full">

                                    <span className="text-sm font-semibold text-blue-600">
                                        2024
                                    </span>

                                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                                        Entered Business Solutions
                                    </h3>

                                    <p className="mt-3 text-gray-600 leading-7">
                                        Expanded into website development, software solutions, and
                                        digital marketing for businesses.
                                    </p>

                                </div>

                            </div>

                            {/* 2025 */}

                            <div className="relative flex gap-6">

                                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg">
                                    25
                                </div>

                                <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 w-full">

                                    <span className="text-sm font-semibold text-blue-600">
                                        2025
                                    </span>

                                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                                        Growing Our Impact
                                    </h3>

                                    <p className="mt-3 text-gray-600 leading-7">
                                        Continued serving students and businesses while expanding our
                                        portfolio with modern digital solutions.
                                    </p>

                                </div>

                            </div>

                            {/* 2026 */}

                            <div className="relative flex gap-6">

                                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-xl animate-pulse">
                                    26
                                </div>

                                <div className="rounded-2xl border-2 border-blue-500 bg-blue-50 p-6 shadow-xl w-full">

                                    <span className="text-sm font-semibold text-blue-600">
                                        2026
                                    </span>

                                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                                        Celebrating Our 4th Anniversary 🎉
                                    </h3>

                                    <p className="mt-3 text-gray-600 leading-7">
                                        Four years of empowering students and businesses through
                                        innovation, quality, and dedication with many more milestones
                                        ahead.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div>

                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                            WHO WE ARE
                        </span>

                        <h2 className="mt-6 text-4xl font-bold text-gray-900">
                            More Than a Service Provider
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Native Encoder is a technology-driven company dedicated to
                            empowering students and businesses through innovative digital
                            solutions. From academic guidance and research support to custom
                            software development and business websites, we combine expertise,
                            creativity, and innovation to deliver outstanding results.
                        </p>

                        <div className="mt-10 space-y-5">

                            {features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                                >
                                    <div className="rounded-full bg-green-100 p-2">
                                        <FaCheckCircle className="text-green-600" />
                                    </div>

                                    <span className="font-medium text-gray-700">
                                        {feature}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <Link
                            href="/about"
                            className="mt-10 inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Learn More About Us
                            <FaArrowRight className="ml-3" />
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}