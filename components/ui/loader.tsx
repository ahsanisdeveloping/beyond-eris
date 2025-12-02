"use client";
import React from "react";

export function Loader({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className || ""}`}>
      <span className="inline-block w-6 h-6 rounded-full border-2 border-current border-t-transparent animate-spin" />
    </div>
  );
}

export default Loader;
