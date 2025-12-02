"use client";
import React, { useState } from "react";
import Toast from "./toast";

export default function AddToCartButton({ title }: { title: string }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  return (
    <>
      <button onClick={handleClick} className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition">
        Add to Cart
      </button>
      <Toast message={`${title} added to cart`} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
