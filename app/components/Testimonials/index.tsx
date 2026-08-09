"use client";

import { useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Student Client",
    role: "University Undergraduate",
    category: "Academic",
    icon: FaGraduationCap,
    message:
      "Native Encoder helped me throughout my final-year project. Their guidance, technical support, and attention to detail made the entire process much easier. I really appreciate their professionalism and support.",
  },
  {
    name: "Business Client",
    role: "Business Owner",
    category: "Business",
    icon: FaBriefcase,
    message:
      "The team understood exactly what we needed for our business website. The final result was modern, professional, and easy to use. Communication was excellent throughout the project.",
  },
  {
    name: "Student Client",
    role: "University Student",
    category: "Academic",
    icon: FaGraduationCap,
    message:
      "I received excellent support for my research project. Everything was explained clearly and delivered according to the requirements. Native Encoder is definitely a team I would recommend.",
  },
  {
    name: "Business Client",
    role: "Entrepreneur",
    category: "Business",
    icon: FaBriefcase,
    message:
      "From the initial discussion to the final delivery, the team was very professional. They created a solution that matched our requirements perfectly and provided great after-service support.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const testimonial = testimonials[active];
  const Icon = testimonial.icon;

  const previous = () => {
    setActive((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const next = () => {
    setActive((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            CLIENT FEEDBACK
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            What Our
            <span className="text-blue-600"> Clients Say</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't just take our word for it. Here's what students and
            businesses say about their experience with Native Encoder.
          </p>

        </div>

        {/* Testimonial */}

        <div className="mx-auto mt-16 max-w-5xl">

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-8 shadow-2xl md:p-12">

            {/* Decorative Quote */}

            <FaQuoteLeft className="absolute right-10 top-8 text-8xl text-white/10" />

            <div className="relative z-10">

              {/* Category */}

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                  <Icon className="text-xl text-white" />
                </div>

                <div>

                  <p className="text-sm font-semibold text-blue-100">
                    {testimonial.category}
                  </p>

                  <div className="mt-1 flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className="text-sm text-yellow-300"
                      />
                    ))}
                  </div>

                </div>

              </div>

              {/* Quote */}

              <blockquote className="mt-10 max-w-4xl text-2xl font-medium leading-relaxed text-white md:text-3xl">
                “{testimonial.message}”
              </blockquote>

              {/* Client */}

              <div className="mt-10 flex items-center justify-between">

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-blue-100">
                    {testimonial.role}
                  </p>
                </div>

                {/* Navigation */}

                <div className="flex gap-3">

                  <button
                    onClick={previous}
                    aria-label="Previous testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white hover:text-blue-600"
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white hover:text-blue-600"
                  >
                    <FaChevronRight />
                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* Indicators */}

          <div className="mt-8 flex justify-center gap-2">

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-8 bg-blue-600"
                    : "w-2.5 bg-gray-300 hover:bg-blue-300"
                }`}
              />
            ))}

          </div>

        </div>

        {/* Trust Stats */}

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
            </div>

            <p className="mt-3 font-semibold text-gray-900">
              Excellent Service
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">
              100%
            </h3>

            <p className="mt-2 font-semibold text-gray-900">
              Client Focused
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">
              3+
            </h3>

            <p className="mt-2 font-semibold text-gray-900">
              Years of Experience
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}