import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Preloader({ onComplete }) {
  const preloaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll('.word');

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          y: '-100%',
          duration: 1.2,
          ease: 'power4.inOut',
          onComplete: onComplete,
        });
      },
    });

    tl.fromTo(
      words,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.25,
        duration: 0.8,
        ease: 'power3.out',
      }
    );
  }, [onComplete]);

  const text = 'Building Interfaces That Move You';
  const splitWords = text.split(' ').map((word, index) => (
    <span key={index} className="word inline-block mx-2 text-white">
      {word}
    </span>
  ));

  return (
    <div
      ref={preloaderRef}
      className="fixed top-0 left-0 w-full h-screen bg-black z-50 flex items-center justify-center"
    >
      <h2
        ref={textRef}
        className="xs:text-lg sm:text-xl md:text-2xl lg:text-2xl font-light tracking-tighter text-gray-600"
      >
        {splitWords}
      </h2>
    </div>
  );
}
