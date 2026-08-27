"use client";

import React, { useState, useEffect } from "react";

export default function TeamSection() {
  const basePath =
    process.env.NODE_ENV === "production" ? "/Strava-Management" : "";

  // Generate team members 1 through 10
  const activists = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Team Member ${i + 1}`,
    img: `${basePath}/images/${i + 1}.jpeg`,
    hoverImg: `${basePath}/images/${i + 1}.webp`,
  }));

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <section
      className="team-section-custom overflow-hidden"
      style={{ backgroundColor: "#E6DEC8", color: "#5A2132" }}
    >
      <style>{`
        .team-section-custom {
          padding-top: 40px;
          padding-bottom: 50px;
          margin: 0;
        }
        @media (min-width: 1024px) {
          .team-section-custom {
            padding-top: 60px;
            padding-bottom: 70px;
            margin: 0;
          }
        }
      `}</style>

      <div className="container mx-auto px-4 max-w-[1600px]">
        {/* Section Heading */}
        <div className="mb-6 lg:mb-8 text-left">
          <h2
            className="h2 uppercase font-bold"
            style={{ color: "#5A2132", fontFamily: "var(--font-serif)" }}
          >
            MEET OUR TEAM
          </h2>
        </div>

        {/* Responsive grid: 10 columns desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-3 sm:gap-4 md:gap-5 mt-8 mb-16 lg:mt-12 lg:mb-20">
          {activists.map((member, i) => {
            const isActive = hoveredIndex === i;

            return (
              <div
                key={i}
                className="group relative cursor-pointer block overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(-1)}
                title={member.name}
                style={{ aspectRatio: "3 / 4", backgroundColor: "#E6DEC8" }}
              >
                {/* Static JPEG Image */}
                <img
                  src={member.img}
                  alt={member.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"}`}
                  loading="lazy"
                />

                {/* Animated WEBP Image */}
                <img
                  src={member.hoverImg}
                  alt={`${member.name} animated`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                  loading="lazy"
                />

                {/* Preload WEBP image to avoid flashing on hover */}
                <link rel="preload" as="image" href={member.hoverImg} />

                {/* Corner brackets - Imported from Hero Section */}
                <span
                  className={` absolute inset-0 m-4 grid grid-cols-[auto_auto] justify-between content-between pointer-events-none transition-all duration-300 z-20 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-[1.05] "}`}
                  style={{ color: "#5A2132" }}
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 18L14 18M18 14L18 0"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 18L5 18M1 14L1 0"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1L14 1M18 5L18 19"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 1L5 1M1 5L1 19"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
