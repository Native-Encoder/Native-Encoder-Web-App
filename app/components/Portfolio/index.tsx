"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaGraduationCap,
  FaMobileAlt,
  FaDatabase,
  FaGlobe,
} from "react-icons/fa";

const categories = [
  "All",
  "Business Website",
  "Software Projects",
  "Academic Projects",
];

const projects = [
  {
    title: "Vehicle Reservation Service System",
    category: "Academic Projects",
    description:
      "A modern vehicle reservation service platform features a responsive and user-friendly UI, ensuring a smooth experience for both service staff and customers, while streamlining vehicle service operations and record management.",
    icon: FaGraduationCap,
    technologies: ["ASP.NET", "React.js", "Tailwind CSS", "MongoDB"],
    image: "/assets/images/Portfolio/Project1.png",
  },
  {
    title: "Learning Management System",
    category: "Academic Projects",
    description:
      "A Laravel-based Learning Management System offering user authentication, role-based access control, class scheduling, timetable management, exam management, result management, academic performance tracking, profile management, and role-based dashboards.",
    icon: FaGraduationCap,
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    image: "/assets/images/Portfolio/Project2.png",
  },
  {
    title: "Footwear Sales & Inventory Management System",
    category: "Academic Projects",
    description:
      "A a comprehensive Footwear Management System to streamline product inventory, sales, stock management, customer management, and order processing, providing an efficient solution for managing day-to-day footwear business operations.",
    icon: FaGraduationCap,
    technologies: ["Express.js", "React.js", "Node.js", "MongoDB"],
    image: "/assets/images/Portfolio/Project3.png",
  },
  {
    title: "MFX – Fitness & Personal Training Platform",
    category: "Business Website",
    description:
      "A modern fitness platform offering personal training, customized workout programs, online coaching, memberships, and fitness transformation services.",
    icon: FaGlobe,
    technologies: ["React.js", "Tailwind CSS"],
    image: "/assets/images/Portfolio/Project4.png",
    link: "https://www.mashoodfitness.com/",
  },
  {
    title: "147 Digital – Digital Marketing & Branding Website",
    category: "Business Website",
    description:
      "A modern, high-impact website developed for 147 Digital, designed to showcase their digital marketing, branding, content creation, and growth-focused services.",
    icon: FaGlobe,
    technologies: ["Next.js", "React.js", "Tailwind CSS"],
    image: "/assets/images/Portfolio/Project5.png",
    link: "https://147digitalsl.com/",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
        (project) => project.category === activeCategory
      );

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            OUR PORTFOLIO
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Work We're
            <span className="text-blue-600"> Proud Of</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore some of the websites, software solutions, and academic
            projects we've worked on for students, entrepreneurs, and
            businesses.
          </p>

        </div>

        {/* Category Filter */}

        <div className="mt-12 flex flex-wrap justify-center gap-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600"
                }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Projects */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >

                {/* Project Image */}

                <div className="relative h-60 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/50"></div>

                  {/* Icon */}

                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-blue-600 shadow-lg backdrop-blur">
                    <Icon className="text-xl" />
                  </div>

                </div>

                {/* Content */}

                <div className="p-7">

                  <span className="text-sm font-semibold text-blue-600">
                    {project.category}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>
                  {/* View Website Button */} 
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800"> 
                      View Website 
                      <FaExternalLinkAlt className="text-xs" /> 
                    </a>)}
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-16 text-center">

          <Link
            href="/portfolio"
            className="group inline-flex items-center rounded-xl bg-gray-900 px-7 py-4 font-semibold text-white transition hover:bg-blue-600"
          >
            Explore All Projects

            <FaArrowRight className="ml-3 transition group-hover:translate-x-1" />
          </Link>

        </div>

      </div>
    </section>
  );
}