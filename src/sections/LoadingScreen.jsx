// src/components/LoadingScreen.jsx
import React, { useState, useEffect, useRef } from "react";
import "./LoadingScreen.css"; // This contains your custom animations

const MIN_DISPLAY_TIME = 3000; // 3 seconds minimum display

const LoadingScreen = () => {
  const [loaded, setLoaded] = useState(false);
  const fallbackRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const finishLoading = () => {
    clearTimeout(fallbackRef.current);
    const elapsed = Date.now() - startTimeRef.current;
    const remaining = MIN_DISPLAY_TIME - elapsed;
    if (remaining > 0) {
      setTimeout(() => setLoaded(true), remaining);
    } else {
      setLoaded(true);
    }
  };

  useEffect(() => {
    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
    }
    // Fallback: finish loading after 10 seconds if the load event never fires
    fallbackRef.current = setTimeout(finishLoading, 10000);

    return () => {
      window.removeEventListener("load", finishLoading);
      clearTimeout(fallbackRef.current);
    };
  }, []);

  if (loaded) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden">
      <div className="container mx-auto flex justify-between items-center relative w-[250px]">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
