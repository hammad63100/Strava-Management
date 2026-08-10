import ToggleSwitch from "./ToggleSwitch";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="HeroImageTrailAgence relative container h-[calc(100svh-60px)] lg:h-[100vh] grid place-items-center pt-[70px] text-white"
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
        <div
          className="absolute w-full flex justify-center pointer-events-auto"
          style={{ bottom: "80px", zIndex: 50 }}
        >
          <ToggleSwitch />
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
      <h1 className="h1 text-center translate-y-[-50px] lg:translate-y-[0] text-white">
        We are
        <br />
        brand
        <br />
        activists
      </h1>
      <div className="imageTrailAgence hidden lg:block absolute inset-0 pointer-events-none">
        <img
          className="opacity-0 absolute aspect-[3/4] w-[180px] rounded-[5px] object-cover"
          src="/images/img_8e43e6da.jpeg"
          srcset="https://cdn.sanity.io/images/nhm28xef/production/388614578b80d0e5c7ca830fba1af05188f7188e-318x477.jpg?w=240&amp;auto=format 2x,https://cdn.sanity.io/images/nhm28xef/production/388614578b80d0e5c7ca830fba1af05188f7188e-318x477.jpg?w=160&amp;auto=format 3x"
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
          src="/images/img_a6b8b6a8.jpeg"
          srcset="https://cdn.sanity.io/images/nhm28xef/production/8f077d8de91dc3bd463e8ab9cd61aad36e228807-318x477.jpg?w=240&amp;auto=format 2x,https://cdn.sanity.io/images/nhm28xef/production/8f077d8de91dc3bd463e8ab9cd61aad36e228807-318x477.jpg?w=160&amp;auto=format 3x"
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
          src="/images/img_54ef7bc6.jpeg"
          srcset="https://cdn.sanity.io/images/nhm28xef/production/739990e6777258ede86c3ba9d683664669c7ba51-334x477.jpg?w=240&amp;auto=format 2x,https://cdn.sanity.io/images/nhm28xef/production/739990e6777258ede86c3ba9d683664669c7ba51-334x477.jpg?w=160&amp;auto=format 3x"
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
          src="/images/img_1426e201.jpeg"
          srcset="https://cdn.sanity.io/images/nhm28xef/production/9cf4ee3222aade728de214104023d89a12246fc5-318x477.jpg?w=240&amp;auto=format 2x,https://cdn.sanity.io/images/nhm28xef/production/9cf4ee3222aade728de214104023d89a12246fc5-318x477.jpg?w=160&amp;auto=format 3x"
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
          src="/images/img_cb0ca2c6.jpeg"
          srcset="https://cdn.sanity.io/images/nhm28xef/production/40b39b98247985b797fef308e97dc079f682efcc-318x477.jpg?w=240&amp;auto=format 2x,https://cdn.sanity.io/images/nhm28xef/production/40b39b98247985b797fef308e97dc079f682efcc-318x477.jpg?w=160&amp;auto=format 3x"
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
          src="/images/img_97e25d2a.jpeg"
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
          src="/images/img_c0fba1dc.jpeg"
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
          src="/images/img_59fea7e6.jpeg"
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
          src="/images/img_40319b6c.jpeg"
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
          src="/images/img_73ba7ce4.jpeg"
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
          src="/images/img_1dc20e6c.jpeg"
        />
        <img
          className="aspect-[4/6] w-[95px] md:w-[120px] rounded-[6px] object-cover translate-x-0 translate-y-[20px] md:translate-y-[40px] rotate-[-3deg] z-[2]"
          src="/images/img_4e585c3b.jpeg"
        />
        <img
          className="aspect-[4/6] w-[95px] md:w-[120px] rounded-[6px] object-cover translate-x-[-30px] translate-y-[-30px] md:translate-y-[20px] rotate-[8deg]"
          src="/images/img_b7ed24ff.jpeg"
        />
      </div>
    </section>
  );
}
