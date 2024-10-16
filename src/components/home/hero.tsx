import Link from "next/link";
import React from "react";
import { Icons } from "../icon";
import Image from "next/image";
import { Assets } from "@/lib/asset";

export default function HomeHero() {
  return (
    <div className="bg-secondary w-full pt-14 pb-36 md:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row md:items-center gap-8 md:gap-4 px-4 md:px-0 relative ">
        <div className="hidden md:block absolute -top-8 -right-8 w-full h-96 bg-hero-dots bg-no-repeat bg-right-top bg-clip-border bg-scroll bg-[length:200px_200px]"></div>
        <div className="w-full max-w-[700px] z-10">
          <div className="flex flex-col">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-8">
              Get more visitors, get more sales.
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next consultancy website within few minutes.
            </p>
            <div>
              <Link
                className="inline-flex items-center justify-center rounded-lg text-lg transition-colors focus-visible:outline-none focus-visible:ring-0 h-10 text-success font-bold"
                href={"/sign-in"}
                target="_blank"
              >
                Start a free trial <Icons.ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="w-full relative"> */}
        <div className="relative w-full h-[390px]">
          <Image
            src={Assets.HERO_BG}
            alt="hero"
            fill={true}
            // width={540}
            // height={390}
            className="object-contain"
          />
          <button className="absolute top-[calc(50%-92px/2)] rounded-full left-[calc(50%-92px/2)] h-[92px] w-[92px] inline-flex items-center justify-center bg-white transition-colors">
            <Icons.Play className="text-primary" />
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
