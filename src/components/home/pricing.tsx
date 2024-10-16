"use client";

import React, { useState } from "react";
import { PremiumPlan, StandardPlan, StarterPlan } from "../plan";
import Testimonial from "../testimonial";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };
  return (
    <div className="bg-[#ECF2F7] py-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl text-secondary font-bold">
              Pricing & Plans
            </h1>
            <p className="text-muted-foreground text-center w-full max-w-md">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
            <div className="flex items-center gap-2">
              <PricingSwitch isYearly={isYearly} onToggle={togglePricing} />

              <div className="bg-primary-light text-primary font-bold rounded-full px-3 py-2">
                Save 25%
              </div>
            </div>
          </div>
          <div className="my-5"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StarterPlan />
            <StandardPlan />
            <PremiumPlan />
          </div>
          <div className="mt-20 mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
            <Testimonial />
            <Testimonial />
          </div>
        </div>
      </div>
    </div>
  );
}

interface PricingSwitchProps {
  isYearly: boolean;
  onToggle: () => void;
}

const PricingSwitch: React.FC<PricingSwitchProps> = ({
  isYearly,
  onToggle,
}) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <span
        className={`text-sm ${
          !isYearly ? "text-primary" : "text-muted-foreground"
        }`}
      >
        Monthly
      </span>
      <button
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 ${
          isYearly ? "bg-primary" : "bg-gray-200"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isYearly ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      <span
        className={`text-sm ${
          isYearly ? "text-primary" : "text-muted-foreground"
        }`}
      >
        Yearly
      </span>
    </div>
  );
};
