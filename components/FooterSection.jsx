export default function FooterSection() {
  return (
    <footer className="border-t-[1px] lg:border-t-0 pt-[15px] lg:pt-[0] pb-[10px] lg:pb-0 border-black px-[15px] grid gap-[25px] lg:gap-0 mx-auto lg:px-0">
      <div>
        <div className="grid lg:grid-cols-[30vw_10px_1px_10px_auto] xl:grid-cols-[36vw_10px_1px_10px_auto] text-center lg:text-left">
          <div className="lg:col-start-5 lg:border-t-[1px] lg:border-b-[1px] lg:border-black lg:p-[35px] xl:p-[50px]">
            <div className="lg:grid lg:grid-cols-6 lg:grid-rows-[auto_100px_auto] xl:grid-rows-[auto_200px_auto]">
              <div className="lg:col-span-3">
                <p className="text-[16px]">Send us a brief</p>
                <a href="mailto:stravamangmnet@gmail.com" className="h4">
                  <svg
                    className="cursor-pointer hover:opacity-[0.8] mx-auto lg:mx-0 mt-[5px] w-[187px] lg:w-[278px] h-auto"
                    viewBox="0 0 280 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <text
                      x="0"
                      y="15"
                      fill="#1D1D1D"
                      fontSize="14"
                      fontWeight="900"
                      letterSpacing="-0.01em"
                    >
                      STRAVAMANGMNET@GMAIL.COM
                    </text>
                  </svg>
                </a>
              </div>
              <div className="border-[2] my-[35px] lg:grid lg:grid-cols-2 lg:my-0 lg:col-span-3">
                <p className="text-[16px]">We're hiring</p>
                <a
                  rel="noopener"
                  className="hover:opacity-[0.8]"
                  target="_blank"
                  href="#contact"
                >
                  <svg
                    className="mx-auto lg:mt-0 mt-[10px]"
                    width="164"
                    height="51"
                    viewBox="0 0 164 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <text
                      x="50%"
                      y="55%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fill="#1D1D1D"
                      fontSize="13"
                      fontWeight="900"
                      letterSpacing="-0.02em"
                    >
                      WELCOME TO THE STRAVA
                    </text>
                  </svg>
                </a>
              </div>
              <div className="grid h6 lg:block lg:row-start-3 lg:leading-[1.3]">
                <a
                  className="lg:block hover:opacity-[0.8]"
                  href="https://www.instagram.com/agence_rebellion/"
                  rel="noopener"
                  target="_blank"
                >
                  Instagram
                </a>
                <a
                  className="lg:block hover:opacity-[0.8]"
                  href="https://www.linkedin.com/company/agence-rebellion/"
                  rel="noopener"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="lg:block hover:opacity-[0.8]"
                  href="https://www.youtube.com/@agencerebellion1855"
                  rel="noopener"
                  target="_blank"
                >
                  YouTube
                </a>
              </div>
              <div className="mt-[20px] mb-[50px] lg:my-0 grid text-[12px] lg:row-start-3 lg:col-start-3 lg:col-span-4 lg:grid lg:grid-cols-4">
                <p className="h6 font-bold mt-[15px] lg:mt-0">&nbsp;</p>
                <p className="lg:col-span-3">&nbsp;</p>
                <p className="h6 font-bold">Paris</p>
                <p className="lg:col-span-3">
                  28 rue Boissy d’Anglas, 8ème
                </p>
                <p className="h6 font-bold mt-[15px] lg:mt-0">
                  Marseille
                </p>
                <p className="lg:col-span-3">55 rue Marignan, 7ème</p>
              </div>
            </div>
          </div>
          <div className="bg-black hidden lg:block lg:col-start-3 lg:row-start-1 lg:col-span-1"></div>
          <div className="lg:col-start-1 lg:row-start-1 lg:border-t-[1px] lg:border-b-[1px] lg:border-black grid place-items-center">
            <svg
              className="lg:h-[200px]"
              viewBox="0 0 485 379"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M457.548 161.92L457.6 161.894L430.089 108.017L402.578 54.1397L402.527 54.1655L375.266 0.77002L322.292 27.8161L270.608 54.1999L243.338 0.795832L189.539 28.2635L138.896 54.1224L111.747 0.950677L54.8672 29.9926L0.989998 57.4946L28.1738 110.744L55.6844 164.621L82.8682 217.87L110.052 271.119L137.554 324.979L137.494 325.014L165.004 378.891L218.882 351.38L191.38 297.52L191.44 297.486L164.256 244.237L164.144 244.013L220.026 215.479L247.339 268.969L298.678 242.757L352.908 215.066L380.479 269.063L431.397 243.067L484.99 215.702L457.531 161.92H457.548ZM402.759 188.501L353.364 213.724L326.077 160.285L270.952 188.433L220.525 214.18L193.444 161.146L136.642 190.144L109.57 137.119L82.3864 83.8784L138.148 55.4042L165.529 109.032L217.29 82.6052L270.083 55.6537L297.585 109.514L349.424 83.0439L376.221 135.527L403.163 188.295L402.751 188.501H402.759Z"
                fill="#1B1B1B"
              />
            </svg>
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
            fill="#1D1D1D"
            fontSize="150"
            fontWeight="900"
            letterSpacing="-0.03em"
          >
            STRAVA
          </text>
        </svg>
        <div className="lg:flex lg:justify-between text-[10px]">
          <p>
            {" "}
            ©2024{" "}
            <a href="/en/legal" className="">
              Legal &amp; Cookies
            </a>
          </p>
          <p className="hidden lg:block">#Trends</p>
          <p className="hidden lg:block">#Brand strategy</p>
          <p className="hidden lg:block">#branding</p>
          <p className="hidden lg:block">#Advertising</p>
          <p className="hidden lg:block">#brand content</p>
          <p className="hidden lg:block">#activations</p>
        </div>
      </div>
    </footer>
  );
}
