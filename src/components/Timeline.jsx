"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-[#041b20] font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10" />

      <div ref={ref} className="relative max-w-3xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            {/* Sticky title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#3B82F6] border-4 border-white dark:border-slate-900" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-[#3B82F6] dark:text-[#60A5FA]">
                {item.year}
              </h3>
            </div>

            {/* Timeline Card */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#3B82F6] dark:text-[#60A5FA]">
                {item.title}
              </h3>

              <motion.div
                style={{
                  scaleY: useTransform(scrollYProgress, [0, 1], [0.8, 1]),
                  opacity: useTransform(scrollYProgress, [0.05, 0.15], [0, 1]),
                  transformOrigin: "top center",
                }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900
                border border-gray-200 dark:border-slate-700
                p-6 rounded-2xl shadow-lg
                hover:shadow-2xl hover:scale-[1.02] transition-all duration-500
                relative overflow-hidden group"
              >
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                  {item.degree}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-500 italic mb-2">
                  {item.year}
                </p>
                <p className="text-md font-semibold text-[#2563EB] dark:text-[#93C5FD] mb-2">
                  {item.institution}
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 mb-3">
                  {item.description}
                </p>
              </motion.div>
            </div>
          </div>
        ))}

        {/* Scroll animation line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]
          bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
          from-transparent via-neutral-200 dark:via-neutral-700 to-transparent
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px]
            bg-gradient-to-t from-[#3B82F6] via-[#60A5FA] to-transparent
            rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
