"use client";

import {
  FaUserGraduate,
  FaLaptopCode,
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaUserGraduate,
    title: "Academic Excellence",
    description:
      "Professional guidance for assignments, research, thesis writing, and final-year projects.",
  },
  {
    icon: FaLaptopCode,
    title: "Industry-Level Development",
    description:
      "Modern websites and software solutions built using the latest technologies.",
  },
  {
    icon: FaShieldAlt,
    title: "Quality & Originality",
    description:
      "Every project is completed with attention to detail, quality assurance, and originality.",
  },
  {
    icon: FaClock,
    title: "On-Time Delivery",
    description:
      "We value your deadlines and ensure every project is delivered on schedule.",
  },
  {
    icon: FaHeadset,
    title: "Dedicated Support",
    description:
      "Our team is always available to answer questions and provide continuous assistance.",
  },
  {
    icon: FaLightbulb,
    title: "Innovative Solutions",
    description:
      "Creative, practical, and future-ready solutions tailored to every client.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              WHY CHOOSE US
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Your Trusted Partner for Academic & Digital Success
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine technical expertise, academic knowledge, and creative
              thinking to deliver reliable solutions for students and businesses.
              Our commitment to quality, innovation, and customer satisfaction
              makes Native Encoder the preferred choice.
            </p>

            <div className="mt-10 space-y-6">

              {reasons.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-5 rounded-2xl border border-gray-200 p-5 transition hover:border-blue-500 hover:shadow-lg"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                      <Icon className="text-2xl text-blue-600" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-gray-600 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-600 p-10 text-white shadow-2xl">

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                OUR COMMITMENT
              </span>

              <h3 className="mt-6 text-4xl font-bold">
                Delivering Excellence,
                Every Step of the Way
              </h3>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                We don't just complete projects we build long-term
                relationships by delivering quality work, maintaining
                transparency, and providing exceptional customer support.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <FaCheckCircle className="text-xl text-green-300" />
                  <span>Professional & Experienced Team</span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <FaCheckCircle className="text-xl text-green-300" />
                  <span>Affordable & Transparent Pricing</span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <FaCheckCircle className="text-xl text-green-300" />
                  <span>100% Client Satisfaction Focus</span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <FaCheckCircle className="text-xl text-green-300" />
                  <span>Reliable After-Service Support</span>
                </div>

              </div>

              {/* Bottom Card */}

              <div className="mt-10 rounded-2xl bg-white p-6 text-center text-gray-900 shadow-xl">

                <h4 className="text-5xl font-extrabold text-blue-600">
                  4+
                </h4>

                <p className="mt-2 text-lg font-semibold">
                  Years of Trusted Service
                </p>

                <p className="mt-3 text-sm text-gray-600">
                  Helping students achieve academic excellence and businesses
                  build their digital future.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}