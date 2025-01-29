import React from "react";

export function TailwindIndicator() {
  if (import.meta.env.PROD) return null;

  return (
    <div
      data-tailwind-indicator=""
      className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white"
    >
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden custom-lg:hidden">xl</div>
      <div className="hidden 2xl:block custom-lg:hidden">2xl</div>
      <div className="hidden custom-lg:block nest-hub:hidden">clg</div>
      <div className="hidden nest-hub:block nest-hub-max:hidden">nhub</div>
      <div className="hidden nest-hub-max:block">nhubmax</div>
    </div>
  );
}
