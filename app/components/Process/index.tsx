"use client";

import {
    FaComments,
    FaClipboardList,
    FaPenNib,
    FaLaptopCode,
    FaCheckCircle,
    FaRocket,
} from "react-icons/fa";

const process = [
    {
        icon: FaComments,
        title: "Consult",
        description:
            "Discuss your requirements and objectives with our experts.",
    },
    {
        icon: FaClipboardList,
        title: "Planning",
        description:
            "We prepare the roadmap, timeline and execution strategy.",
    },
    {
        icon: FaPenNib,
        title: "Design",
        description:
            "Design UI, research, architecture and prepare everything.",
    },
    {
        icon: FaLaptopCode,
        title: "Build",
        description:
            "Develop your solution using modern technologies.",
    },
    {
        icon: FaCheckCircle,
        title: "Review",
        description:
            "Testing, revisions and quality assurance before delivery.",
    },
    {
        icon: FaRocket,
        title: "Launch",
        description:
            "Deliver your project with continuous support.",
    },
];

export default function Process() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                        HOW IT WORKS
                    </span>

                    <h2 className="mt-6 text-5xl font-bold text-gray-900">
                        Simple Process.
                        <span className="text-blue-600"> Exceptional Results.</span>
                    </h2>

                    <p className="mt-6 text-lg text-gray-600">
                        From the first conversation to the final delivery, we ensure every
                        step is transparent, efficient and focused on quality.
                    </p>

                </div>

                {/* Timeline */}

                <div className="relative mt-24">

                    {/* Line */}

                    <div className="absolute left-0 right-0 top-10 hidden h-1 rounded-full bg-blue-200 lg:block"></div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">

                        {process.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={index}
                                    className="group relative text-center"
                                >

                                    {/* Circle */}

                                    <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg ring-8 ring-gray-50 transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-blue-600 group-hover:shadow-2xl">

                                        <Icon className="text-3xl text-blue-600 transition group-hover:scale-110 group-hover:text-white" />

                                    </div>

                                    {/* Number */}

                                    <div className="absolute left-1/2 top-0 z-20 flex h-8 w-8 -translate-x-1/2 -translate-y-4 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                                        {index + 1}
                                    </div>

                                    {/* Title */}

                                    <h3 className="mt-6 text-xl font-bold text-gray-900">
                                        {item.title}
                                    </h3>

                                    {/* Card */}

                                    <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-blue-500 group-hover:shadow-xl">

                                        <p className="text-sm leading-7 text-gray-600">
                                            {item.description}
                                        </p>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>
        </section>
    );
}