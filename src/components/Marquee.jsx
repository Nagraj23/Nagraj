import React from "react";
import { useInView } from "react-intersection-observer";

const MarqueeCross = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`relative w-full h-[180px] bg-slate-900 overflow-hidden transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Inline keyframes */}
      <style>
        {`
          @keyframes scroll-left {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scroll-right {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
        `}
      </style>

      {/* Top Marquee - tilt right, scroll left */}
      <div
        className="absolute left-0 w-full"
        style={{
          top: "50%",
          transform: "translateY(-40%) rotate(5deg)",
        }}
      >
        <div className="whitespace-nowrap overflow-hidden">
          <div
            className="flex gap-12"
            style={{
              animation: "scroll-left 20s linear infinite",
              width: "200%",
            }}
          >
            <div className="flex gap-12 w-full text-xl font-bold uppercase tracking-wider text-white">
              <span>🚫 Excuses don't build futures</span>
              <span>⚡ Make it happen</span>
              <span>🧠 Mistakes guide, not define</span>
              <span>🏋️‍♂️ Work for it, don’t wish</span>
            </div>
            <div className="flex gap-12 w-full text-xl font-bold uppercase tracking-wider text-white">
              <span>🚫 Excuses don't build futures</span>
              <span>⚡ Make it happen</span>
              <span>🧠 Mistakes guide, not define</span>
              <span>🏋️‍♂️ Work for it, don’t wish</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee - tilt left, scroll right */}
      <div
        className="absolute left-0 w-full"
        style={{
          top: "50%",
          transform: "translateY(40%) rotate(-5deg)",
        }}
      >
        <div className="whitespace-nowrap overflow-hidden">
          <div
            className="flex gap-12"
            style={{
              animation: "scroll-right 20s linear infinite",
              width: "200%",
            }}
          >
            <div className="flex gap-12 w-full text-xl font-bold uppercase tracking-wider text-white">
              <span>💭 Think — don’t create the box</span>
              <span>🔥 Be real, think different</span>
              <span>🚀 Do it, they said you couldn’t</span>
              <span>👑 Don’t seek lessons, win</span>
            </div>
            <div className="flex gap-12 w-full text-xl font-bold uppercase tracking-wider text-white">
              <span>💭 Think — don’t create the box</span>
              <span>🔥 Be real, think different</span>
              <span>🚀 Do it, they said you couldn’t</span>
              <span>👑 Don’t seek lessons, win</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeCross;
