export default function SolutionsSection() {
  const solutions = [
    {
      id: "01",
      title: "Company Formation & Operating Readiness",
      bullets: [
        "Formation, any nationality or residency",
        "EIN, banking & payment setup — remote-friendly for international founders",
        "Seller account, trademark & Brand Registry pathway",
        "Initial operating budget",
      ],
    },
    {
      id: "02",
      title: "Market Selection & Validation",
      bullets: [
        "Category & competitor analysis",
        "Keyword & customer-intent research",
        "Unit economics & risk assessment",
        "Proceed / revise / decline recommendation",
      ],
    },
    {
      id: "03",
      title: "Supply, Product & Brand Coordination",
      bullets: [
        "Supplier sourcing, quotes & samples",
        "Packaging & brand direction",
        "Quality control & landed-cost planning",
      ],
    },
    {
      id: "04",
      title: "Brand Activation & Market Entry",
      bullets: [
        "Product-page strategy & search-informed copy",
        "Photography, creative & enhanced content",
        "Pricing, offer & launch inventory planning",
      ],
    },
    {
      id: "05",
      title: "Amazon Account Management",
      bullets: [
        "Performance Stewardship & search growth",
        "Inventory, pricing & account-health oversight",
        "Reporting & expansion planning",
      ],
    },
    {
      id: "06",
      title: "Asset Enhancement",
      bullets: [
        "Documented operating procedures",
        "Supplier diversification & margin protection",
        "Exit-readiness assessment",
      ],
    },
  ];

  return (
    <section
      id="solutions"
      className="solutions-section-custom"
      style={{ backgroundColor: "#5A2132", color: "#E6DEC8" }}
    >
      <style>{`
        .solutions-section-custom {
          padding-top: 80px;
          padding-bottom: 100px;
          position: relative;
          width: 100%;
        }
        @media (min-width: 1024px) {
          .solutions-section-custom {
            padding-top: 120px;
            padding-bottom: 140px;
          }
        }

        .solutions-header-wrap {
          border-bottom: 1px solid rgba(230, 222, 200, 0.35);
          padding-bottom: 50px;
          margin-bottom: 60px;
        }
        @media (min-width: 1024px) {
          .solutions-header-wrap {
            padding-bottom: 70px;
            margin-bottom: 80px;
          }
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 768px) {
          .solutions-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }
        @media (min-width: 1200px) {
          .solutions-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
          }
        }

        .solution-card {
          position: relative;
          border: 1px solid rgba(230, 222, 200, 0.35);
          border-radius: 20px;
          padding: 35px 28px;
          min-height: 460px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: transparent;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        @media (min-width: 1024px) {
          .solution-card {
            padding: 45px 36px;
            min-height: 500px;
          }
        }
        .solution-card:hover {
          background-color: rgba(230, 222, 200, 0.04);
          border-color: rgba(230, 222, 200, 0.6);
        }

        .solution-card-heading {
          font-family: var(--font-serif);
          font-size: 24px;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #E6DEC8;
          text-align: left;
          margin-top: 15px;
          max-width: 90%;
        }
        @media (min-width: 1024px) {
          .solution-card-heading {
            font-size: 30px;
          }
        }

        .solution-bullets-wrap {
          margin-top: auto;
          padding-top: 25px;
          border-top: 1px solid rgba(230, 222, 200, 0.25);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }

        .solution-bullets-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
          width: 100%;
        }

        .solution-bullet-item {
          font-size: 15px;
          font-weight: 500;
          text-transform: none;
          line-height: 1.4;
          color: #E6DEC8;
          opacity: 0.92;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 10px;
        }
        @media (min-width: 1024px) {
          .solution-bullet-item {
            font-size: 17px;
            gap: 12px;
          }
        }

        .solution-bullet-dot {
          font-size: 10px;
          margin-top: 5px;
          opacity: 0.8;
          flex-shrink: 0;
        }

        .scope-note-banner {
          position: relative;
          margin-top: 60px;
          padding: 35px 28px;
          min-height: 240px;
          border-radius: 20px;
          border: 1px solid rgba(230, 222, 200, 0.35);
          background-color: rgba(230, 222, 200, 0.04);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        @media (min-width: 1024px) {
          .scope-note-banner {
            margin-top: 80px;
            padding: 45px 40px;
            min-height: 280px;
          }
        }
        .scope-note-banner:hover {
          background-color: rgba(230, 222, 200, 0.06);
          border-color: rgba(230, 222, 200, 0.55);
        }
      `}</style>

      <div className="container mx-auto px-4 max-w-[1600px]">
        {/* Top Header Section */}
        <div className="solutions-header-wrap">
          <div className="grid gap-[20px] lg:gap-x-[60px] lg:grid-cols-2 items-start">
            <h2
              className="h2 lg:col-start-1 uppercase font-bold text-[36px] sm:text-[46px] lg:text-[60px] leading-[0.95]"
              style={{ color: "#E6DEC8", fontFamily: "var(--font-serif)" }}
            >
              SOLUTIONS
            </h2>
            <div className="lg:col-start-2 flex flex-col gap-6 lg:gap-8">
              <h3
                className="uppercase font-bold text-[22px] sm:text-[26px] lg:text-[30px] leading-snug"
                style={{ color: "#E6DEC8", fontFamily: "var(--font-serif)" }}
              >
                ONE OPERATING PARTNER. EVERY STAGE OF THE BUSINESS.
              </h3>
              <p
                className="normal-case font-medium text-[17px] lg:text-[19px] leading-relaxed opacity-90 text-justify"
                style={{ color: "#E6DEC8" }}
              >
                We coordinate the work founders usually piece together themselves.
                You keep ownership. We bring the structure and the specialists.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Solutions Grid */}
        <div className="solutions-grid">
          {solutions.map((item) => (
            <div key={item.id} className="solution-card">
              {/* Corner Dashes / Brackets from Hero Section */}
              <span
                className="absolute inset-0 pointer-events-none"
                style={{ color: "#E6DEC8" }}
              >
                {/* Top-Left */}
                <svg
                  style={{ position: "absolute", top: "18px", left: "18px" }}
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
                {/* Top-Right */}
                <svg
                  style={{ position: "absolute", top: "18px", right: "18px" }}
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
                {/* Bottom-Left */}
                <svg
                  style={{ position: "absolute", bottom: "18px", left: "18px" }}
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
                {/* Bottom-Right */}
                <svg
                  style={{ position: "absolute", bottom: "18px", right: "18px" }}
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

              {/* Card Top Left: Heading */}
              <div className="relative z-10">
                <h3 className="solution-card-heading">{item.title}</h3>
              </div>

              {/* Card Bottom Left: Bullets with Divider Line */}
              <div className="solution-bullets-wrap relative z-10">
                <ul className="solution-bullets-list">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="solution-bullet-item">
                      <span className="solution-bullet-dot">●</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Important Scope Note Banner */}
        <div className="scope-note-banner">
          {/* Corner Brackets */}
          <span
            className="absolute inset-0 pointer-events-none"
            style={{ color: "#E6DEC8" }}
          >
            <svg
              style={{ position: "absolute", top: "18px", left: "18px" }}
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
              style={{ position: "absolute", top: "18px", right: "18px" }}
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
              style={{ position: "absolute", bottom: "18px", left: "18px" }}
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
              style={{ position: "absolute", bottom: "18px", right: "18px" }}
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

          {/* Top Left: Heading */}
          <div className="relative z-10 flex items-center gap-3.5">
            <span
              className="w-3.5 h-3.5 rounded-full shrink-0"
              style={{ backgroundColor: "#E6DEC8" }}
            />
            <h4
              className="uppercase font-bold text-[20px] sm:text-[24px] lg:text-[28px] tracking-wide"
              style={{ color: "#E6DEC8", fontFamily: "var(--font-serif)" }}
            >
              IMPORTANT SCOPE NOTE
            </h4>
          </div>

          {/* Bottom Right: Text Paragraph */}
          <div className="relative z-10 mt-auto pt-8 flex justify-end w-full">
            <p
              className="normal-case text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-relaxed opacity-90 text-right max-w-[850px]"
              style={{ color: "#E6DEC8" }}
            >
              We're your coordination partner. Legal, tax, banking, and other
              licensed work is completed by qualified specialists as part of the
              plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
