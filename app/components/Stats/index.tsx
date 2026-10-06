"use client";

import {
  FaUserGraduate,
  FaLaptopCode,
  FaGlobe,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: FaUserGraduate,
    value: "1000+",
    title: "Students Supported",
    description:
      "Assignments, research, programming classes and academic guidance.",
  },
  {
    icon: FaLaptopCode,
    value: "250+",
    title: "Projects Delivered",
    description:
      "Professional websites, software systems and custom IT solutions.",
  },
  {
    icon: FaGlobe,
    value: "10+",
    title: "Business Clients",
    description:
      "Helping businesses grow through websites and digital marketing.",
  },
  {
    icon: FaAward,
    value: "4+",
    title: "Years Experience",
    description:
      "Trusted by students and organizations across Sri Lanka.",
  },
];

export default function Stats() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            OUR IMPACT
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Numbers That Reflect Our Journey
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Over the years we've proudly supported thousands of students,
            delivered innovative software solutions, and helped businesses
            establish a strong digital presence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon className="text-3xl text-blue-600 transition group-hover:text-white" />
                </div>

                <h3 className="mt-8 text-5xl font-extrabold text-gray-900">
                  {item.value}
                </h3>

                <h4 className="mt-3 text-xl font-semibold text-gray-800">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}