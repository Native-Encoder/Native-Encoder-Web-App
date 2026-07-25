"use client";

import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebookMessenger,
  FaPhone,
  FaEnvelope,
  FaTiktok,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Blur */}
      <div className="absolute -top-44 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[140px]" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-sky-500/20 blur-[120px]" />

      <div className="relative z-10">
        {/* ================= CTA ================= */}
        <div className="mx-auto max-w-7xl px-5 pt-16">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 p-10 shadow-2xl">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div>
                <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
                  LET'S WORK TOGETHER
                </span>

                <h2 className="mt-5 text-3xl font-bold md:text-5xl">
                  Ready to Start
                  <br />
                  Your Next Project?
                </h2>

                <p className="mt-4 max-w-xl text-white/80">
                  Whether you're a student or a business, Native Encoder is
                  here to turn your ideas into reality.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur transition hover:bg-white/20"
                >
                  <FaWhatsapp className="text-2xl text-green-400" />
                  WhatsApp
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur transition hover:bg-white/20"
                >
                  <FaFacebookMessenger className="text-2xl text-blue-300" />
                  Messenger
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Main Footer ================= */}
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Company */}
            <div className="lg:col-span-5">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/assets/images/native-encoder-logo-white.png"
                  width={60}
                  height={60}
                  alt="Native Encoder"
                />

                <span className="text-3xl font-bold">
                  Native <span className="text-sky-400">Encoder</span>
                </span>
              </Link>

              <p className="mt-6 max-w-md leading-8 text-slate-400">
                We empower students, researchers, startups, and businesses with
                professional academic assistance, software development, and
                innovative digital solutions.
              </p>

              {/* Social Icons */}
              <div className="mt-8 flex gap-4">
                {[FaFacebookF, FaTiktok, FaYoutube, FaLinkedinIn].map(
                  (Icon, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:scale-110 hover:border-sky-500 hover:bg-sky-500 hover:text-white"
                    >
                      <Icon />
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>

              <ul className="space-y-4 text-slate-400">
                <li>
                  <Link href="#home" className="hover:text-sky-400">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="#services" className="hover:text-sky-400">
                    Services
                  </Link>
                </li>

                <li>
                  <Link href="#portfolio" className="hover:text-sky-400">
                    Portfolio
                  </Link>
                </li>

                <li>
                  <Link href="#testimonials" className="hover:text-sky-400">
                    Testimonials
                  </Link>
                </li>

                <li>
                  <Link href="#contact" className="hover:text-sky-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="mb-6 text-xl font-semibold">Services</h3>

              <ul className="space-y-4 text-slate-400">
                <li className="hover:text-sky-400 cursor-pointer">
                  Assignment Writing
                </li>

                <li className="hover:text-sky-400 cursor-pointer">
                  Research & Thesis
                </li>

                <li className="hover:text-sky-400 cursor-pointer">
                  Software Development
                </li>

                <li className="hover:text-sky-400 cursor-pointer">
                  Business Websites
                </li>

                <li className="hover:text-sky-400 cursor-pointer">
                  Social Media Management
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h3 className="mb-6 text-xl font-semibold">Contact</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-sky-500/20 p-3 text-sky-400">
                    <FaPhone />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="text-slate-300">+94 71 603 2454</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-purple-500/20 p-3 text-purple-400">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-slate-300">
                      info@nativeencoder.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-indigo-500/20 p-3 text-indigo-400">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="text-slate-300">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-slate-800 pt-8 md:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Native Encoder. All rights reserved.
            </p>

            <div className="flex gap-8 text-sm text-slate-500">
              <Link href="/privacy-policy" className="hover:text-sky-400">
                Privacy Policy
              </Link>

              <Link href="/terms-and-conditions" className="hover:text-sky-400">
                Terms & Conditions
              </Link>
            </div>

            <p className="text-sm text-slate-500">
              Designed with ❤️ by{" "}
              <span className="text-sky-400">Native Encoder</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}