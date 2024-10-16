import { Assets } from "@/lib/asset";
import { cn } from "@/lib/util";
import Image from "next/image";
import React from "react";

export default function Partner() {
  return (
    <div className="py-10 md:py-16 border-b border-[#E6ECF1]">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-0">
          <PartnerCard
            label=""
            image={Assets.PARTNER_1}
            className="!h-6 !w-[9rem]"
          />
          <PartnerCard
            label=""
            image={Assets.PARTNER_2}
            className="!h-8 !w-[9rem]"
          />
          <PartnerCard
            label=""
            image={Assets.PARTNER_3}
            className="!h-7 !w-[7.5rem]"
          />
          <PartnerCard
            label=""
            image={Assets.PARTNER_4}
            className="!h-9 !w-[7rem]"
          />
          <PartnerCard
            label=""
            image={Assets.PARTNER_5}
            className="!h-7 !w-24"
          />
          <PartnerCard
            label=""
            image={Assets.PARTNER_6}
            className="!h-8 !w-[7.5rem]"
          />
        </div>
      </div>
    </div>
  );
}

const PartnerCard = ({
  label,
  image,
  className,
}: {
  label: string;
  image: string;
  className?: string;
}) => {
  return (
    <div className={cn("h-8 w-24 relative", className)}>
      <Image
        src={image}
        alt={label}
        fill={true}
        className="obbject-contain grayscale"
      />
    </div>
  );
};
