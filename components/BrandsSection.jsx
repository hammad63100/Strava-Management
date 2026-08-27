"use client";

import React from "react";
import FAQSection from "./FAQSection";
import "./BrandsSection.css";

export default function BrandsSection() {
  const basePath =
    process.env.NODE_ENV === "production" ? "/Strava-Management" : "";

  const interimBlocks = [
    {
      title: "Publishing Discipline",
      text: "We only publish a result once every figure behind it is verified — that discipline applies to this page too. Verified case studies are in progress and will appear here.",
    },
    {
      title: "Direct Account Inquiry",
      text: "In the meantime, ask directly. On a call, an account analyst can walk you through real outcomes we haven't published yet.",
    },
    {
      title: "Deal Sheet Walkthrough",
      text: "Review verified Seller Central reporting, contribution margins, and operating improvements directly with our team.",
    },
  ];

  const portfolioMetrics = [
    "Year-over-year profit growth",
    "Contribution-margin improvement",
    "Reduction in inefficient acquisition spend",
    "Revenue expansion, with stated time period",
    "Successful launch with break-even timeline",
    "Verified exit value",
  ];

  return (
    <div className="brands-section relative pt-[24px] lg:pt-[40px]">
      {/* Portfolio Section */}
      <div className="brands-work" style={{ color: "#5A2132" }}>
        {/* Top Header Logo */}
        <div className="mb-16 sm:mb-20 lg:mb-28">
          <img
            src={`${basePath}/images/footerlogo.png`}
            alt="Strava Management"
            style={{
              height: "76px",
              width: "auto",
              maxHeight: "88px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {/* Portfolio Intro Header - Matching Site Design System */}
        <div className="grid gap-[15px] lg:gap-x-[60px] lg:grid-cols-2 mt-4 lg:mt-6 mb-12 pb-8 border-b border-[#5A2132]/25">
          <h1
            className="h2 lg:col-start-1 text-left uppercase text-[46px] lg:text-[76px] xl:text-[88px] font-black tracking-tight leading-none"
            style={{ color: "#5A2132", fontFamily: "var(--font-serif)" }}
          >
            PORTFOLIO
          </h1>

          <div
            className="lg:col-start-2 flex flex-col gap-4 font-bold justify-end"
            style={{ color: "#5A2132" }}
          >
            <div>
              <p
                className="text-[20px] lg:text-[26px] xl:text-[30px] font-[800] leading-snug mb-3 text-left"
                style={{ color: "#5A2132" }}
              >
                Select Operating Results
              </p>
              <p
                className="normal-case text-[15px] lg:text-[17px] font-normal leading-[1.65] mb-0 text-left opacity-90"
                style={{ color: "#5A2132" }}
              >
                Presented as a deal sheet — verified numbers, brief context. We
                look past revenue: profit quality, capital efficiency, and how
                transferable the business has become.
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="brands-grid">
          {/* Card 1: Proof, Not Promises */}
          <div className="portfolio-card-asymmetric group">
            {/* Massive Background Watermark Number */}
            <div className="portfolio-bg-watermark">01</div>

            {/* Corner SVG Brackets */}
            <span className="portfolio-corner-brackets">
              <svg width="20" height="20" viewBox="0 0 19 19" fill="none">
                <path
                  d="M0 18L14 18M18 14L18 0"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
              <svg width="20" height="20" viewBox="0 0 19 19" fill="none">
                <path
                  d="M19 18L5 18M1 14L1 0"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
              <svg width="20" height="20" viewBox="0 0 19 19" fill="none">
                <path
                  d="M0 1L14 1M18 5L18 19"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
              <svg width="20" height="20" viewBox="0 0 19 19" fill="none">
                <path
                  d="M19 1L5 1M1 5L1 19"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
            </span>

            {/* Top-Left Section: Headings (Anchored at very top) */}
            <div className="portfolio-top-left z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="portfolio-badge">
                  STATUS: CASE STUDIES IN PROGRESS
                </span>
              </div>
              <h3 className="portfolio-card-heading">Proof, Not Promises.</h3>
              <p className="text-[15px] sm:text-[17px] lg:text-[18px] font-medium normal-case text-[#E6DEC8]/90 mt-3 tracking-wide max-w-2xl leading-[1.65]">
                We only publish a result once every figure behind it is verified
                — that discipline applies to this page too.
              </p>
            </div>

            {/* Bottom-Right Section: Content (Matching Cards 2, 3, 4 style) */}
            <div className="portfolio-bottom-right lg:max-w-5xl z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
                {interimBlocks.map((item, idx) => (
                  <div key={idx} className="deal-sheet-field-box">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-3 h-3 rounded-full bg-[#E6DEC8]" />
                      <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-[800] text-[#E6DEC8] tracking-wide">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[15px] sm:text-[16px] lg:text-[17px] font-[500] text-[#E6DEC8]/95 leading-[1.65]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Recommended Portfolio Metrics */}
          <div className="portfolio-card-asymmetric group">
            <div className="portfolio-bg-watermark">02</div>

            <span className="portfolio-corner-brackets">
              <svg width="20" height="20" viewBox="0 0 19 19" fill="none">
                <path
                  d="M0 18L14 18M18 14L18 0"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
              <svg width="20" height="20" viewBox="0 0 19 19" fill="none">
                <path
                  d="M19 18L5 18M1 14L1 0"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
              <svg width="20" height="20" viewBox="0 0 19 19" fill="none">
                <path
                  d="M0 1L14 1M18 5L18 19"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
              <svg width="20" height="20" viewBox="0 0 19 19" fill="none">
                <path
                  d="M19 1L5 1M1 5L1 19"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
            </span>

            {/* Top-Left Section */}
            <div className="portfolio-top-left z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="portfolio-badge">BENCHMARK METRICS</span>
              </div>
              <h3 className="portfolio-card-heading">
                Recommended Portfolio Metrics
              </h3>
              <p className="text-[15px] sm:text-[17px] lg:text-[18px] font-medium normal-case text-[#E6DEC8]/90 mt-3 tracking-wide max-w-2xl leading-[1.65]">
                Core commercial dimensions evaluated across verified brand
                partnerships.
              </p>
            </div>

            {/* Bottom-Right Section */}
            <div className="portfolio-bottom-right lg:max-w-5xl z-10 flex flex-col items-start lg:items-end">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
                {portfolioMetrics.map((metric, idx) => (
                  <div key={idx} className="metric-pill-box">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-[#E6DEC8]" />
                      <span className="text-[18px] sm:text-[20px] lg:text-[22px] font-[800] text-[#E6DEC8] leading-snug">
                        {metric}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions Section */}
        <FAQSection />
      </div>
    </div>
  );
}
