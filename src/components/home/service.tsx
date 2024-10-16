import React from "react";
import { Icons } from "../icon";

export default function Service() {
  return (
    <div>
      <div className="max-w-6xl mx-auto w-full py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 px-4 md:px-0">
          <ServiceCard
            icon={<Icons.Layer />}
            title="Organize your campaigns"
            description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
          />
          <ServiceCard
            icon={<Icons.Sync />}
            title="Manage customers"
            description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
          />
          <ServiceCard
            icon={<Icons.ChartBar />}
            title="Track progress fast"
            description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
          />
        </div>
      </div>
    </div>
  );
}

const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex gap-4">
      {icon}
      <div className="flex flex-col gap-3 w-full md:max-w-[300px]">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};
