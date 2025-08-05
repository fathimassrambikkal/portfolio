import React, { useRef, useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import gsap from 'gsap';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Projects', href: '#project' },
    { text: 'Contact', href: '#contact' },
  ];

  // Split text for animation
  const splitText = (text) =>
    text.split('').map((char, i) => (
      <span key={i} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  const animateHoverChars = (e) => {
    const chars = e.currentTarget.querySelectorAll('.char');
    gsap.fromTo(
      chars,
      { y: 0 },
      { y: -18, ease: 'back.out(2)', duration: 0.4, stagger: 0.02 }
    );
  };

  const openMenu = () => {
    setShowMenu(true);
    setTimeout(() => {
      setMenuOpen(true);
      document.body.style.overflow = 'hidden';

      gsap.fromTo(
        menuRef.current,
        { yPercent: -100 },
        { yPercent: 0, duration: 0.6, ease: 'power4.out' }
      );
    }, 10);
  };

  const closeMenu = () => {
    gsap.to(menuRef.current, {
      yPercent: -100,
      duration: 0.5,
      ease: 'power4.inOut',
      onComplete: () => {
        setMenuOpen(false);
        setShowMenu(false);
        document.body.style.overflow = '';
      },
    });
  };

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`flex justify-between items-center px-6 py-4 fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
          menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <p className="text-lg font-bold tracking-tight">FATHIMA</p>
        <button onClick={openMenu} className="text-3xl">
          <CiMenuFries />
        </button>
      </nav>

      {/* Fullscreen Menu */}
      {showMenu && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[999] h-screen bg-white/70 backdrop-blur-xl flex flex-col justify-center px-6 md:px-20 transition-all duration-500"
          style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
        >
          {/* Close Button on Top */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-4xl z-[1000]"
          >
            <IoMdClose />
          </button>

          {/* Menu Links */}
          <div className="flex flex-col gap-12 text-center md:text-left">
            {links.map((link, i) => (
              <div key={i}>
                <a
                  href={link.href}
                  className="text-[2.5rem] md:text-[5rem] font-light tracking-tight text-black inline-block overflow-hidden"
                  onMouseEnter={animateHoverChars}
                  onClick={closeMenu}
                >
                  {splitText(link.text)}
                </a>
                <div className="h-px bg-black w-[80%] mt-2 mx-auto md:mx-0" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
