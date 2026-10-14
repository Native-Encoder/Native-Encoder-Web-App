
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   THEME
------------------------------------------------------------------- */
const theme = {
  section: "bg-slate-50",
  eyebrow: "text-blue-600",
  heading: "text-slate-900",
  body: "text-slate-600",
  card: "bg-white border border-slate-200 hover:border-blue-500/40 hover:shadow-xl",
  pill: "bg-blue-50 text-blue-700",
  tabActive: "bg-blue-600 text-white shadow-lg shadow-blue-600/25",
  tabIdle:
    "bg-white text-slate-600 border border-slate-200 hover:border-blue-500 hover:text-blue-600",
  button: "bg-blue-600 text-white hover:bg-blue-700",
  accentGradient: "from-blue-600 to-indigo-600",
};

/* ------------------------------------------------------------------
   TYPES
------------------------------------------------------------------- */
type Platform =
  | "Facebook"
  | "Instagram"
  | "TikTok"
  | "LinkedIn"
  | "YouTube";

type ManagedPage = {
  name: string;
  industry: string;
  logo: string;
  platforms: {
    platform: Platform;
    url: string;
  }[];
  description: string;
  services: string[];
  followers?: string;
  growth?: string;
};

/* ------------------------------------------------------------------
   MANAGED PAGES
   Replace the example details with your actual clients.
   Store logos in public/assets/images/ManagedPages/
------------------------------------------------------------------- */
const managedPages: ManagedPage[] = [
  {
    name: "MJ Institute",
    industry: "Study Abroad",
    logo: "/assets/images/ManagedPages/page1.jpg",
    platforms: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100054367818580",
      },
    ],
    description:
      "End-to-end social media management, including content planning, creative designs, captions, and paid campaigns.",
    services: ["Branding", "Content Creation", "Post Design", "Meta Ads"],
  },
  {
    name: "ISPC Study Abroad",
    industry: "Study Abroad",
    logo: "/assets/images/ManagedPages/page2.jpg",
    platforms: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/ispcstudyabroad",
      },
    ],
    description:
      "Branded creatives, content calendars, and audience engagement strategies designed to build a student community.",
    services: ["Branding", "Content Creation", "Engagement"],
  },
  {
    name: "Deep Hybrid Motors",
    industry: "Automotive ",
    logo: "/assets/images/ManagedPages/page3.png",
    platforms: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/deephybridmotors",
      },
    ],
    description:
      "Short-form videos, product showcases, and promotional campaigns that help attract inquiries and drive sales.",
    services: ["Reels & Posts", "Product Shoots", "Promotions"],
  },
];

/* ------------------------------------------------------------------
   STATISTICS
   Update these values to match your actual results.
------------------------------------------------------------------- */
const stats = [
  {
    value: `${managedPages.length}+`,
    label: "Pages Managed",
  },
  {
    value: "50K+",
    label: "Combined Followers",
  },
  {
    value: "500+",
    label: "Posts Designed",
  },
  {
    value: "100%",
    label: "Client Focused",
  },
];

/* ------------------------------------------------------------------
   PLATFORM ICONS
------------------------------------------------------------------- */
const icons: Record<Platform, ReactNode> = {
  Facebook: (
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
  ),

  Instagram: (
    <path d="M12 2.2c3.2 0 3.58 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58 0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s0-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.2 12 2.2Zm0 4.66a5.14 5.14 0 1 0 0 10.28 5.14 5.14 0 0 0 0-10.28Zm0 8.47a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66Zm5.34-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
  ),

  TikTok: (
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.77.12V9.77a5.7 5.7 0 1 0 4.91 5.64V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.24-1.48Z" />
  ),

  LinkedIn: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  ),

  YouTube: (
    <path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.5 3.56 12 3.56 12 3.56s-7.5 0-9.38.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.13c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3 3 0 0 0 2.12-2.13A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z" />
  ),
};

function PlatformIcon({
  platform,
  className = "h-4 w-4",
}: {
  platform: Platform;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {icons[platform]}
    </svg>
  );
}

