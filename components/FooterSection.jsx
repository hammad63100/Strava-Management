export default function FooterSection() {
  const basePath =
    process.env.NODE_ENV === "production" ? "/Strava-Management" : "";

  return (
    <footer
      className="border-t-[1px] lg:border-t-0 pt-10 lg:pt-14 pb-[10px] lg:pb-0 px-[15px] grid gap-[25px] lg:gap-0 mx-auto lg:px-0"
      style={{
        backgroundColor: "#E6DEC8",
        color: "#5A2132",
        borderTopColor: "rgba(90, 33, 50, 0.35)",
        margin: 0,
      }}
    >
      <div>
        <div className="grid lg:grid-cols-[30vw_10px_1px_10px_auto] xl:grid-cols-[36vw_10px_1px_10px_auto] text-center lg:text-left">
          <div
            className="lg:col-start-5 lg:border-t-[1px] lg:border-b-[1px] lg:p-[35px] xl:p-[50px]"
            style={{ borderColor: "rgba(90, 33, 50, 0.35)" }}
          >
            <div className="lg:grid lg:grid-cols-6 lg:grid-rows-[auto_100px_auto] xl:grid-rows-[auto_200px_auto]">
              <div className="lg:col-span-3">
                <p className="text-[14px] lg:text-[15px]" style={{ color: "#5A2132", lineHeight: "1.65" }}>
                  Send us a brief
                </p>
                <a href="mailto:hello@stravamanagement.com" className="h4">
                  <svg
                    className="cursor-pointer hover:opacity-[0.8] mx-auto lg:mx-0 mt-[5px] w-[187px] lg:w-[278px] h-auto"
                    viewBox="0 0 280 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <text
                      x="0"
                      y="15"
                      fill="#5A2132"
                      fontSize="14"
                      fontWeight="900"
                      letterSpacing="-0.01em"
                    >
                      HELLO@STRAVAMANAGEMENT.COM
                    </text>
                  </svg>
                </a>
              </div>
              <div className="border-[2] my-[35px] lg:grid lg:grid-cols-2 lg:my-0 lg:col-span-3">
                <p className="text-[14px] lg:text-[15px]" style={{ color: "#5A2132", lineHeight: "1.65" }}>
                  We're hiring
                </p>
                <a
                  rel="noopener"
                  className="hover:opacity-[0.8]"
                  href="mailto:hello@stravamanagement.com?subject=Careers%20Inquiry"
                >
                  <svg
                    className="cursor-pointer mx-auto lg:mx-0 mt-[5px] w-[190px] lg:w-[230px] h-auto"
                    viewBox="0 0 230 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <text
                      textAnchor="middle"
                      fill="#5A2132"
                      fontSize="15"
                      fontWeight="900"
                      letterSpacing="-0.01em"
                    >
                      <tspan x="50%" y="20">
                        JOIN OUR
                      </tspan>
                      <tspan x="50%" y="42">
                        TEAM
                      </tspan>
                    </text>
                  </svg>
                </a>
              </div>
              <div className="grid h6 lg:block lg:row-start-3 lg:leading-[1.3]">
                <a
                  className="lg:block hover:opacity-[0.8]"
                  style={{ color: "#5A2132" }}
                  href="https://www.instagram.com/stravamanagement/"
                  rel="noopener"
                  target="_blank"
                >
                  Instagram
                </a>
                <a
                  className="lg:block hover:opacity-[0.8]"
                  style={{ color: "#5A2132" }}
                  href="https://www.linkedin.com/company/stravamanagement/"
                  rel="noopener"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="lg:block hover:opacity-[0.8]"
                  style={{ color: "#5A2132" }}
                  href="https://www.youtube.com/@stravamanagement"
                  rel="noopener"
                  target="_blank"
                >
                  YouTube
                </a>
              </div>
              <div className="mt-[20px] mb-[50px] lg:my-0 grid text-[12px] lg:row-start-3 lg:col-start-3 lg:col-span-4 lg:grid lg:grid-cols-4">
                <p className="h6 font-bold mt-[15px] lg:mt-0">&nbsp;</p>
                <p className="lg:col-span-3">&nbsp;</p>
                <p className="h6 font-bold" style={{ color: "#5A2132" }}>
                  Headquarters
                </p>
                <p
                  className="lg:col-span-3"
                  style={{ color: "#5A2132", opacity: 0.9, lineHeight: "1.4" }}
                >
                  <span className="font-bold">Strava Management Inc.</span>
                  <br />
                  722 Grand Central Drive,
                  <br />
                  Trenton, NJ 08619-2074
                </p>
              </div>
            </div>
          </div>
          <div
            className="hidden lg:block lg:col-start-3 lg:row-start-1 lg:col-span-1"
            style={{ backgroundColor: "rgba(90, 33, 50, 0.35)" }}
          ></div>
          <div
            className="lg:col-start-1 lg:row-start-1 lg:border-t-[1px] lg:border-b-[1px]"
            style={{
              borderColor: "rgba(90, 33, 50, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 25px",
              width: "100%",
              height: "100%",
              minHeight: "220px",
            }}
          >
            <img
              src={`${basePath}/images/footerlogo.png`}
              alt="Strava Management"
              style={{
                width: "85%",
                maxWidth: "380px",
                maxHeight: "190px",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
      <div className="text-center grid gap-[20px] lg:p-[35px] lg:pb-[25px]">
        <svg
          className="logotypeFooter w-full"
          viewBox="0 0 1350 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="50%"
            y="60%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#5A2132"
            fontSize="150"
            fontWeight="900"
            letterSpacing="-0.03em"
          >
            STRAVA
          </text>
        </svg>
        <div
          className="lg:flex lg:justify-between items-center text-[11px] font-medium"
          style={{ color: "#5A2132", opacity: 0.85 }}
        >
          <p>
            © 2026 Strava Management Inc. |{" "}
            <a
              href="https://www.stravamanagement.com"
              className="underline hover:opacity-80"
            >
              www.stravamanagement.com
            </a>
          </p>
          <p className="hidden lg:block">#AmazonEcosystem</p>
          <p className="hidden lg:block">#BrandStrategy</p>
          <p className="hidden lg:block">#GrowthManagement</p>
          <p className="hidden lg:block">#PortfolioExcellence</p>
        </div>
      </div>
    </footer>
  );
}
