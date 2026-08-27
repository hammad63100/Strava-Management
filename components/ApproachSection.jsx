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
        <p className="uppercase text-[22px] lg:text-[25px] leading-relaxed font-bold max-w-[1100px] mx-auto">
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
        <h2 className="h2 lg:col-start-1 uppercase font-bold" style={{ color: "#E6DEC8" }}>
          PHILOSOPHY
        </h2>

        <div className="lg:col-start-2 flex flex-col gap-14 lg:gap-20">
          <div>
            <h3 className="uppercase font-bold text-[20px] lg:text-[22px] leading-relaxed mb-4 lg:mb-5">
              Senior Oversight. Direct Accountability.
            </h3>
            <p className="uppercase font-bold text-[20px] lg:text-[22px] leading-relaxed opacity-90 text-justify">
              Every founder-partner works with an experienced account analyst,
              not a rotating account manager. You get judgment, not just
              reporting.
            </p>
          </div>
          <div>
            <h3 className="uppercase font-bold text-[20px] lg:text-[22px] leading-relaxed mb-4 lg:mb-5">
              Capital Deserves Discipline
            </h3>
            <p className="uppercase font-bold text-[20px] lg:text-[22px] leading-relaxed opacity-90 text-justify">
              Not every product should launch. Not every market is worth
              entering. Where the numbers don't work, we say so before you spend
              — not after.
            </p>
          </div>
          <div>
            <h3 className="uppercase font-bold text-[20px] lg:text-[22px] leading-relaxed mb-4 lg:mb-5">
              A Capped Roster
            </h3>
            <p className="uppercase font-bold text-[20px] lg:text-[22px] leading-relaxed opacity-90 text-justify">
              We work with a limited number of founder-partners at a time. We'd
              rather build a few businesses well than many adequately.
            </p>
          </div>
          <div>
            <h3 className="uppercase font-bold text-[20px] lg:text-[22px] leading-relaxed mb-4 lg:mb-5">
              We Start With Your Reality
            </h3>
            <p className="uppercase font-bold text-[20px] lg:text-[22px] leading-relaxed opacity-90 text-justify">
              Before we begin, we map your objective, capital, timeline, and
              risk tolerance. The plan is built around that — not a template.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
