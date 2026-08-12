export default function ApproachSection() {
  return (
    <div className="text-black">
      <div className="border-b container h3 text-center grid gap-[10px] lg:gap-[25px] mt-20 lg:mt-[40px] mb-[25px] lg:mb-[35px] border-black pb-[100px] px-[25px]">
        <p className="uppercase text-[20px] lg:text-[22px] leading-relaxed font-medium">
          A Model Built on Alignment. <br className="hidden lg:block" />
          The quality of an Amazon business is shaped
          <br /> by the quality of the decisions made
          <br /> before and after launch.
        </p>
      </div>
      <section
        id="philosophy"
        className="Approche container my-[25px] grid gap-[15px] lg:gap-x-[60px] lg:grid-cols-2 lg:pb-[30px]"
      >
        <h2 className="h2 lg:col-start-1">PHILOSOPHY</h2>

        <div className="lg:col-start-2 flex flex-col gap-10 lg:gap-12">
          <div>
            <h3 className="h3 mb-2">
              Experienced Oversight. Direct Accountability.
            </h3>
            <p className="normal-case text-[18px] lg:text-[16px] leading-relaxed opacity-90 text-justify">
              Experienced oversight remains close to the market thesis, unit
              economics, capital allocation, inventory position, and operating
              performance. The founder receives judgment, not merely reporting.
            </p>
          </div>
          <br />
          <div className="pt-2">
            <h3 className="h3 mb-2">Capital Deserves Discipline</h3>
            <p className="normal-case text-[18px] lg:text-[16px] leading-relaxed opacity-90 text-justify">
              Not every product should be launched. Not every market should be
              entered. Not every increase in advertising expenditure creates
              value.
              <br />
              We challenge assumptions before resources are committed. Where the
              economics are weak, we revise the thesis or recommend that the
              founder does not proceed.
              <br />
              Capital preservation is part of stewardship — and it is what
              protects the founder's ability to take the next opportunity when
              it appears.
            </p>
          </div>
          <br />
          <div className="pt-2">
            <h3 className="h3 mb-2">A Capped Roster</h3>
            <p className="normal-case text-[18px] lg:text-[16px] leading-relaxed opacity-90 text-justify">
              Strava Management works with a limited number of portfolio brands
              at any one time.
              <br />
              This protects the standard of experienced attention, operating
              review, and commercial judgment required by each founder-partner.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
