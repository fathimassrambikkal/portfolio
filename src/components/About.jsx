"use client";
import React, { useEffect, useRef, useState } from "react";
import gsapLogo from "../assets/gsap.png";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function About() {
  const text = `A passionate frontend & UI developer dedicated to crafting clean, responsive, and user-focused web experiences. I value minimal design, seamless interactions, and continuous learning to build modern, functional, and beautiful digital products.`;

  const [showText, setShowText] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowText(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% is visible
      }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 md:px-20 py-32 bg-gray-200  font-poppins overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center mb-10">
        <span className="relative left-2 inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full h-2 w-2 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_10px_3px_rgba(59,130,246,0.7)]"></span>
        </span>

        <h2 className="text-gray-600 text-2xl md:text-4xl ml-4 font-semibold">
          About me
        </h2>
      </div>

      {/* Wrapper Box */}
      <div className="w-full h-[40rem] bg-gray-100/60 rounded-[2rem] shadow-2xl relative z-10 overflow-hidden">
        <div className="w-[99.2%] h-[39rem] mx-auto bg-gray-100/60 rounded-[2rem] shadow-2xl p-4 sm:p-6 md:p-8 absolute top-2 left-1 overflow-hidden">
          <div className="flex gap-5 md:gap-10 flex-col lg:flex-row ">
            {/* Left Card */}
            <div className="bg-white w-full lg:w-1/2 h-64 lg:h-96 overflow-hidden rounded-xl p-6 flex flex-col justify-start">
              <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">
                Fathima S
              </h3>
              <p className="text-sm text-gray-500 mb-3">Frontend Developer</p>
              <div
                ref={textRef}
                className={`text-base md:text-lg text-zinc-800 tracking-wide leading-relaxed font-semibold transition-opacity duration-1000 ease-in ${
                  showText ? "opacity-100" : "opacity-0"
                }`}
              >
                {showText && <TextGenerateEffect key="about-text" words={text} />}
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 text-zinc-800 flex flex-col justify-start items-center text-center w-full lg:w-1/3 h-80 md:h-96 overflow-hidden">
              <h3 className="text-base md:text-xl font-semibold mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-4 px-4 w-full">
                <i className="devicon-html5-plain text-xl md:text-4xl text-[#F16529] border p-4 rounded-2xl shadow-md"></i>
                <i className="devicon-css3-plain text-2xl md:text-4xl text-[#28A4D9] border p-4 rounded-2xl shadow-md"></i>
                <i className="devicon-javascript-plain text-xl md:text-4xl text-[#F7DF1E] border p-4 rounded-2xl shadow-md"></i>
                <i className="devicon-react-original text-xl md:text-4xl text-[#61DBFB] border p-4 rounded-2xl shadow-md"></i>
                <i className="devicon-tailwindcss-plain text-xl md:text-4xl text-[#38BDF8] border p-4 rounded-2xl shadow-md"></i>
                <i className="devicon-github-original text-xl md:text-4xl text-[#171515] border p-4 rounded-2xl shadow-md"></i>
                <i class="devicon-redux-original colored text-xl md:text-4xl text-[#171515] border p-4 rounded-2xl shadow-md"></i>
                <i className="devicon-git-plain text-xl md:text-4xl text-[#F1502F] border p-4 rounded-2xl shadow-md"></i>
                <div className="border p-4 rounded-2xl shadow-md">
                  <img
                    src={gsapLogo}
                    alt="GSAP Logo"
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
