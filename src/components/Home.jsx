import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import profileImg from "../assets/paapy.jpg";

export default function Home() {
  const h2Ref = useRef(null);
  const h2SpanRef = useRef(null);
  const h3Span1Ref = useRef(null); // "a"
  const h3Span2Ref = useRef(null); // "Frontend Developer"
  const h3Span3Ref = useRef(null); // "from"
  const h3Span4Ref = useRef(null); // "India"
  const h1Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // h2 title
      gsap.from(h2Ref.current, {
        y: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // h2 span (name)
      gsap.from(h2SpanRef.current, {
        y: -20,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "back.out(1.7)",
      });

      // h3 span 1 - "a" - bottom to top
      gsap.from(h3Span1Ref.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1.4,
        ease: "power2.out",
      });

      // h3 span 2 - "Frontend Developer" - top to bottom
      gsap.from(h3Span2Ref.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        delay: 1.6,
        ease: "power2.out",
      });

      // h3 span 3 - "from" - bottom to top
      gsap.from(h3Span3Ref.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1.8,
        ease: "power2.out",
      });

      // h3 span 4 - "India" - right to left
      gsap.from(h3Span4Ref.current, {
        x: 40,
        opacity: 0,
        duration: 0.8,
        delay: 2,
        ease: "power2.out",
      });

      // h1
      gsap.from(h1Ref.current, {
        y: 50,
        opacity: 0,
        duration: 1.4,
        delay: 2.5,
        ease: "power4.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-x-hidden  bg-white font-inter flex flex-col px-4 py-20 text-center">
      {/* Profile Section */}
      <div className="flex p-8 ">
        <img
          src={profileImg}
          alt="profile"
          className="w-20 h-20 rounded-full"
        />
        <div className="flex flex-col text-start p-4">
          <span className="md:text-2xl">Fathima</span>
          <span className="md:text-sm text-gray-400">Frontend Developer</span>
        </div>
      </div>

      {/* Hero Text Section */}
      <div className="text-start space-y-4 md:space-y-8 text-zinc-700 overflow-hidden">
        <h2 ref={h2Ref} className="text-3xl md:text-7xl">
          Hi! I'm{" "}
          <span
            ref={h2SpanRef}
            className="text-gray-950 bg-white rounded-full shadow-lg px-3 py-1 md:px-6 md:py-2 text-2xl md:text-5xl tracking-tighter font-manrope"
          >
            Fathima
          </span>
        </h2>

        <h3 className="text-3xl md:text-7xl flex flex-wrap gap-2">
          <span ref={h3Span1Ref}>a</span>
          <span
            ref={h3Span2Ref}
            className="text-white bg-gray-950 rounded-full shadow-2xl px-3 py-1 md:px-6 md:py-2 text-2xl md:text-5xl tracking-tighter font-manrope"
          >
            Frontend Developer
          </span>
          <span ref={h3Span3Ref}>from</span>
          <span
            ref={h3Span4Ref}
            className="bg-transparent border border-zinc-600 text-zinc-950 rounded-full text-2xl md:text-5xl px-3 py-1 md:px-6 md:py-2 tracking-tighter font-manrope"
          >
            India
          </span>
        </h3>

        <h1 ref={h1Ref} className="text-3xl md:text-7xl">
          Pixels with purpose <br />
          I turn clean ui into smooth <br />
          responsive experiences
        </h1>
      </div>
    </div>
  );
}
