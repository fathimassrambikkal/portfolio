import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Contact() {
  const wordsRef = useRef([]);

  useEffect(() => {
    // Set all words initially invisible and below
    gsap.set(wordsRef.current, {
      opacity: 0,
      y: 30,
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    wordsRef.current.forEach((el) => {
      tl.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
        .to(el, {
          opacity: 0,
          y: -30,
          duration: 0.5,
          delay: 1,
          ease: 'power2.in',
        });
    });
  }, []);

  return (
    <div className=" relative xs:h-[60vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] bg-white">
      {/* Header with animated word */}
      <div className="ml-4 md:ml-20 flex flex-col text-[2rem] md:text-5xl sm:text-6xl mt-10 md:mt-16 font-semibold">
        <h2 className="flex items-center gap-4 h-[3.5rem] md:h-[5rem] relative overflow-hidden">
          <span className='relative transform translate-y-3 md:relative md:transform md:translate-y-0'>let's</span>

          {/* Container for rotating words */}
          <span className="relative inline-block w-[150px] h-full">
            <span
              ref={(el) => (wordsRef.current[0] = el)}
              className="absolute left-0 top-4 w-full text-gray-900"
            >
              create
            </span>
            <span
              ref={(el) => (wordsRef.current[1] = el)}
              className="absolute left-0 top-4 w-full text-gray-900"
            >
              build
            </span>
            <span
              ref={(el) => (wordsRef.current[2] = el)}
              className="absolute left-0 top-4 w-full text-gray-900"
            >
              work
            </span>
          </span>
        </h2>

        <h2 className="text-[#666666]">incredible work together</h2>
        <hr className="border-t border-gray-400 w-[80%] mt-4 mb-8" />
      </div>

      {/* Sitemap & Socials */}
      <div className="flex flex-row gap-40 md:translate-y-1 translate-y-8 md:ml-20 ml-10">
        <div className="flex flex-col leading-loose text-base md:text-sm space-y-1">
          <h2 className="text-gray-800 text-sm md:text-sm ">(Sitemap)</h2>
          <a href="#home"><span>Home</span></a>
          <a href="#about"><span>About</span></a>
          <span>Skills</span>
          <a href="#project"><span>Project</span></a>
          <a href="#contact"><span>Contact</span></a>
        </div>
        <div className="flex flex-col leading-loose text-base md:text-sm space-y-1">
          <h3 className="text-gray-800 text-sm md:text-sm">(Socials)</h3>
          <a href="https://www.linkedin.com/in/fathima-s-7b0499364/"><span>LinkedIn</span></a>
          <a href="https://github.com/fathimassrambikkal"><span>GitHub</span></a>
          <a href="mailto:fathimassrambikkal@gmail.com"><span>Email</span></a>
        </div>
      </div>

      {/* Background Name */}
      <h1 className="absolute transform -translate-x-2 translate-y-28 font-bold md:text-[16rem] sm:text-[10rem] text-[7rem] md:absolute md:bottom-20 md:left-10 leading-none">
        FATHIMA
      </h1>
    </div>
  );
}
