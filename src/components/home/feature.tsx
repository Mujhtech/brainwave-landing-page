import React, { Fragment } from "react";
import { Icons } from "../icon";
import Link from "next/link";
import { cn } from "@/lib/util";
import Image from "next/image";
import { Assets } from "@/lib/asset";

export default function Feature() {
  return (
    <Fragment>
      <ContentCard
        className="flex-col-reverse md:flex-row-reverse"
        title="Track your progress with our advanced site."
        description="We share common trends and strategies for improving your rental income and making sure you stay in high demand."
        image={
          <div className="h-[424px] w-[600px] relative">
            <Image
              src={Assets.CONTENT_1}
              alt="Track your progress with our advanced site."
              fill={true}
              className=""
            />
          </div>
        }
      />
      <ContentCard
        className="flex-col-reverse"
        title="Understand your visitors fast. Take quick actions."
        description="We share common trends and strategies for improving your rental income and making sure you stay in high demand."
        image={
          <div className="h-[468px] w-[509px] relative">
            <Image
              src={Assets.CONTENT_2}
              alt="Understand your visitors fast. Take quick actions."
              fill={true}
              className=""
            />
          </div>
        }
      />
      <ContentCard
        className="flex-col-reverse md:flex-row-reverse"
        title="Make your customers happy by giving services."
        description="We share common trends and strategies for improving your rental income and making sure you stay in high demand."
        image={
          <div className="h-[511px] w-[450px] relative">
            <Image
              src={Assets.CONTENT_3}
              alt="Make your customers happy by giving services."
              fill={true}
              className=""
            />
          </div>
        }
      />
    </Fragment>
  );
}

const ContentCard = ({
  title,
  description,
  image,
  className,
}: {
  title: string;
  description: string;
  image: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="max-w-6xl mx-auto w-full py-20">
      <div
        className={cn(
          "flex flex-col md:flex-row md:items-center md:justify-between",
          className
        )}
      >
        <div className="flex flex-col w-full max-w-[32rem] px-4 md:px-0">
          <h3 className="text-5xl font-bold mb-4">{title}</h3>
          <p className="text-lg">{description}</p>
          <div className="mt-8">
            <Link
              className="inline-flex items-center justify-center rounded-lg text-lg transition-colors focus-visible:outline-none focus-visible:ring-0 h-10 text-primary font-bold"
              href={"/sign-in"}
              target="_blank"
            >
              Start a free trial <Icons.ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center relative w-full">
          {image}
        </div>
      </div>
    </div>
  );
};
