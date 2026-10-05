"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

const testimonials = [
  {
    image: "/assets/images/Testimonials/Feedback1.jpeg",
    category: "Academic Project",
    position: "center 72%",
  },
  {
    image: "/assets/images/Testimonials/Feedback2.jpeg",
    category: "Academic Support",
    position: "center 70%",
  },
  {
    image: "/assets/images/Testimonials/Feedback3.jpeg",
    category: "Academic Project",
    position: "center 70%",
  },
  {
    image: "/assets/images/Testimonials/Feedback4.jpeg",
    category: "Academic Project",
    position: "center 72%",
  },
    {
    image: "/assets/images/Testimonials/Feedback5.jpeg",
    category: "Academic Project",
    position: "center 65%",
  },
  {
    image: "/assets/images/Testimonials/Feedback6.jpg",
    category: "Academic Support",
    position: "center 76%",
  },
  {
    image: "/assets/images/Testimonials/Feedback7.jpg",
    category: "Academic Support",
    position: "center 80%",
  },
  {
    image: "/assets/images/Testimonials/Feedback8.jpg",
    category: "Academic Support",
    position: "center 68%",
  },
  {
    image: "/assets/images/Testimonials/Feedback9.jpg",
    category: "Academic Support",
    position: "center 70%",
  },
  {
    image: "/assets/images/Testimonials/Feedback10.jpg",
    category: "Academic Support",
    position: "center 76%",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const testimonial = testimonials[active];

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
            Real feedback from students and businesses who trusted
            Native Encoder with their projects.
          </p>

        </div>

        {/* Feedback Carousel */}
        <div className="mx-auto mt-16 max-w-4xl">

          <div className="relative">

            {/* Feedback Image */}
            <div className="relative mx-auto aspect-square w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-xl">

              <Image
                key={testimonial.image}
                src={testimonial.image}
                alt="Native Encoder client feedback"
                fill
                priority
                className="object-cover"
                style={{
                  objectPosition: testimonial.position,
                }}
              />

              {/* Left Button */}
              <button
                onClick={previous}
                aria-label="Previous feedback"
                className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg backdrop-blur transition hover:bg-blue-600 hover:text-white"
              >
                <FaChevronLeft />
              </button>

              {/* Right Button */}
              <button
                onClick={next}
                aria-label="Next feedback"
                className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg backdrop-blur transition hover:bg-blue-600 hover:text-white"
              >
                <FaChevronRight />
              </button>

            </div>

            {/* Feedback Information */}
            <div className="mt-6 flex items-center justify-between px-2">

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  {testimonial.category}
                </p>

                <div className="mt-2 flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className="text-sm text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <div className="text-sm font-medium text-gray-500">
                {active + 1} / {testimonials.length}
              </div>

            </div>

          </div>

          {/* Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                aria-label={`View feedback ${index + 1}`}
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

          {/* Rating */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className="text-yellow-400"
                />
              ))}
            </div>

            <p className="mt-3 font-semibold text-gray-900">
              Excellent Service
            </p>
          </div>

          {/* Client Focus */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">
              100%
            </h3>

            <p className="mt-2 font-semibold text-gray-900">
              Client Focused
            </p>
          </div>

          {/* Experience */}
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