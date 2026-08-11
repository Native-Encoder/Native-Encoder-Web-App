"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaGraduationCap,
  FaLaptopCode,
  FaFileAlt,
  FaCode,
} from "react-icons/fa";

function Counter({
  end,
  suffix = "",
  duration = 1500,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth ease-out effect
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-100 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-sky-100 blur-[120px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <div>

            {/* Badge */}

            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 Trusted by Students & Businesses
            </span>

            {/* Heading */}

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">

              Empowering

              <span className="block text-blue-600">
                Innovation Through
              </span>

              Technology & Education

            </h1>

            {/* Description */}

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

            {/* ================================================= */}
            {/* ANIMATED STATS */}
            {/* ================================================= */}

            <div className="mt-14 grid grid-cols-3 gap-6">

              {/* Experience */}

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  <Counter
                    end={4}
                    suffix="+"
                    duration={900}
                  />
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  Years Experience
                </p>

              </div>

              {/* Clients */}

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  <Counter
                    end={1000}
                    suffix="+"
                    duration={2000}
                  />
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  Happy Clients
                </p>

              </div>

              {/* Support */}

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  <Counter
                    end={24}
                    suffix="/7"
                    duration={1200}
                  />
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  Support
                </p>

              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

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

                {/* Website Development */}

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

                {/* Assignment Writing */}

                <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">

                  <div className="rounded-lg bg-red-100 p-3">
                    <FaFileAlt className="text-2xl text-red-600" />
                  </div>

                  <div>

                    <h4 className="font-semibold text-gray-800">
                      Assignment Writing
                    </h4>

                    <p className="text-sm text-gray-500">
                      Quality Academic Assistance
                    </p>

                  </div>

                </div>

                {/* Research & Thesis */}

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

                {/* Programming Classes */}

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

          </div>

        </div>

      </div>

    </section>
  );
}