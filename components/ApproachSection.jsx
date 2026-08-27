export default function ApproachSection() {
  return (
    <div style={{ color: "#E6DEC8" }}>
      <div
        className="border-b container text-center grid gap-[10px] lg:gap-[25px] mt-20 lg:mt-[40px] mb-[25px] lg:mb-[35px] pb-[100px] lg:pb-[120px] px-[25px]"
        style={{
          borderBottomColor: "rgba(230, 222, 200, 0.35)",
          color: "#E6DEC8",
        }}
      >
        <p className="normal-case text-[16px] lg:text-[18px] leading-[1.65] font-medium max-w-[1100px] mx-auto opacity-95">
          A Model Built on Alignment. <br className="hidden lg:block" />
          The quality of your Amazon business is set by the decisions made
          before and after launch. We make those decisions with you.
        </p>
      </div>
      <section
        id="philosophy"
        className="Approche container my-[35px] lg:my-[50px] grid gap-[20px] lg:gap-x-[60px] lg:grid-cols-2 pb-[40px] lg:pb-[60px]"
        style={{ color: "#E6DEC8" }}
      >
        <h2
          className="h2 lg:col-start-1 font-bold"
          style={{ color: "#E6DEC8", fontFamily: "var(--font-serif)" }}
        >
          Philosophy
        </h2>

        <div className="lg:col-start-2 flex flex-col gap-14 lg:gap-20">
          <div>
            <h3
              className="font-bold text-[20px] lg:text-[24px] leading-[1.2] mb-3 lg:mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Senior Oversight. Direct Accountability.
            </h3>
            <p className="normal-case font-normal text-[15px] lg:text-[17px] leading-[1.65] opacity-90 text-justify">
              Every founder-partner works with an experienced account analyst,
              not a rotating account manager. You get judgment, not just
              reporting.
            </p>
          </div>
          <div>
            <h3
              className="font-bold text-[20px] lg:text-[24px] leading-[1.2] mb-3 lg:mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Capital Deserves Discipline
            </h3>
            <p className="normal-case font-medium text-[17px] lg:text-[19px] leading-relaxed opacity-90 text-justify">
              Not every product should launch. Not every market is worth
              entering. Where the numbers don't work, we say so before you spend
              — not after.
            </p>
          </div>
          <div>
            <h3
              className="font-bold text-[20px] lg:text-[24px] leading-[1.2] mb-3 lg:mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              A Capped Roster
            </h3>
            <p className="normal-case font-medium text-[17px] lg:text-[19px] leading-relaxed opacity-90 text-justify">
              We work with a limited number of founder-partners at a time. We'd
              rather build a few businesses well than many adequately.
            </p>
          </div>
          <div>
            <h3
              className="font-bold text-[20px] lg:text-[24px] leading-[1.2] mb-3 lg:mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              We Start With Your Reality
            </h3>
            <p className="normal-case font-medium text-[17px] lg:text-[19px] leading-relaxed opacity-90 text-justify">
              Before we begin, we map your objective, capital, timeline, and
              risk tolerance. The plan is built around that — not a template.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
