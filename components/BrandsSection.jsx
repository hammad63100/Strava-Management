"use client";

import React from "react";
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

  const tombstoneFields = [
    {
      field: "Category",
      description:
        'Product category. Can stay generic ("Home & Kitchen") if the brand needs anonymity.',
    },
    {
      field: "Founder Profile",
      description:
        'Optional. E.g. "First-time founder, non-US passport, US-based." Published only with explicit sign-off.',
    },
    {
      field: "Mandate",
      description:
        'Which phase(s) we ran — e.g. "Market Selection, Activation & Stewardship."',
    },
    {
      field: "Result",
      description:
        "One verified, specific, time-bound outcome. No ranges, no rounding up.",
    },
    {
      field: "Timeframe",
      description: "The period the result covers — start to finish.",
    },
    {
      field: "Verification Note",
      description:
        'Source of the number, e.g. "Verified via Seller Central reporting." Kept on file for audit.',
    },
  ];

  const caseStudyChecklist = [
    {
      title: "Written Permission",
      text: "Signed permission from the founder-partner to publish, and whether the brand name can be shown or must stay confidential.",
    },
    {
      title: "Raw Source Data",
      text: "The verified number itself, plus the raw source — a Seller Central screenshot, statement, or official report.",
    },
    {
      title: "Exact Time Horizon",
      text: "The exact start and end date the number covers — no fuzzy timeframes or rounded periods.",
    },
    {
      title: "Operational Mandate",
      text: "One line on what Strava's active mandate and governance scope was during that period.",
    },
    {
      title: "Attributed Quote",
      text: "Optional short attributed quote from the founder — adds authenticity without breaking the deal-sheet tone.",
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
    <div className="brands-section">
      {/* Top Header Section */}
      <div
        className="brands-hero relative container"
        style={{ color: "#5A2132" }}
      >
        {/* Top Header Container with Wordmark and SVG Corner Brackets matching Agency Hero */}
        <div className="absolute my-[15px] lg:my-[35px] inset-0 z-10 pointer-events-none">
          <div
            className="pointer-events-none absolute"
            style={{
              top: "0px",
              left: "0px",
              display: "flex",
              alignItems: "center",
              paddingTop: "0px",
            }}
          >
            <img
              src={`${basePath}/images/footerlogo.png`}
              alt="Strava Management"
              style={{
                height: "52px",
                width: "auto",
                maxHeight: "60px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          <span
            className="absolute inset-0 grid grid-cols-[auto_auto] justify-between content-between pointer-events-none"
            style={{ color: "#5A2132" }}
          >
            <div style={{ width: "19px", height: "19px", opacity: 0 }} />
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

        <h1 className="brands-headline" style={{ color: "#5A2132" }}>
          THE ERA <br /> OF BRANDS <br /> IN MOTION <br /> HAS ARRIVED.
        </h1>

        <div className="brands-mission" style={{ color: "#5A2132" }}>
          <p style={{ color: "#5A2132" }}>
            Establishing agile <br />
            and responsible brands <br />
            for lasting success.
          </p>
          <p style={{ color: "#5A2132" }}>
            Energizing them constantly <br />
            to face today's challenges.
          </p>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="brands-work" style={{ color: "#5A2132" }}>
        {/* Portfolio Intro Header - Matching Site Design System */}
        <div className="grid gap-[15px] lg:gap-x-[60px] lg:grid-cols-2 my-12 pb-8 border-b border-[#5A2132]/25">
          <h2
            className="h2 lg:col-start-1 text-left uppercase text-[46px] lg:text-[76px] xl:text-[88px] font-black tracking-tight leading-none"
            style={{ color: "#5A2132", fontFamily: "var(--font-serif)" }}
          >
            PORTFOLIO
          </h2>

          <div
            className="lg:col-start-2 flex flex-col gap-4 font-bold justify-end"
            style={{ color: "#5A2132" }}
          >
            <div>
              <p
                className="uppercase text-[22px] lg:text-[30px] xl:text-[34px] font-[900] leading-snug mb-3 text-left"
                style={{ color: "#5A2132" }}
              >
                Select Operating Results.
              </p>
              <p
                className="normal-case text-[16px] lg:text-[20px] font-medium leading-relaxed mb-0 text-left opacity-90"
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
              <p className="text-[17px] sm:text-[20px] lg:text-[22px] font-semibold normal-case text-[#E6DEC8]/90 mt-3 tracking-wide max-w-2xl leading-snug">
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
                      <h4 className="text-[20px] sm:text-[23px] lg:text-[26px] font-[900] uppercase text-[#E6DEC8] tracking-wide">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-[800] text-[#E6DEC8]/95 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Tombstone Deal Sheet Architecture */}
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

            {/* Top-Left Section: Headings */}
            <div className="portfolio-top-left z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="portfolio-badge">
                  TOMBSTONE FORMAT — WHEN REAL DATA LANDS
                </span>
              </div>
              <h3 className="portfolio-card-heading">
                Deal Sheet Architecture
              </h3>
              <p className="text-[17px] sm:text-[20px] lg:text-[22px] font-semibold normal-case text-[#E6DEC8]/90 mt-3 tracking-wide max-w-2xl leading-snug">
                Kept close to the original template, with one addition: a
                founder-profile line to build authentic, relatable trust.
              </p>
            </div>

            {/* Bottom-Right Section: Field Grid */}
            <div className="portfolio-bottom-right lg:max-w-5xl z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
                {tombstoneFields.map((item, idx) => (
                  <div key={idx} className="deal-sheet-field-box">
                    <h4 className="text-[20px] sm:text-[24px] lg:text-[27px] font-[900] uppercase text-[#E6DEC8] tracking-wide mb-2">
                      {item.field}
                    </h4>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-[800] text-[#E6DEC8]/95 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: What to Send Us Per Case Study */}
          <div className="portfolio-card-asymmetric group">
            <div className="portfolio-bg-watermark">03</div>

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
                <span className="portfolio-badge">
                  OPERATIONAL GOVERNANCE & PROTOCOL
                </span>
              </div>
              <h3 className="portfolio-card-heading">
                What to Send Us Per Case Study
              </h3>
              <p className="text-[17px] sm:text-[20px] lg:text-[22px] font-semibold normal-case text-[#E6DEC8]/90 mt-3 tracking-wide max-w-2xl leading-snug">
                Strict audit checklist required before any commercial figure is
                published to the deal sheet.
              </p>
            </div>

            {/* Bottom-Right Section */}
            <div className="portfolio-bottom-right lg:max-w-5xl z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
                {caseStudyChecklist.map((item, idx) => (
                  <div key={idx} className="deal-sheet-field-box">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-3 h-3 rounded-full bg-[#E6DEC8]" />
                      <h4 className="text-[20px] sm:text-[23px] lg:text-[26px] font-[900] uppercase text-[#E6DEC8] tracking-wide">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-[800] text-[#E6DEC8]/95 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
                {/* 6th Tile - Audit Readiness */}
                <div className="deal-sheet-field-box">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-3 h-3 rounded-full bg-[#E6DEC8]" />
                    <h4 className="text-[20px] sm:text-[23px] lg:text-[26px] font-[900] uppercase text-[#E6DEC8] tracking-wide">
                      Audit Readiness
                    </h4>
                  </div>
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-[800] text-[#E6DEC8]/95 leading-relaxed">
                    Raw verification notes kept securely on file for legal and
                    operating review.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Recommended Portfolio Metrics */}
          <div className="portfolio-card-asymmetric group">
            <div className="portfolio-bg-watermark">04</div>

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
              <p className="text-[17px] sm:text-[20px] lg:text-[22px] font-semibold normal-case text-[#E6DEC8]/90 mt-3 tracking-wide max-w-2xl leading-snug">
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
                      <span className="text-[20px] sm:text-[23px] lg:text-[26px] font-[900] uppercase text-[#E6DEC8] leading-snug">
                        {metric}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 self-start lg:self-end">
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold normal-case tracking-wide text-[#E6DEC8] m-0">
                  Avoid unsupported averages, fabricated exits, or any figure
                  without a clear, checkable source.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
