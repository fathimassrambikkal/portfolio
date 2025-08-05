"use client";
import React, { useEffect, useState } from "react";

export function TextGenerateEffect({ words = "" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    setVisible(false);

    const timeout = setTimeout(() => {
      setVisible(true); // Fade starts
    }, 100); // Delay before fade

    const typing = setInterval(() => {
      setDisplayedText((prev) => prev + words.charAt(i));
      i++;
      if (i >= words.length) clearInterval(typing);
    }, 15);

    return () => {
      clearInterval(typing);
      clearTimeout(timeout);
    };
  }, [words]);

  return (
    <p
      className={`transition-opacity duration-1000 ease-in ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {displayedText}
    </p>
  );
}