/* ------------------------------------------------------------------
   MANAGED PAGES SECTION
------------------------------------------------------------------- */
export default function ManagedPages() {
  const filters = useMemo<(Platform | "All")[]>(() => {
    const platforms = new Set<Platform>();

    managedPages.forEach((page) => {
      page.platforms.forEach(({ platform }) => {
        platforms.add(platform);
      });
    });

    return ["All", ...Array.from(platforms)];
  }, []);

  const [active, setActive] = useState<Platform | "All">("All");

  const visible =
    active === "All"
      ? managedPages
      : managedPages.filter((page) =>
          page.platforms.some(({ platform }) => platform === active)
        );

  return (
    <section
      id="digital-marketing"
      className={`py-20 md:py-28 ${theme.section}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.eyebrow}`}
          >
            Digital Marketing
          </p>

          <h2
            className={`mt-3 text-3xl font-bold md:text-4xl lg:text-5xl ${theme.heading}`}
          >
            Brands We Grow on Social Media
          </h2>

          <p className={`mt-5 text-base md:text-lg ${theme.body}`}>
            We manage social media pages for businesses across Sri Lanka, from
            content creation and branding to campaigns that build engaged
            audiences and support business growth.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl p-6 text-center transition ${theme.card}`}
            >
              <h3
                className={`bg-gradient-to-r ${theme.accentGradient} bg-clip-text text-3xl font-bold text-transparent md:text-4xl`}
              >
                {stat.value}
              </h3>

              <p className={`mt-1 text-sm font-medium ${theme.body}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Platform Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition ${
                active === filter ? theme.tabActive : theme.tabIdle
              }`}
            >
              {filter !== "All" && (
                <PlatformIcon platform={filter} />
              )}

              {filter}
            </button>
          ))}
        </div>

        {/* Client Cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((page) => (
            <article
              key={page.name}
              className={`group flex flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 ${theme.card}`}
            >
              {/* Card Header */}
              <div
                className={`relative bg-gradient-to-br ${theme.accentGradient} p-6`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-4 border-white/80 bg-white">
                    <Image
                      src={page.logo}
                      alt={`${page.name} logo`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                      {page.industry}
                    </span>

                    <h3 className="truncate text-lg font-bold">
                      {page.name}
                    </h3>

                    <div
                      className="mt-2 flex items-center gap-2"
                      aria-label={`Platforms: ${page.platforms
                        .map(({ platform }) => platform)
                        .join(", ")}`}
                    >
                      {page.platforms.map(({ platform }) => (
                        <PlatformIcon
                          key={platform}
                          platform={platform}
                          className="h-4 w-4 opacity-90"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Client Metrics */}
                {(page.followers || page.growth) && (
                  <div className="mt-5 grid grid-cols-2 gap-3 text-white">
                    {page.followers && (
                      <div className="rounded-xl bg-white/15 px-3 py-2 backdrop-blur">
                        <p className="text-lg font-bold">
                          {page.followers}
                        </p>
                        <p className="text-xs text-white/80">
                          Followers
                        </p>
                      </div>
                    )}

                    {page.growth && (
                      <div className="rounded-xl bg-white/15 px-3 py-2 backdrop-blur">
                        <p className="text-lg font-bold">
                          {page.growth.split(" ")[0]}
                        </p>
                        <p className="text-xs text-white/80">
                          {page.growth.split(" ").slice(1).join(" ")}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className={`text-sm leading-relaxed ${theme.body}`}>
                  {page.description}
                </p>

                {/* Services */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {page.services.map((service) => (
                    <span
                      key={service}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${theme.pill}`}
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Social Media Links */}
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {page.platforms.map(({ platform, url }) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${page.name} on ${platform}`}
                      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${theme.button}`}
                    >
                      <PlatformIcon platform={platform} />
                      View Page
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-14 text-center">
          <p className={`mb-4 ${theme.body}`}>
            Ready to grow your brand and reach the right audience?
          </p>

          <a
            href="https://wa.me/94716032454"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold transition ${theme.button}`}
          >
            Let&apos;s Grow Your Page
          </a>
        </div>
      </div>
    </section>
  );
}
