export default function ProcessSection() {
  const phases = [
    {
      number: "01",
      title: "Phase 01 — Foundation & Company Formation",
      question: "“ Is the business structured to operate correctly? ”",
      summary:
        "“ We establish the legal and operating foundation before marketplace activity begins. Specialist legal, tax, banking, or compliance work may be delivered by qualified third parties where required. ”",
      bullets: [
        "Founder objective and ownership structure",
        "US company formation coordination — open to founders anywhere in the world, regardless of citizenship or residency",
        "EIN and foundational documentation guidance",
        "Business banking and payment-readiness coordination, including remote account opening for international founders",
        "Amazon seller account preparation",
        "Trademark and brand-protection pathway",
        "Operating budget and launch roadmap",
      ],
      image:
        "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=800&q=80",
    },
    {
      number: "02",
      title: "Phase 02 — Market Selection & Validation",
      question: "“ Is there a credible market worth entering? ”",
      summary:
        "“ We look for a defendable commercial gap, not simply a product with high search volume. ”",
      bullets: [
        "Category demand and maturity",
        "Competitive concentration",
        "Customer expectations and review barriers",
        "Pricing architecture",
        "Keyword and search behaviour",
        "Differentiation potential",
        "Regulatory and supply-chain exposure",
        "Portfolio expansion potential",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      number: "03",
      title: "Phase 03 — Viability Assessment",
      question: "“ Can the opportunity produce a durable return? ”",
      summary:
        "“ The founder receives a clear recommendation: proceed, revise, or decline. ”",
      bullets: [
        "Landed-cost modelling",
        "Amazon fee structure",
        "Contribution-margin forecast",
        "Customer acquisition assumptions",
        "Inventory and working-capital requirements",
        "Break-even analysis",
        "Sensitivity testing",
        "Launch-capital requirements",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      number: "04",
      title: "Phase 04 — Brand Development & Activation",
      question: "“ Can the brand communicate and convert? ”",
      summary:
        "“ We build the conversion infrastructure required for a disciplined market entry. ”",
      bullets: [
        "Brand positioning and naming coordination",
        "Packaging and visual direction",
        "Supplier and sample coordination",
        "Search-led product-page strategy",
        "Product photography and image direction",
        "Copy, SEO, and enhanced brand content",
        "Pricing and offer architecture",
        "Initial inventory and launch sequencing",
      ],
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    },
    {
      number: "05",
      title: "Phase 05 — Performance Stewardship",
      question: "“ Can the business expand without weakening the economics? ”",
      summary:
        "“ Spend is increased when the economics justify it. Revenue is not treated as success in isolation. ”",
      bullets: [
        "Advertising and demand stewardship",
        "Organic search position",
        "Conversion performance",
        "Pricing integrity",
        "Inventory oversight",
        "Contribution margin",
        "Competitive movement",
        "Account health and marketplace compliance",
        "Product-level reporting",
        "Expansion decisions",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      number: "06",
      title: "Phase 06 — Asset Enhancement & Exit-Readiness",
      question: "“ Is the business becoming more transferable and valuable? ”",
      summary:
        "“ Exit-readiness strengthens the company even when the founder intends to retain long-term ownership. ”",
      bullets: [
        "Financial clarity",
        "Documented operating procedures",
        "Supplier resilience",
        "Brand ownership",
        "Inventory controls",
        "Founder independence",
        "Portfolio diversification",
        "Reliable earnings history",
        "Transaction-readiness documentation",
      ],
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80",
    },
  ];

  return (
    <div id="process" className="bg-[#7B7762] text-black pt-6 lg:pt-10">
      {/* Header section with image */}
      <div className="dimensions container pt-[20px] lg:pt-[30px] grid lg:gap-[30px] lg:grid-cols-12 items-center">
        <img
          className="rounded-[15px] lg:rounded-[20px] lg:col-span-7 object-cover aspect-video my-[20px] mx-[15px] lg:m-0 lg:mt-4"
          src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1600&q=80"
          alt="The Process"
        />
        <div className="hidden lg:block lg:col-span-5 py-[30px] lg:py-0 text-left">
          <h2 className="h2 font-bold tracking-tight text-black text-[32px] lg:text-[42px]">
            THE PROCESS
          </h2>
          <p className="normal-case text-[20px] lg:text-[24px] leading-relaxed mt-2 text-black/90 font-semibold">
            A Disciplined Sequence from Formation to Asset Value.
          </p>
        </div>
      </div>

      {/* Mobile Sticky Title Bar */}
      <div className="mt-[20px] sticky top-[80px] lg:hidden py-[20px] text-center bg-[#7B7762] z-20 px-4 ">
        <h2 className="h2 font-bold text-black text-[28px]">THE PROCESS</h2>
        <p className="normal-case text-[16px] leading-relaxed mt-1 text-black/90 font-semibold">
          A Disciplined Sequence from Formation to Asset Value.
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
              className="auto-rows-max min-h-[380px] h-auto sticky relative py-6 lg:py-10 px-6 lg:px-10 text-black grid grid-cols-2 lg:grid-cols-[24%_32%_23%_auto] lg:gap-[20px] rounded-none border-t-[1px] border-black"
              style={{
                top: `${100 + idx * 80}px`,
                backgroundColor: "#7B7762",
                borderTop: "1px solid #000000",
                opacity: 1,
                zIndex: 10 + idx,
              }}
            >
              {/* Col 1: Phase Title */}
              <div className="flex flex-col lg:grid lg:col-span-3 lg:grid-cols-[29%_39%_29%] leading-[1.1] gap-1 lg:gap-[20px]">
                <span className="h3 mb-4 font-bold text-[20px] lg:text-[24px] text-black">
                  {phase.title}
                </span>
              </div>

              {/* Col 2: Question & Foundational Quote */}
              <div className="col-span-2 col-start-1 lg:col-start-2 lg:row-start-2 lg:col-span-1 flex flex-col justify-between gap-6 py-[15px] lg:py-0 lg:pr-[30px]">
                <span className="h4 lg:py-0 font-medium text-[17px] lg:text-[21px] text-black leading-snug">
                  {phase.question}
                </span>
                <p className="text-[15px] lg:text-[17px] italic text-black/85 font-bold leading-relaxed">
                  {phase.summary}
                </p>
              </div>

              {/* Col 3: Bullet points */}
              <div className="col-span-2 lg:col-start-3 lg:row-start-2 lg:col-span-1 uppercase lg:self-end text-[15px] lg:text-[17px] text-black/90 font-bold">
                <ul className="space-y-1.5 list-none">
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
