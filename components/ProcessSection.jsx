export default function ProcessSection() {
  const phases = [
    {
      number: "01",
      title: "Phase 01 — Foundation & Company Formation",
      question: "“ Is the business structured to operate correctly? ”",
      summary:
        "“ We build the legal foundation first. Licensed specialists handle legal, tax, and compliance work where required. ”",
      bullets: [
        "Company formation — any nationality, any residency",
        "EIN, banking & payment setup — remote-friendly",
        "Seller account & trademark pathway",
        "Operating budget & launch roadmap",
      ],
      image:
        "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=800&q=80",
    },
    {
      number: "02",
      title: "Phase 02 — Market Selection & Validation",
      question: "“ Is there a market worth entering? ”",
      summary:
        "“ We look for a defensible gap — not just high search volume. ”",
      bullets: [
        "Demand, competition & differentiation",
        "Pricing, keyword & search behavior",
        "Regulatory and supply-chain risk",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      number: "03",
      title: "Phase 03 — Viability Assessment",
      question: "“ Will this produce a durable return? ”",
      summary:
        "“ You get a clear call: proceed, revise, or decline. ”",
      bullets: [
        "Landed cost, fees & contribution margin",
        "Break-even & sensitivity testing",
        "Capital requirements",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      number: "04",
      title: "Phase 04 — Brand Development & Activation",
      question: "“ Can the brand convert? ”",
      summary:
        "“ We build the infrastructure a disciplined launch needs. ”",
      bullets: [
        "Naming, positioning & packaging",
        "Supplier sourcing & samples",
        "Listing copy, photography & pricing",
      ],
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    },
    {
      number: "05",
      title: "Phase 05 — Performance Stewardship",
      question: "“ Can it grow without weakening the economics? ”",
      summary:
        "“ We grow spend when the economics earn it — not before. ”",
      bullets: [
        "Ad spend & organic search growth",
        "Inventory, pricing & margin oversight",
        "Account health & expansion calls",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      number: "06",
      title: "Phase 06 — Asset Enhancement & Exit-Readiness",
      question: "“ Is the business becoming more valuable and transferable? ”",
      summary:
        "“ A business built to be sold is simply a better business to keep. ”",
      bullets: [
        "Financial clarity & documented operations",
        "Supplier resilience & founder independence",
        "Exit-readiness, even if you're not selling",
      ],
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80",
    },
  ];

  return (
    <div
      id="process"
      className="pt-6 lg:pt-10"
      style={{ backgroundColor: "#E6DEC8", color: "#5A2132" }}
    >
      {/* Header section with image */}
      <div className="dimensions container pt-[20px] lg:pt-[30px] grid lg:gap-[30px] lg:grid-cols-12 items-center">
        <img
          className="rounded-[15px] lg:rounded-[20px] lg:col-span-7 object-cover aspect-video my-[20px] mx-[15px] lg:m-0 lg:mt-4"
          src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1600&q=80"
          alt="The Process"
        />
        <div className="hidden lg:block lg:col-span-5 py-[30px] lg:py-0 text-left">
          <h2
            className="h2 font-bold tracking-tight text-[32px] lg:text-[42px]"
            style={{ color: "#5A2132" }}
          >
            THE PROCESS
          </h2>
          <p
            className="normal-case text-[20px] lg:text-[24px] leading-relaxed mt-2 font-semibold"
            style={{ color: "#5A2132", opacity: 0.9 }}
          >
            A Disciplined Sequence, From Formation to Asset Value.
          </p>
          <p
            className="normal-case text-[16px] lg:text-[18px] leading-relaxed mt-2 font-medium"
            style={{ color: "#5A2132", opacity: 0.85 }}
          >
            Six phases. Each answers a different question and sets up the next.
          </p>
        </div>
      </div>

      {/* Mobile Sticky Title Bar */}
      <div
        className="mt-[20px] sticky top-0 lg:hidden py-[20px] text-center z-20 px-4"
        style={{ backgroundColor: "#E6DEC8" }}
      >
        <h2 className="h2 font-bold text-[28px]" style={{ color: "#5A2132" }}>
          THE PROCESS
        </h2>
        <p
          className="normal-case text-[16px] leading-relaxed mt-1 font-semibold"
          style={{ color: "#5A2132", opacity: 0.9 }}
        >
          A Disciplined Sequence, From Formation to Asset Value.
        </p>
        <p
          className="normal-case text-[14px] leading-relaxed mt-1 font-medium"
          style={{ color: "#5A2132", opacity: 0.85 }}
        >
          Six phases. Each answers a different question and sets up the next.
        </p>
      </div>

      {/* Cards List Track */}
      <div
        id="about"
        className="relative container lg:mt-[35px] pb-[350px] lg:pb-[650px] pt-12"
      >
        <ul
          id="services"
          className="dimensions_ul relative pt-6 space-y-[80px] lg:space-y-[150px]"
        >
          {phases.map((phase, idx) => (
            <li
              key={phase.number}
              className="auto-rows-max min-h-[380px] h-auto sticky py-6 lg:py-10 px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-[24%_32%_23%_auto] lg:gap-[20px] rounded-none"
              style={{
                top: "0px",
                backgroundColor: "#E6DEC8",
                color: "#5A2132",
                borderTop: "1px solid rgba(90, 33, 50, 0.35)",
                opacity: 1,
                zIndex: 10 + idx,
              }}
            >
              {/* Col 1: Phase Title */}
              <div className="flex flex-col lg:grid lg:col-span-3 lg:grid-cols-[29%_39%_29%] leading-[1.1] gap-1 lg:gap-[20px]">
                <span
                  className="h3 mb-4 font-bold text-[22px] lg:text-[26px]"
                  style={{ color: "#5A2132" }}
                >
                  {phase.title}
                </span>
              </div>

              {/* Col 2: Question & Foundational Quote */}
              <div className="col-span-2 col-start-1 lg:col-start-2 lg:row-start-2 lg:col-span-1 flex flex-col justify-between gap-6 py-[15px] lg:py-0 lg:pr-[30px]">
                <span
                  className="h4 lg:py-0 font-semibold text-[19px] lg:text-[23px] leading-snug"
                  style={{ color: "#5A2132" }}
                >
                  {phase.question}
                </span>
                <p
                  className="text-[16px] lg:text-[19px] italic font-semibold leading-relaxed"
                  style={{ color: "#5A2132", opacity: 0.9 }}
                >
                  {phase.summary}
                </p>
              </div>

              {/* Col 3: Bullet points */}
              <div
                className="col-span-2 lg:col-start-3 lg:row-start-2 lg:col-span-1 uppercase lg:self-end text-[16px] lg:text-[18px] font-bold"
                style={{ color: "#5A2132", opacity: 0.95 }}
              >
                <ul className="space-y-2 list-none">
                  {phase.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-snug">
                      ● {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 4: Image */}
              <img
                className="h-[120px] row-start-1 col-start-2 lg:col-start-4 lg:row-start-1 lg:row-span-2 justify-self-end lg:w-full lg:h-full rounded-[4px] object-cover grayscale-off mix-blend-multiply-off lg:rounded-[10px] aspect-[210/285] lg:h-[290px]"
                src={phase.image}
                alt={phase.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
