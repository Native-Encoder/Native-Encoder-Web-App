"use client";

import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaArrowRight,
  FaCheckCircle,
  FaComments,
} from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      {/* Decorative Background */}

      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"></div>

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main CTA */}

        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300 backdrop-blur">
            <FaComments />
            LET'S WORK TOGETHER
          </div>

          {/* Heading */}

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">

            Have an Idea?

            <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Let's Make It Happen.
            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Whether you need academic assistance, a final-year project,
            a professional website, or a custom software solution,
            Native Encoder is ready to help turn your ideas into reality.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            {/* WhatsApp */}

            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-green-500 px-7 py-4 font-semibold text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-xl"
            >
              <FaWhatsapp className="text-xl" />

              Start a Conversation

              <FaArrowRight className="text-sm transition group-hover:translate-x-1" />
            </a>

            {/* Messenger */}

            <a
              href="https://m.me/YOUR_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <FaFacebookMessenger className="text-xl text-blue-400" />

              Message Us

              <FaArrowRight className="text-sm transition group-hover:translate-x-1" />
            </a>

          </div>

        </div>

        {/* Trust Indicators */}

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 border-t border-white/10 pt-10 sm:grid-cols-3">

          <div className="flex items-center justify-center gap-3 text-gray-300">
            <FaCheckCircle className="text-green-400" />
            <span>Professional Service</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-gray-300">
            <FaCheckCircle className="text-green-400" />
            <span>On-Time Delivery</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-gray-300">
            <FaCheckCircle className="text-green-400" />
            <span>Dedicated Support</span>
          </div>

        </div>

        {/* Bottom Text */}

        <div className="mt-12 text-center">

          <p className="text-sm text-gray-500">
            Your next great idea could start with a simple conversation.
          </p>

        </div>

      </div>

    </section>
  );
}