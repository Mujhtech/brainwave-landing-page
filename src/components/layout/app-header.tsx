import Link from "next/link";
import React from "react";

export default function AppHeader() {
  return (
    <header className="w-full bg-secondary py-5">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-2 px-4 md:px-0 items-center">
        <div className="flex items-center md:col-span-1 max-h-6">
          <Link
            href={"/"}
            aria-label="BrainWave"
            className="text-2xl font-black text-white"
          >
            Brainwave.io
          </Link>
        </div>

        <div className="flex items-center justify-end gap-6 md:col-span-1">
          <div className="block md:hidden"></div>
          <ul className="hidden items-center justify-end px-2 md:col-span-3 md:flex md:gap-8 text-white">
            <NavLink href="/demo">Demo</NavLink>
            <NavLink href="/page">Page</NavLink>
            <NavLink href="/support">Support</NavLink>
            <NavLink href="/contact">Contact</NavLink>
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

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-white hover:text-primary transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};
