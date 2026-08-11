export default function HeroSection() {
  return (
    <section
      id="home"
      className="HeroImageTrailAgence relative container h-[calc(100svh-60px)] lg:h-[100vh] grid place-items-center pt-[70px] text-black"
    >
      <div className="absolute my-[15px] lg:my-[35px] inset-0 z-8">
        <div
          className="pointer-events-none absolute w-full text-center mt-[7px] lg:mt-[5px]"
          style={{
            fontSize: "14px",
            fontWeight: "900",
            letterSpacing: "0.05em",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          STRAVA MANAGEMENT
        </div>

        <span className="absolute inset-0 grid grid-cols-[auto_auto] justify-between content-between pointer-events-none lg:hidden">
          <svg
            className=""
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
        <span className="absolute inset-0 grid grid-cols-[auto_auto] justify-between content-between pointer-events-none hidden lg:grid">
          <svg
            className="opacity-0"
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
      <h1 className="h1 text-center translate-y-[-50px] lg:translate-y-[0] text-black">
        We are
        <br />
        brand
        <br />
        activists
      </h1>
      <div className="imageTrailAgence hidden lg:block absolute inset-0 pointer-events-none">
        <img
          className="opacity-0 absolute aspect-[3/4] w-[180px] rounded-[5px] object-cover"
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80"
          style={{
            opacity: "0",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(587px, 729px)",
            zIndex: "44",
          }}
        />
        <img
          className="opacity-0 absolute aspect-[3/4] w-[180px] rounded-[5px] object-cover"
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
          style={{
            opacity: "0",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(642px, 744px)",
            zIndex: "45",
          }}
        />
        <img
          className="opacity-0 absolute aspect-[3/4] w-[180px] rounded-[5px] object-cover"
          src="https://images.unsplash.com/photo-1519389953810-c1036cb8c31c?w=400&q=80"
          style={{
            opacity: "0",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(870px, 285px)",
            zIndex: "36",
          }}
        />
        <img
          className="opacity-0 absolute aspect-[3/4] w-[180px] rounded-[5px] object-cover"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
          style={{
            opacity: "0",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(818px, 302px)",
            zIndex: "37",
          }}
        />
        <img
          className="opacity-0 absolute aspect-[3/4] w-[180px] rounded-[5px] object-cover"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
          style={{
            opacity: "0",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(755px, 322px)",
            zIndex: "38",
          }}
        />
        <img
          className="opacity-0 absolute aspect-[3/4] w-[180px] rounded-[5px] object-cover"
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80"
          style={{
            opacity: "0",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(724px, 365px)",
            zIndex: "39",
          }}
        />
        <img
          className="opacity-0 absolute aspect-[3/4] w-[180px] rounded-[5px] object-cover"
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
          style={{
            opacity: "0",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(667px, 487px)",
            zIndex: "40",
          }}
        />
        <img
          className="opacity-0 absolute aspect-[3/4] w-[180px] rounded-[5px] object-cover"
          src="https://images.unsplash.com/photo-1519389953810-c1036cb8c31c?w=400&q=80"
          style={{
            opacity: "0",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(643px, 539px)",
            zIndex: "41",
          }}
        />
        <img
          className="opacity-0 absolute aspect-[3/4] w-[180px] rounded-[5px] object-cover"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
          style={{
            opacity: "0",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(599px, 626px)",
            zIndex: "42",
          }}
        />
        <img
          className="opacity-0 absolute aspect-[3/4] w-[180px] rounded-[5px] object-cover"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
          style={{
            opacity: "0",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(567px, 670px)",
            zIndex: "43",
          }}
        />
      </div>
      <div className="imagesHeroAgenceWebmo absolute top-[calc(50%+60px)] lg:hidden grid grid-cols-3">
        <img
          className="aspect-[4/6] w-[95px] md:w-[120px] rounded-[6px] object-cover translate-x-[30px] translate-y-[-10px] md:translate-y-[30px] rotate-[-10deg]"
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80"
        />
        <img
          className="aspect-[4/6] w-[95px] md:w-[120px] rounded-[6px] object-cover translate-x-0 translate-y-[20px] md:translate-y-[40px] rotate-[-3deg] z-[2]"
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
        />
        <img
          className="aspect-[4/6] w-[95px] md:w-[120px] rounded-[6px] object-cover translate-x-[-30px] translate-y-[-30px] md:translate-y-[20px] rotate-[8deg]"
          src="https://images.unsplash.com/photo-1519389953810-c1036cb8c31c?w=400&q=80"
        />
      </div>
    </section>
  );
}
