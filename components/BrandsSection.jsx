import "./BrandsSection.css";

export default function BrandsSection() {
  const brands = [
    {
      id: 1,
      title: "Tombstone 01",
      category: "[CATEGORY]",
      mandate: "Market Selection, Activation & Stewardship",
      result: "Achieved [verified result] within [verified period].",
      logo: "https://via.placeholder.com/150x150?text=T01",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070",
      video:
        "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    },
    {
      id: 2,
      title: "Tombstone 02",
      category: "[CATEGORY]",
      mandate: "Margin Recovery & Performance Stewardship",
      result:
        "Improved contribution margin by [X] percentage points while maintaining [relevant commercial context].",
      logo: "https://via.placeholder.com/150x150?text=T02",
      image:
        "https://images.unsplash.com/photo-1552699611-e2c2a32a9dd4?q=80&w=2069",
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
    {
      id: 3,
      title: "Tombstone 03",
      category: "[CATEGORY]",
      mandate: "Portfolio Expansion",
      result:
        "Expanded from [X] to [X] products while maintaining [verified profitability or operating metric].",
      logo: "https://via.placeholder.com/150x150?text=T03",
      image:
        "https://images.unsplash.com/photo-1601058268499-e52658b8ebf8?q=80&w=2071",
      video: "https://media.w3.org/2010/05/bunny/trailer.mp4",
    },
    {
      id: 4,
      title: "Tombstone 04",
      category: "[CATEGORY]",
      mandate: "Asset Enhancement & Exit Preparation",
      result:
        "Supported a transaction valued at [verified amount] after [verified operating improvements].",
      logo: "https://via.placeholder.com/150x150?text=T04",
      image:
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070",
      video: "https://res.cloudinary.com/demo/video/upload/elephants.mp4",
    },
  ];

  return (
    <div className="brands-section">
      {/* Top Header Section */}
      <div className="brands-hero relative container">
        {/* Top Header Container with Wordmark and SVG Corner Brackets matching Agency Hero */}
        <div className="absolute my-[15px] lg:my-[35px] inset-0 z-10 pointer-events-none">
          <div
            className="pointer-events-none absolute w-full text-center mt-[7px] lg:mt-[5px]"
            style={{
              fontSize: "14px",
              fontWeight: "900",
              letterSpacing: "0.05em",
              color: "#1B1B1B",
              textTransform: "uppercase",
            }}
          >
            STRAVA MANAGEMENT
          </div>

          <span className="absolute inset-0 grid grid-cols-[auto_auto] justify-between content-between pointer-events-none">
            <svg
              className="lg:opacity-0"
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
              className=""
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
              className=""
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
              className=""
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

        <h1 className="brands-headline">
          THE ERA <br /> OF BRANDS <br /> IN MOTION <br /> HAS ARRIVED.
        </h1>

        <div className="brands-mission">
          <p>
            ESTABLISHING AGILE <br />
            AND RESPONSIBLE BRANDS <br />
            FOR LASTING SUCCESS.
          </p>
          <p>
            ENERGIZING THEM CONSTANTLY <br />
            TO FACE TODAY'S CHALLENGES.
          </p>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="brands-work">
        {/* Portfolio Intro Header - Matching Site Design System */}
        <div className="grid gap-[15px] lg:gap-x-[60px] lg:grid-cols-2 my-12 pb-6">
          <h2 className="h2 lg:col-start-1 text-left uppercase text-[42px] lg:text-[64px] font-black tracking-tight text-black leading-none">
            PORTFOLIO
          </h2>

          <div className="lg:col-start-2 flex flex-col gap-4 font-bold">
            <div>
              <p className="uppercase text-[20px] lg:text-[26px] font-[900] leading-relaxed text-black mb-5 text-justify">
                Select Portfolio Results.
              </p>
              <p className="uppercase text-[20px] lg:text-[26px] font-[900] leading-relaxed text-black mb-5 text-justify">
                Proof should be presented as a deal sheet. Quietly. Clearly.
                With verified numbers and sufficient commercial context.
              </p>
              <p className="uppercase text-[20px] lg:text-[26px] font-[900] leading-relaxed text-black mb-5 text-justify">
                We assess results through more than revenue. The quality of
                profit, strength of market position, efficiency of capital,
                resilience of supply, and transferability of operations all
                influence enterprise value.
              </p>
              <p className="uppercase text-[20px] lg:text-[26px] font-[900] leading-relaxed text-black mb-0 text-justify">
                The examples below should be published only after each figure
                has been verified.
              </p>
            </div>
          </div>
        </div>

        {/* Images Stacked with Gaps */}
        <div className="brands-grid">
          {brands.map((brand) => (
            <div key={brand.id} className="brands-card">
              {brand.video ? (
                <video
                  src={brand.video}
                  poster={brand.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="bg object-cover w-full h-full absolute inset-0"
                />
              ) : (
                <img src={brand.image} alt={brand.title} className="bg" />
              )}
              <div className="brands-overlay" />

              <div className="brands-content text-center flex flex-col items-center justify-center">
                {brand.logo && (
                  <img
                    src={brand.logo}
                    alt={`${brand.title} logo`}
                    className="logo mb-3"
                  />
                )}
                <h3 className="mb-4 text-center text-[26px] lg:text-[44px] font-[900] uppercase tracking-tight">
                  {brand.title}
                </h3>
                <div className="text-[16px] lg:text-[22px] max-w-4xl flex flex-col gap-3 font-bold uppercase text-center items-center justify-center mx-auto">
                  <p>
                    <span className="font-[900]">Category:</span>{" "}
                    {brand.category}
                  </p>
                  <p>
                    <span className="font-[900]">Mandate:</span> {brand.mandate}
                  </p>
                  <p>
                    <span className="font-[900]">Result:</span> {brand.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* 5th Card: Recommended Portfolio Metrics (Inside .brands-grid for identical height & alignment) */}
          <div className="brands-card">
            <video
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="bg object-cover w-full h-full absolute inset-0"
            />
            {/* Light frosted overlay for clear BLACK text */}
            <div className="absolute inset-0 bg-[#f4f3ef]/85 backdrop-blur-sm transition-colors duration-500 hover:bg-[#f4f3ef]/75 z-0" />

            <div className="brands-content text-black text-center flex flex-col items-center justify-center p-6 lg:p-12 z-10">
              <h3 className="mb-4 text-center text-[24px] lg:text-[38px] font-[900] uppercase tracking-tight text-black">
                Recommended Portfolio Metrics
              </h3>
              <div className="text-[14px] lg:text-[20px] max-w-5xl flex flex-col gap-3 font-bold uppercase text-center items-center justify-center mx-auto text-black">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[14px] lg:text-[19px] font-[900] uppercase w-full mb-2">
                  <li className="bg-black/5 backdrop-blur-md px-4 py-2.5 rounded-xl border border-black/15 text-black">
                    Year-over-year profit growth
                  </li>
                  <li className="bg-black/5 backdrop-blur-md px-4 py-2.5 rounded-xl border border-black/15 text-black">
                    Contribution-margin improvement
                  </li>
                  <li className="bg-black/5 backdrop-blur-md px-4 py-2.5 rounded-xl border border-black/15 text-black">
                    Reduction in inefficient acquisition spend
                  </li>
                  <li className="bg-black/5 backdrop-blur-md px-4 py-2.5 rounded-xl border border-black/15 text-black">
                    Organic market-position improvement
                  </li>
                  <li className="bg-black/5 backdrop-blur-md px-4 py-2.5 rounded-xl border border-black/15 text-black">
                    Revenue expansion with stated time period
                  </li>
                  <li className="bg-black/5 backdrop-blur-md px-4 py-2.5 rounded-xl border border-black/15 text-black">
                    Successful launch with break-even timeline
                  </li>
                  <li className="bg-black/5 backdrop-blur-md px-4 py-2.5 rounded-xl border border-black/15 text-black">
                    Number of markets or products added
                  </li>
                  <li className="bg-black/5 backdrop-blur-md px-4 py-2.5 rounded-xl border border-black/15 text-black">
                    Verified exit value
                  </li>
                </ul>
                <p className="text-[12px] lg:text-[15px] font-[900] uppercase text-black/90 tracking-wide">
                  Avoid publishing unsupported averages, fabricated exits, or
                  performance claims without a clear source.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
