import "./BrandsSection.css";

export default function BrandsSection() {
  const brands = [
    {
      id: 1,
      name: "THE ICE CREAM THAT COMES FROM UP NORTH (FROM FRANCE)",
      logo: "https://via.placeholder.com/150x150?text=LOGO",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070",
    },
    {
      id: 2,
      name: "CURLY, NOT SORRY",
      logo: "https://via.placeholder.com/150x150?text=CURLY",
      image:
        "https://images.unsplash.com/photo-1552699611-e2c2a32a9dd4?q=80&w=2069",
    },
    {
      id: 3,
      name: "AGAINST WINDS & TIDES",
      logo: "https://via.placeholder.com/150x150?text=LOGO",
      image:
        "https://images.unsplash.com/photo-1601058268499-e52658b8ebf8?q=80&w=2071",
    },
    {
      id: 4,
      name: "LA PASSE DÉCISIVE",
      logo: "https://via.placeholder.com/150x150?text=PSG",
      image:
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070",
    },
    {
      id: 5,
      name: "TINDER, MAKES FIRE!",
      logo: "https://via.placeholder.com/150x150?text=TINDER",
      image:
        "https://images.unsplash.com/photo-1518331647614-7a1f04cd34ce?q=80&w=2084",
    },
    {
      id: 6,
      name: "MAKING PEOPLE DREAM",
      logo: "https://via.placeholder.com/150x150?text=LVMH",
      image:
        "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2071",
    },
    {
      id: 7,
      name: "AASAMIA, JUST A LITTLE MORE!",
      logo: "https://via.placeholder.com/150x150?text=LOGO",
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070",
    },
    {
      id: 8,
      name: "LA JETTOMANIE",
      logo: "https://via.placeholder.com/150x150?text=VW",
      image:
        "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?q=80&w=2070",
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

      {/* Work Section */}
      <div className="brands-work">
        <h2>WORK</h2>

        {/* Images Stacked with Tiny Gaps */}
        <div className="brands-grid">
          {brands.map((brand) => (
            <div key={brand.id} className="brands-card">
              <img src={brand.image} alt={brand.name} className="bg" />
              <div className="brands-overlay" />

              <div className="brands-content">
                <img src={brand.logo} alt="Logo" className="logo" />
                <h3>{brand.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
