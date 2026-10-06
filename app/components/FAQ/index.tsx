"use client";

import { useState } from "react";
import {
  FaChevronDown,
  FaQuestionCircle,
} from "react-icons/fa";

const faqs = [
  {
    question: "What services does Native Encoder provide?",
    answer:
      "Native Encoder provides a range of academic and digital services including assignment writing, research and thesis support, final-year projects, programming assistance, website development, software development, and digital solutions for businesses.",
  },
  {
    question: "Can you help with final-year projects?",
    answer:
      "Yes. We provide guidance and technical assistance for final-year projects, including project planning, research, system analysis, UI/UX design, development, database implementation, testing, documentation, and project preparation.",
  },
  {
    question: "Do you develop websites for businesses?",
    answer:
      "Yes. We design and develop modern, responsive websites for businesses, personal brands, organizations, and other professional requirements. Solutions can be customized according to your brand, functionality, and business goals.",
  },
  {
    question: "Can I request a custom software project?",
    answer:
      "Absolutely. We can develop custom software solutions based on your specific requirements. After discussing your idea, we can recommend suitable technologies, features, architecture, and an appropriate development approach.",
  },
  {
    question: "How do I start a project with Native Encoder?",
    answer:
      "Simply contact us through WhatsApp, Messenger, or another available communication channel. Share your requirements, deadline, and any relevant documents or references. Our team will review your request and guide you through the next steps.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "The timeframe depends on the type, size, and complexity of the project. Smaller assignments may require less time, while websites, software projects, research projects, and final-year projects can take longer. We provide an estimated timeline after understanding your requirements.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes. We encourage feedback throughout the project. Depending on the service and project scope, reasonable revisions can be discussed to ensure the final result meets the agreed requirements.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes. We provide after-service support for applicable projects. If you need assistance after delivery, you can contact our team and we will help you with the relevant issues or updates.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            <FaQuestionCircle />
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Frequently Asked
            <span className="text-blue-600"> Questions</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions about our services or how we work?
            Find answers to some of the most common questions below.
          </p>

        </div>

        {/* FAQ */}

        <div className="mx-auto mt-16 max-w-4xl space-y-4">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-500 bg-blue-50/50 shadow-lg"
                    : "border-gray-200 bg-white hover:border-blue-300"
                }`}
              >

                {/* Question */}

                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left"
                  aria-expanded={isOpen}
                >

                  <div className="flex items-center gap-4">

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>

                  </div>

                  <FaChevronDown
                    className={`shrink-0 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {/* Answer */}

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="border-t border-blue-100 px-6 pb-6 pt-5 pl-[76px]">

                      <p className="leading-8 text-gray-600">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white shadow-xl md:p-10">

          <h3 className="text-2xl font-bold md:text-3xl">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            We're happy to discuss your requirements and help you find the
            right solution.
          </p>

          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Talk to Us
          </a>

        </div>

      </div>
    </section>
  );
}