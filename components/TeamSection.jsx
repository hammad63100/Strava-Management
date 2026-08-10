'use client';

export default function TeamSection() {
  const activists = [
    {
      name: "Gaylord",
      title: "Creation director - Associate",
      skills: "Management, Bricolage",
      img: "https://cdn.sanity.io/images/nhm28xef/production/fda622e05c0396492d484e2506e10ffe1a2fa28b-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Anais",
      title: "Creation director",
      skills: "Seller account readiness, CSE, Fille de psy et féministe",
      img: "https://cdn.sanity.io/images/nhm28xef/production/7823a0d5a4a5a4ec9c45d04500299c27c320f681-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Léandre",
      title: "Artistic director (video/film director)",
      skills: "Photographie, Réalisation, Rap & street art fan",
      img: "https://cdn.sanity.io/images/nhm28xef/production/3687b26e358deb2a3419bbc803d4b04c25eb5aa3-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Fanette",
      title: "Artistique director",
      skills: "Set design, Photographie, Coloriste",
      img: "https://cdn.sanity.io/images/nhm28xef/production/7bcc89ea301a0018245a5cf588c00df0f293adfe-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Geoffrey",
      title: "Artistic director",
      skills: "Print / Édition / Graphisme, Photographie, Backstage concerts",
      img: "https://cdn.sanity.io/images/nhm28xef/production/95b6dfb4e9446eaa8778704efe03870616ea270e-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Manon",
      title: "Motion designer / Artistic director",
      skills: "Typographie, Animation, Photographie",
      img: "https://cdn.sanity.io/images/nhm28xef/production/f8ea559a42f6cb007994ebcf149b56f8f1725586-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Valentin",
      title: "Motion designer",
      skills: "Screenwriting, Composition, Fan of 80s anime",
      img: "https://cdn.sanity.io/images/nhm28xef/production/f615414f5ac4bfcd62d591ad7a87ea711d95ae40-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Cécilia",
      title: "Junior artistic director",
      skills: "Graphisme, Illustration, Passion tricot",
      img: "https://cdn.sanity.io/images/nhm28xef/production/50f97914f6b5b15be625bd94e1fe2ef998eb8905-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Gautier",
      title: "Copywriter",
      skills: "Conception, Scripts, Micro-nouvelles",
      img: "https://cdn.sanity.io/images/nhm28xef/production/a9d5dd2eb5dfec0eec0dfdf2fbc8fc3e30f16fb5-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Robin",
      title: "Artistic director",
      skills: "Branding, Packaging, Design graphique",
      img: "https://cdn.sanity.io/images/nhm28xef/production/bf5df1840ef901cff24b7a8a1ff81c3d10ab2851-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Clara",
      title: "Project manager",
      skills: "Amazon strategy, PPC ads, Coordination",
      img: "https://cdn.sanity.io/images/nhm28xef/production/c3be992837ce51a8d052ec01a7ca20fbafb98150-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Alexandre",
      title: "Brand Strategist",
      skills: "Catalog expansion, FBA audit, Brand registry",
      img: "https://cdn.sanity.io/images/nhm28xef/production/b520ca8aedbc5ffb9ee562d475ef99cceee852ef-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Sophie",
      title: "Content lead",
      skills: "A+ Content, Listing copywriting, SEO",
      img: "https://cdn.sanity.io/images/nhm28xef/production/d30b91950dcf3f350c30ee1d624aeb0a2fef9bc7-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Lucas",
      title: "E-Commerce Specialist",
      skills: "Inventory forecasting, Supply chain, Amazon DSP",
      img: "https://cdn.sanity.io/images/nhm28xef/production/66df9845cc8bf85db7aa0cfa0faef3d76e4c76ea-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Camille",
      title: "Media Buyer",
      skills: "Algorithmic bidding, Campaign launch, LTV optimization",
      img: "https://cdn.sanity.io/images/nhm28xef/production/eb32759e6fbafbf1f5ee743ad26fef093a207bf2-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Antoine",
      title: "Account Director",
      skills: "Global expansion, Marketplace growth, Exit prep",
      img: "https://cdn.sanity.io/images/nhm28xef/production/8b350697adfe42fa9d8ff720ec2c5fbf9672ebcd-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Emma",
      title: "UI/UX Designer",
      skills: "Storefront layout, Brand storytelling, Mobile UI",
      img: "https://cdn.sanity.io/images/nhm28xef/production/94af6d63ea3ebcdff33ee3c9fef20bc71ab8521a-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Hugo",
      title: "PPC Manager",
      skills: "Keywords optimization, TACoS management, Sponsored ads",
      img: "https://cdn.sanity.io/images/nhm28xef/production/25e36f0187ae29eb7707ee7d53086eb2fae0c8b2-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Inès",
      title: "Brand Specialist",
      skills: "Competitor benchmarking, Pricing strategy, Margins",
      img: "https://cdn.sanity.io/images/nhm28xef/production/07b83e1c94e0bc98eef62a93abfae981cfef7bc1-350x525.jpg?w=350&h=525&auto=format"
    },
    {
      name: "Nathan",
      title: "Creative Strategist",
      skills: "Video ads, Product rendering, 3D branding",
      img: "https://cdn.sanity.io/images/nhm28xef/production/26bec19614798eb4f940eaec18a7fe71bfab1420-350x525.jpg?w=350&h=525&auto=format"
    }
  ];

  return (
    <section className="py-16 bg-[#f5f2ee] text-[#1b1b1b]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="h3 text-center lg:text-left text-2xl lg:text-4xl font-bold uppercase tracking-tight mb-[35px] lg:mt-[25px] lg:mb-[70px]">
          60+ brand activists<br />dedicated to serving brands
        </div>
        <div className="relative my-10 lg:my-[70px]">
          <ul className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-10 gap-3">
            {activists.map((member, i) => (
              <li
                key={i}
                className="group relative cursor-pointer overflow-hidden rounded transition-all duration-300 hover:scale-105 hover:z-10"
                data-name={member.name}
                data-title={member.title}
                data-skills={member.skills}
                data-img={member.img}
              >
                <img
                  className="w-full h-auto object-cover duration-300 group-hover:brightness-105"
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                />
                <svg
                  className="absolute w-full h-full inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  preserveAspectRatio="none"
                  viewBox="0 0 121 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M112.5 0V6H113.5V0H112.5ZM115 8.5L121 8.5V7.5L115 7.5V8.5ZM0 199.5H6V200.5H0V199.5ZM121 199.5H115V200.5H121V199.5ZM112.5 208V202H113.5V208H112.5ZM8.5 202L8.5 208H7.5L7.5 202H8.5ZM0 8.5L6 8.5V7.5L0 7.5V8.5ZM8.5 6L8.5 0H7.5L7.5 6H8.5Z"
                    fill="#1b1b1b"
                  ></path>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
