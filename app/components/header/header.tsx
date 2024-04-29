"use client";

/* eslint-disable @next/next/no-img-element */

export function Header({ options }: { options?: string }) {


  return (
    <div
      className={`bg-[#752878] z-10 fixed flex items-center justify-center p-4 w-full h-32 ${options}`}
    >
      <div className="bg-white w-min flex h-min flex-col justify-center rounded-sm border-2 border-[#45748B] items-center">
        <h1
          style={{ WebkitTextStroke: "0.1px #00000035" }}
          className="transition-all ease duration-700 text-[#4EB78D] text-3xl md:text-6xl tracking-wide font-extrabold px-4 drop-shadow-xl"
        >
          Vestibulinho
        </h1>
        <p className="text-[#752878] px-4">2º semestre 2024</p>
      </div>
    </div>
  );
}
