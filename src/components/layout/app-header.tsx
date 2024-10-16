import Link from "next/link";
import React from "react";

export default function AppHeader() {
  return (
    <header className="w-full bg-secondary py-5">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-2 px-4 md:px-0">
        <div className="flex items-center md:col-span-1 max-h-6">
          <Link
            href={"/"}
            aria-label="BrainWave"
            className="text-2xl font-black text-white"
          >
            Brainwave.io
          </Link>
        </div>

        <div className="flex items-center justify-end gap-3 md:col-span-1">
          <div className="block md:hidden"></div>
          <ul className="mx-auto hidden items-center justify-center px-2 md:col-span-3 md:flex md:gap-8 text-white">
            <li>Demo</li>
            <li>Page</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
          <Link
            className="hidden md:inline-flex items-center justify-center rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-0 text-white h-10 px-6 py-2 bg-primary font-bold"
            href={"/sign-in"}
            target="_blank"
          >
            Start a free trial
          </Link>
        </div>
      </div>
    </header>
  );
}
