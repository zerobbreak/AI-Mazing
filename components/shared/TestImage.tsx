'use client';

import { useEffect, useState } from 'react';

export default function TestImage() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-50 overflow-hidden">
      {/* Title */}
      <div className="text-center pt-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
          AI-Powered Dashboard
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Revolutionize your academic workflows with AI tools.
        </p>
      </div>

      {/* Parallax Image */}
      <div
        className="absolute top-40 left-1/2 transform -translate-x-1/2"
        style={{
          transform: `translateY(${offsetY * 0.2}px) rotateY(-20deg)`,
        }}
      >
        <img
          src="rb_9558.png"
          alt="Dashboard"
          className="w-[90%] max-w-4xl rounded-lg shadow-2xl"
        />
      </div>

      {/* Scroll Prompt */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <p className="text-gray-500 text-sm animate-bounce">Scroll down to explore</p>
      </div>
    </div>
  );
}
