'use client';

export default function TeamSection() {
  const activists = [
    {
      name: "Sarah",
      title: "Account Director",
      skills: "Global expansion, Marketplace growth, Exit prep",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=350&h=525&auto=format&fit=crop&q=80"
    },
    {
      name: "Michael",
      title: "PPC Manager",
      skills: "Keywords optimization, TACoS management, Sponsored ads",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=350&h=525&auto=format&fit=crop&q=80"
    },
    {
      name: "Elena",
      title: "Content Lead",
      skills: "A+ Content, Listing copywriting, SEO",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=350&h=525&auto=format&fit=crop&q=80"
    },
    {
      name: "David",
      title: "Brand Strategist",
      skills: "Catalog expansion, FBA audit, Brand registry",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=350&h=525&auto=format&fit=crop&q=80"
    },
    {
      name: "Jessica",
      title: "E-Commerce Specialist",
      skills: "Inventory forecasting, Supply chain, Amazon DSP",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=350&h=525&auto=format&fit=crop&q=80"
    },
    {
      name: "James",
      title: "Media Buyer",
      skills: "Algorithmic bidding, Campaign launch, LTV optimization",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=350&h=525&auto=format&fit=crop&q=80"
    },
    {
      name: "Olivia",
      title: "UI/UX Designer",
      skills: "Storefront layout, Brand storytelling, Mobile UI",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=350&h=525&auto=format&fit=crop&q=80"
    },
    {
      name: "William",
      title: "Catalog Manager",
      skills: "Account health, Compliance, Marketplace strategy",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=350&h=525&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-16 bg-[#f5f2ee] text-[#1b1b1b]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="h3 text-center lg:text-left text-2xl lg:text-4xl font-bold uppercase tracking-tight mb-[35px] lg:mt-[25px] lg:mb-[70px]">
          brand activists<br />dedicated to serving brands
        </div>
        <div className="relative my-10 lg:my-[70px]">
          <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
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
                  className="w-full h-[350px] object-cover duration-300 group-hover:brightness-105"
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
