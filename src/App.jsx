import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';


import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import CustomCursor from "./components/CustomCursor";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  const [loading, setLoading] = useState(true);
  const smootherRef = useRef(null);

  useEffect(() => {
    if (!loading && !smootherRef.current) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.3,
        effects: true,
      });
    }
  }, [loading]);

  return (
     <>
       <CustomCursor />
    <div id="smooth-wrapper">
      <div id="smooth-content" className="scroll-smooth">
      
        {loading ? (
          <Preloader onComplete={() => setLoading(false)} />
        ) : (
          <>
            
            <Navbar />

            <section id="home">
              <Home />
            </section>

            <section id="about">
              <About />
            </section>

            <section id="project">
              <Project />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </>
        )}
      </div>
    </div>
    </>
  );
  
}
