"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaLaptopCode,
  FaFileAlt,
  FaBookOpen,
  FaCode,
  FaBullhorn,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    icon: FaLaptopCode,
    title: "Website Development",
    description:
      "Modern, responsive, and SEO-friendly websites tailored to your business goals.",
    color: "blue",
  },
  {
    icon: FaFileAlt,
    title: "Assignment Writing",
    description:
      "High-quality academic assignments prepared with originality and professionalism.",
    color: "emerald",
  },
  {
    icon: FaBookOpen,
    title: "Research & Thesis",
    description:
      "Comprehensive research and thesis writing support from proposal to final submission.",
    color: "purple",
  },
  {
    icon: FaCode,
    title: "Programming Classes",
    description:
      "Hands-on coding lessons covering modern programming languages and technologies.",
    color: "orange",
  },
  {
    icon: FaBullhorn,
    title: "Social Media Management",
    description:
      "Creative content, branding, and digital marketing strategies to grow your business.",
    color: "pink",
  },
  {
    icon: FaChartLine,
    title: "IT Project Development",
    description:
      "Custom software solutions and final year projects built using modern technologies.",
    color: "indigo",
  },
];

const colors = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    hover: "group-hover:bg-blue-600",
  },
  emerald: {
    bg: "bg-emerald-100",
    text: "text-emerald-600",
    hover: "group-hover:bg-emerald-600",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    hover: "group-hover:bg-purple-600",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
    hover: "group-hover:bg-orange-600",
  },
  pink: {
    bg: "bg-pink-100",
    text: "text-pink-600",
    hover: "group-hover:bg-pink-600",
  },
  indigo: {
    bg: "bg-indigo-100",
    text: "text-indigo-600",
    hover: "group-hover:bg-indigo-600",
  },
};

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Everything You Need,
            <span className="text-blue-600"> All In One Place</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're a student striving for academic success or a business
            looking to establish a powerful digital presence, Native Encoder
            delivers professional solutions with quality, creativity, and
            innovation.
          </p>

        </div>

        {/* Services Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;
            const color = colors[service.color as keyof typeof colors];

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color.bg} ${color.hover} transition`}
                >
                  <Icon
                    className={`text-3xl ${color.text} group-hover:text-white transition`}
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Learn More
                  <FaArrowRight className="ml-2 transition group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}