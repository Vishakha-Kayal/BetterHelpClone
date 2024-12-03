import React from "react";

const GraphicsDiv = () => {
  return (
    <div className="absolute bottom-0 w-full">
      <svg height="0" width="0">
        <defs>
          <pattern id="texture" x="0" y="0" width="1" height="1">
            <image
              className="w-[335px] h-[77px] md:w-[670px] md:h-[153px]"
              preserveAspectRatio="none"
              xlinkHref="//assets.betterhelp.com/betterhelp_two/css-elements/texture-wide.png?v=848b1f70243b"
            ></image>
          </pattern>
        </defs>
      </svg>

      <svg
        className="w-full h-12 md:hidden"
        preserveAspectRatio="none"
        viewBox="0 0 390 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#007481"
          d="M62 2.87795C37.1663 5.28371 16 5.44275 0 3.5V64H256V21.9319C186 13.1148 169.806 -7.56579 62 2.87795Z"
        ></path>
        <path
          className="opacity-75"
          d="M62 2.87795C37.1663 5.28371 16 5.44275 0 3.5V64H256V21.9319C186 13.1148 169.806 -7.56579 62 2.87795Z"
          style={{ fill: "#007481" }}
        ></path>
        <path
          className="fill-white"
          d="M274 0.294804C194.713 -3.68679 156.5 34.5301 0 2.80616V64H390V7.91262C344 13.5 324.057 2.80853 274 0.294804Z"
        ></path>
      </svg>

      <svg
        className="hidden w-full md:block h-[10.8rem]"
        preserveAspectRatio="none"
        viewBox="0 0 768 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#007481"
          d="M95.0625 6.61043C58.7791 10.3328 19.4708 7.11671 4 4.53203V72H380V26.9947C277.188 17.562 242.329 -8.49792 95.0625 6.61043Z"
        ></path>
        <path
          className="opacity-75"
          d="M95.0625 6.61043C58.7791 10.3328 19.4708 7.11671 4 4.53203V72H380V26.9947C277.188 17.562 242.329 -8.49792 95.0625 6.61043Z"
          style={{ fill: "url(#texture)" }}
        ></path>
        <path
          className="fill-white"
          d="M526.35 0.25852C364.771 5.22899 281.83 47.9605 0 3.0867V72H768V8.83734C705.722 22.1298 624.906 -2.77326 526.35 0.25852Z"
        ></path>
      </svg>

      <div
        className="absolute h-[3px] w-full bottom-0 -mb-px"
        style={{ backgroundColor: "rgb(255, 255, 255)" }}
      ></div>
    </div>
  );
};

export default GraphicsDiv;
