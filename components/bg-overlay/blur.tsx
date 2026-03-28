"use client";

export default function Blur() {
  return (
    <div
      className={`fixed inset-0 p-1 w-full h-full backdrop-blur-[8px] pointer-events-none z-50 opacity-10 overlay-mask`}
    />
  );
}
