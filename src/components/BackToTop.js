import React,{useEffect, useState} from 'react'

const BackToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        } );
    } );
  return (
    <>
      <div class={`back_to_top_container ${show ? 'block':'hidden'} ease-in-out delay-100`}>
        <a href="#top" class="gt3_back2top show justify-center items-center flex" id="back_to_top">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="604.000000pt"
            height="980.000000pt"
            viewBox="0 0 604.000000 980.000000"
            preserveAspectRatio="xMidYMid meet"
            className="w-[14px] h-[20px] fill-[#0095fa] -rotate-90 "
          >
            <g
              transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)"
            //   fill="#000000"
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
        </a>
      </div>
    </>
  );
};

export default BackToTop;
