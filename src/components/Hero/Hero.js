import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="hero-background relative">
      <div className="absolute overflow-hidden w-full left-0  rotate-180 wave-ani ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="elementor-shape-fill"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>
          <path
            className="elementor-shape-fill"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>
          <path
            className="elementor-shape-fill"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          ></path>
        </svg>
      </div>

      {/* Hero */}

      <div className="max-w-[1190px] h-full mx-auto flex relative ">
        <div className="w-full h-full p-[10px]">
          <div className="flex w-full h-full items-center">
            <div className="flex w-full flex-col ">
              <div className="flex w-full justify-center">
                <div className="hero-text">
                  <h1>Web3 Solutions</h1>
                </div>
              </div>
              <div className="flex w-full justify-center">
                <div className="hero-text" >
                  <h1 style={{fontFamily: 'Source Code Pro'}}>
                    <Typewriter
                      options={{
                        strings: ["JavaScript", "TypeScript", "Solidity"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="text-white text-xl font-normal">
                  AI-Powered Coding Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design */}
    </section>
  );
};

export default Hero;
