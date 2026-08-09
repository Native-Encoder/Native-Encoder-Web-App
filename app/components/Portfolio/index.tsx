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
  "Web Development",
  "Software Projects",
  "Academic Projects",
];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A modern e-commerce platform designed with a seamless shopping experience, product management and secure customer interactions.",
    icon: FaGlobe,
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/portfolio/ecommerce.jpg",
  },
  {
    title: "Business Management System",
    category: "Software Projects",
    description:
      "A complete business management solution designed to simplify operations, data management and reporting.",
    icon: FaDatabase,
    technologies: [".NET", "SQL Server", "React"],
    image: "/portfolio/business-system.jpg",
  },
  {
    title: "Student Management System",
    category: "Academic Projects",
    description:
      "A comprehensive student management platform developed to manage student records, classes and academic activities.",
    icon: FaGraduationCap,
    technologies: ["Laravel", "MySQL", "Blade"],
    image: "/portfolio/student-system.jpg",
  },
  {
    title: "Responsive Business Website",
    category: "Web Development",
    description:
      "A modern responsive website designed to establish a strong online presence and improve customer engagement.",
    icon: FaLaptopCode,
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/portfolio/business-website.jpg",
  },
  {
    title: "Mobile Application",
    category: "Software Projects",
    description:
      "A user-friendly mobile application developed with a focus on performance, usability and modern interface design.",
    icon: FaMobileAlt,
    technologies: ["Flutter", "Firebase", "REST API"],
    image: "/portfolio/mobile-app.jpg",
  },
  {
    title: "Research & Final Year Project",
    category: "Academic Projects",
    description:
      "A complete academic project covering research, system analysis, implementation and technical documentation.",
    icon: FaGraduationCap,
    technologies: ["Research", "System Design", "Development"],
    image: "/portfolio/research-project.jpg",
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
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
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

                  {/* View Button */}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">

                    <button className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-xl transition hover:bg-blue-600 hover:text-white">
                      View Project
                      <FaExternalLinkAlt className="text-xs" />
                    </button>

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