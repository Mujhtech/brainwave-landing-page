import Feature from "@/components/home/feature";
import HomeHero from "@/components/home/hero";
import Partner from "@/components/home/partner";
import Pricing from "@/components/home/pricing";
import Service from "@/components/home/service";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HomeHero />
      <Partner />
      <Service />
      <Feature />
      <Pricing />
    </Fragment>
  );
}
