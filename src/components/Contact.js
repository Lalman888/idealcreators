import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact-me relative">
        <div className="xl:max-w-[1190px] lg:max-w-[1018px] mini:max-w-[calc(90%+20px)] mini:flex-col small:max-w-[440px] sm:max-w-[580px] h-full mx-auto flex relative ">
          <div className="w-1/2 mini:w-full p-2 ">
            <div className="w-full pr-[12%] ">
              <div className="p-[10px] flex flex-col ">
                <div className="pb-5 ">
                  <p className="text-white text-[72px] mini:text-[50px] mini:leading-[65px] font-bold leading-[80px]">
                    Let’s work together
                  </p>
                </div>
                <div className="text-left text-white text-lg pb-12 ">
                  <p>
                    Tell us about your project! Let’s seize the opportunity of a
                    crypto winter and be ready for the bull run!
                  </p>
                </div>
                <div className="pt-3">
                  <a href="https://t.me/Ideal_Creators_Team">
                    <div
                      className="py-[13px] px-[27px] h-[49px]  justify-center items-center touch-btn w-[160px] gap-2 rounded-[5px] font-medium text-xs text-white flex"
                      style={{ letterSpacing: ".2px" }}
                    >
                      <div>
                        <span>GET IN TOUCH</span>
                      </div>
                      <div className="flex  ">
                        <svg
                          version="1.0"
                          xmlns="http://www.w3.org/2000/svg"
                          
                          width="6.000000pt"
                          height="12.000000pt"
                          viewBox="0 0 604.000000 980.000000"
                          preserveAspectRatio="xMidYMid meet"
                          className="fill-white w-[6px] h-[14px]"
                        >
                          <g
                            transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)"
                            // fill="#000000"
                            stroke="none"
                          >
                            <path
                              d="M421 9419 c-221 -209 -401 -385 -399 -389 2 -5 988 -933 2191 -2064
1203 -1130 2188 -2058 2188 -2062 1 -3 -986 -933 -2193 -2067 -1206 -1134
-2193 -2065 -2193 -2070 0 -5 180 -180 400 -388 l400 -378 35 33 c19 18 1009
948 2200 2065 2528 2373 2974 2792 2978 2802 4 9 -286 282 -2948 2780 -1185
1112 -2178 2044 -2206 2071 l-50 48 -403 -381z"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 mini:w-full p-2">
             <div className="w-full">
                <div className="-ml-[59px] mini:-ml-[3px] -mr-[11px] mini:-mr-[8px] ">
                   <div className="w-full">
                    <img src="https://dexlegion.com/wp-content/uploads/2020/11/work-together.png" alt="work" />
                   </div>

                </div>
             </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
