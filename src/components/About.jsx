import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Photo from "../assets/pic.jpg";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textContentRef = useRef(null);
  const aboutMeSpanRef = useRef(null);
  const headingRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const infoGridRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.set(
      [
        imageRef.current,
        aboutMeSpanRef.current,
        headingRef.current,
        paragraph1Ref.current,
        paragraph2Ref.current,
        infoGridRef.current,
      ],
      { opacity: 0, y: 50 }
    );

    const textRevealTimeline = gsap.timeline({ paused: true });
    textRevealTimeline
      .to(aboutMeSpanRef.current, { opacity: 1, duration: 0.5 }, 0)
      .to(headingRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.1)
      .to(paragraph1Ref.current, { opacity: 1, y: 0, duration: 0.7 }, 0.2)
      .to(paragraph2Ref.current, { opacity: 1, y: 0, duration: 0.7 }, 0.3)
      .to(infoGridRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.4);

    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(imageRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "easeOut",
        });
        textRevealTimeline.play();
      },
      onLeave: () => {
        gsap.to(imageRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          ease: "easeIn",
        });
        textRevealTimeline.reverse();
      },
      onEnterBack: () => {
        gsap.to(imageRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "easeOut",
        });
        textRevealTimeline.play();
      },
      onLeaveBack: () => {
        gsap.to(imageRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          ease: "easeIn",
        });
        textRevealTimeline.reverse();
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white text-gray-900 dark:bg-[#041b20] dark:text-white transition-all duration-700"
    >
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-blue-300/20 dark:bg-[#AD49E1]/15 blur-2xl rounded-full animate-float" />
        <div className="absolute bottom-1/3 right-1/5 w-20 h-20 sm:w-24 sm:h-24 bg-purple-300/20 dark:bg-[#7A1CAC]/20 blur-2xl rounded-full animate-float-delayed" />
        <div className="absolute top-2/3 left-1/5 w-24 h-24 sm:w-28 sm:h-28 bg-pink-200/20 dark:bg-[#EBD3F8]/20 blur-2xl rounded-full animate-float-slow" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-[400px]">
            <div
              className="relative w-full h-full rounded-lg overflow-hidden z-10"
              ref={imageRef}
            >
              <img
                src={Photo}
                alt="Profile"
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500 rounded-lg z-0 shadow-xl" />
          </div>

          {/* Text */}
          <div ref={textContentRef}>
            <div className="mb-4">
              <span
                className="text-blue-600 dark:text-blue-400 text-lg"
                ref={aboutMeSpanRef}
              >
                About Me
              </span>
            </div>

            <h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
              ref={headingRef}
            >
              A passionate developer creating amazing digital experiences
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6" ref={paragraph1Ref}>
              I’m a frontend developer passionate about crafting responsive,
              high-performance, and visually engaging web apps. With a solid
              grip on React, Next.js, and Tailwind CSS, I bring sleek UIs to
              life with smooth Framer Motion animations.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6" ref={paragraph2Ref}>
              I focus on clean code, accessibility, and creating user-first
              experiences that feel intuitive and fun. Always building, always
              leveling up — let’s create something awesome together! 🚀
            </p>

            <div className="grid grid-cols-2 gap-4" ref={infoGridRef}>
              <div>
                <h3 className="text-gray-900 dark:text-white font-bold mb-2">Name:</h3>
                <p className="text-gray-700 dark:text-gray-300">Nagraj Nandal</p>
              </div>

              <div>
                <h3 className="text-gray-900 dark:text-white font-bold mb-2">Email:</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  nagrajnandal43@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-gray-900 dark:text-white font-bold mb-2">Location:</h3>
                <p className="text-gray-700 dark:text-gray-300">Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
