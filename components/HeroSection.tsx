"use client";
import React from "react";

export default function HeroSection() {
  return (
    <header className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white h-[100dvh]">
      <div className="max-w-4xl mx-auto py-20 px-6 text-center flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Beyond Eris Solutions</h1>
        <p className="mt-4 text-lg sm:text-xl text-emerald-100/90">Practical cloud and web solutions that scale with your business.</p>
      </div>
    </header>
  );
}
