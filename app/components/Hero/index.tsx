"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaGraduationCap,
  FaLaptopCode,
  FaGlobe,
  FaCode,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-100 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-100 blur-[120px]" />
    </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 Trusted by Students & Businesses
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
              Empowering
              <span className="block text-blue-600">
                Innovation Through
              </span>
              Technology & Education
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Native Encoder delivers professional website development,
              research & thesis writing, software solutions, programming
              classes and digital services that help students and businesses
              succeed.
            </p>

            {/* Service Pills */}
            <div className="mt-8 flex flex-wrap gap-3">

              <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                💻 Website Development
              </div>

              <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                📝 Assignment Writing
              </div>

              <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                📚 Research & Thesis
              </div>

              <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                👨‍💻 Programming Classes
              </div>

              <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                📈 Social Media Management
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="group inline-flex items-center rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
                <FaArrowRight className="ml-3 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="rounded-xl border border-gray-300 px-7 py-4 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
              >
                Explore Services
              </Link>

            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6">

              <div>
                <h2 className="text-3xl font-bold text-gray-900">4+</h2>
                <p className="text-gray-600">Years Experience</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">1000+</h2>
                <p className="text-gray-600">Happy Clients</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">24/7</h2>
                <p className="text-gray-600">Support</p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* Main Card */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">
                  Native Encoder
                </h3>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  Online
                </span>
              </div>

              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">

                  <div className="rounded-lg bg-blue-100 p-3">
                    <FaLaptopCode className="text-2xl text-blue-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Website Development
                    </h4>
                    <p className="text-sm text-gray-500">
                      Modern & Responsive Websites
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">

                  <div className="rounded-lg bg-green-100 p-3">
                    <FaGraduationCap className="text-2xl text-green-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Research & Thesis
                    </h4>
                    <p className="text-sm text-gray-500">
                      Academic Excellence
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">

                  <div className="rounded-lg bg-orange-100 p-3">
                    <FaCode className="text-2xl text-orange-500" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Programming Classes
                    </h4>
                    <p className="text-sm text-gray-500">
                      Learn with Experts
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Floating Card */}
            <div className="absolute -left-8 bottom-10 hidden rounded-2xl border bg-white p-5 shadow-xl lg:block">

              <div className="flex items-center gap-3">

                <div className="rounded-full bg-blue-100 p-3">
                  <FaGlobe className="text-blue-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    Business Growth
                  </h4>
                  <p className="text-sm text-gray-500">
                    Digital Solutions
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}