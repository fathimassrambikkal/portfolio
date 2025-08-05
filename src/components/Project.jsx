import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import your images
import labaroImg1 from "../assets/labaro.png";
import labaroImg3 from "../assets/qatar.png";
import labaroImg4 from "../assets/tech.png";
import labaroImg5 from "../assets/applab.png";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const sectionsRef = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imageRefs.current.forEach((img, i) => {
        gsap.fromTo(
          img,
          {
            scale: 1,
          },
          {
            scale: 1.15, // Subtle zoom (not cropping)
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionsRef.current[i],
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const projectData = [
    {
      title: "Job portal for manual workers",
      image: labaroImg1,
      tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    },
    {
      title: "Qatar event",
      image: labaroImg3,
      tech: ["React", "Tailwind CSS", "GSAP"],
    },
    {
      title: "Tech event India",
      image: labaroImg4,
      tech: ["React", "Tailwind CSS", "GSAP", "API Integration"],
    },
    {
      title: "Invest qatar",
      image: labaroImg5,
      tech: ["React", "Tailwind CSS", "GSAP"],
    },
  ];

  return (
    <div className="bg-black text-white">
      <div className="flex p-8 relative right-4  ">
      <span className=" relative left-3 top-3 md:relative md:left-16 md:top-4 inline-flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full h-2 w-2 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_10px_3px_rgba(59,130,246,0.7)]"></span>
    </span>

        <h2 className="text-2xl md:text-4xl text-start ml-6 md:ml-20   tracking-tighter font-manrope">
          Projects
        </h2>
      </div>

      <p className="text-lg text-zinc-400 relative bottom-6 left-6 ml-4 md:ml-20 ">
        Built with clarity. Coded with care.
      </p>

      {projectData.map((project, i) => (
        <section
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className=" md:px-6 md:py-32 px-3 py-16 flex flex-col"
        >
          {/* Title and Tags */}
          <div className="w-full max-w-5xl ml-4 md:ml-8 mb-40">
            <h1 className="text-sm md:text-2xl mb-4 mt-10 md:mt-20 tracking-tighter font-manrope">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="border border-white/20 px-2 py-1 rounded-full text-sm bg-white/5 backdrop-blur-md text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center md:py-16">
            <img
              ref={(el) => (imageRefs.current[i] = el)}
              src={project.image}
              alt={project.title}
              className="w-full max-w-4xl rounded-2xl object-contain transition-all duration-500 ease-in-out"
              style={{ maxHeight: "90vh" }}
            />
          </div>
        </section>
      ))}
    </div>
  );
}
