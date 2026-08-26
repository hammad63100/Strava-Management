export default function ExpertiseSection() {
  const CardBorderSVG = () => (
    <svg
      className="hidden lg:block absolute left-0 top-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
      viewBox="0 0 260 419"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M237.24 390L231.083 390M229 392.085L229 398.246"
        stroke="#E6DEC8"
        strokeMiterlimit="10"
      />
      <path
        d="M22 390L28.1571 390M30.2402 392.085L30.2402 398.246"
        stroke="#E6DEC8"
        strokeMiterlimit="10"
      />
      <path
        d="M237.24 29.2461L231.083 29.2461M229 27.1615L229 21"
        stroke="#E6DEC8"
        strokeMiterlimit="10"
      />
      <path
        d="M22 29.2461L28.1571 29.2461M30.2402 27.1615L30.2402 21"
        stroke="#E6DEC8"
        strokeMiterlimit="10"
      />
    </svg>
  );

  return (
    <div className="Expertises" style={{ color: "#E6DEC8" }}>
      <div className="container mt-[50px] mb-[20px]">
        <h2 className="h2 text-center" style={{ color: "#E6DEC8" }}>
          The Vendor and Partner Gap
        </h2>
      </div>

      <ul className="grid lg:grid-cols-5 gap-[25px] lg:gap-[10px] container pt-[15px] pb-[20px] lg:pb-[35px]">
        {/* Card 1 */}
        <li
          className="relative px-[15px] py-[30px] md:px-[15px] lg:px-[25px] lg:py-[30px] rounded-[20px]"
          style={{ minHeight: "350px", border: "1px solid rgba(230, 222, 200, 0.35)" }}
        >
          <CardBorderSVG />
          <div className="relative z-10 flex flex-col h-full justify-center lg:justify-between text-center lg:text-left gap-4 lg:gap-0">
            <p className="h4 font-bold text-[20px] lg:text-[14px] xl:text-[18px]">
              Completes assigned tasks.
            </p>
            <p className="h5 text-[16px] lg:text-[12px] xl:text-[15px] underline underline-offset-4 decoration-1">
              Examines the commercial consequence of each task.
            </p>
          </div>
        </li>

        {/* Card 2 */}
        <li
          className="relative px-[15px] py-[30px] md:px-[15px] lg:px-[25px] lg:py-[30px] rounded-[20px]"
          style={{ minHeight: "350px", border: "1px solid rgba(230, 222, 200, 0.35)" }}
        >
          <CardBorderSVG />
          <div className="relative z-10 flex flex-col h-full justify-center lg:justify-between text-center lg:text-left gap-4 lg:gap-0">
            <p className="h4 font-bold text-[20px] lg:text-[14px] xl:text-[18px]">
              Reports activity and channel metrics.
            </p>
            <p className="h5 text-[16px] lg:text-[12px] xl:text-[15px] underline underline-offset-4 decoration-1">
              Reports revenue quality, profit, capital needs, and risk.
            </p>
          </div>
        </li>

        {/* Card 3 */}
        <li
          className="relative px-[15px] py-[30px] md:px-[15px] lg:px-[25px] lg:py-[30px] rounded-[20px]"
          style={{ minHeight: "350px", border: "1px solid rgba(230, 222, 200, 0.35)" }}
        >
          <CardBorderSVG />
          <div className="relative z-10 flex flex-col h-full justify-center lg:justify-between text-center lg:text-left gap-4 lg:gap-0">
            <p className="h4 font-bold text-[20px] lg:text-[14px] xl:text-[18px]">
              Optimizes separate functions.
            </p>
            <p className="h5 text-[16px] lg:text-[12px] xl:text-[15px] underline underline-offset-4 decoration-1">
              Connects formation, market selection, activation, and management.
            </p>
          </div>
        </li>

        {/* Card 4 */}
        <li
          className="relative px-[15px] py-[30px] md:px-[15px] lg:px-[25px] lg:py-[30px] rounded-[20px]"
          style={{ minHeight: "350px", border: "1px solid rgba(230, 222, 200, 0.35)" }}
        >
          <CardBorderSVG />
          <div className="relative z-10 flex flex-col h-full justify-center lg:justify-between text-center lg:text-left gap-4 lg:gap-0">
            <p className="h4 font-bold text-[20px] lg:text-[14px] xl:text-[18px]">
              Responds to the current month.
            </p>
            <p className="h5 text-[16px] lg:text-[12px] xl:text-[15px] underline underline-offset-4 decoration-1">
              Builds toward the founder's long-term objective.
            </p>
          </div>
        </li>

        {/* Card 5 */}
        <li
          className="relative px-[15px] py-[30px] md:px-[15px] lg:px-[25px] lg:py-[30px] rounded-[20px]"
          style={{ minHeight: "350px", border: "1px solid rgba(230, 222, 200, 0.35)" }}
        >
          <CardBorderSVG />
          <div className="relative z-10 flex flex-col h-full justify-center lg:justify-between text-center lg:text-left gap-4 lg:gap-0">
            <p className="h4 font-bold text-[20px] lg:text-[14px] xl:text-[18px]">
              Sells a defined scope of hours.
            </p>
            <p className="h5 text-[16px] lg:text-[12px] xl:text-[15px] underline underline-offset-4 decoration-1">
              Accepts accountability for the operating plan.
            </p>
          </div>
        </li>
      </ul>

      <div
        className="container mt-12 text-center max-w-[800px] mx-auto"
        style={{ paddingBottom: "80px", color: "#E6DEC8" }}
      >
        <h3 className="h3 mb-16" style={{ color: "#E6DEC8" }}>
          We would rather build fewer assets well.
        </h3>
        <br />
        <h2 className="h2 mb-6" style={{ color: "#E6DEC8" }}>
          Transparent Alignment
        </h2>
        <br />
        <p className="normal-case text-[15px] lg:text-[16px] leading-relaxed opacity-90" style={{ color: "#E6DEC8" }}>
          Before an operating partnership begins, we establish the founder's
          objective, available capital, ownership horizon, risk tolerance, and
          expected level of involvement.
          <br />
          The operating plan is then built around those realities.
        </p>
      </div>
    </div>
  );
}
