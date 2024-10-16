import { cn } from "@/lib/util";
import Link from "next/link";
import { Icons } from "./icon";

const StarterPlan = () => {
  return (
    <PricingCard
      title="Starter"
      price={19}
      features={
        <ul className="flex flex-col gap-4">
          <Item checked>Commercial License</Item>
          <Item checked>100+ HTML UI Elements</Item>
          <Item checked>01 Domain Support</Item>

          <Item checked={false}>6 Month Premium Support</Item>
          <Item checked={false}>Lifetime Updates</Item>
        </ul>
      }
    />
  );
};

const StandardPlan = () => {
  return (
    <PricingCard
      title="Standard"
      price={49}
      recommended
      features={
        <ul className="flex flex-col gap-4">
          <Item checked>Commercial License</Item>
          <Item checked>100+ HTML UI Elements</Item>
          <Item checked>Unlimited Domain Support</Item>
          <Item checked>6 Month Premium Support</Item>
          <Item checked>Lifetime Updates</Item>
        </ul>
      }
    />
  );
};

const PremiumPlan = () => {
  return (
    <PricingCard
      title="Premium"
      price={99}
      features={
        <ul className="flex flex-col gap-4">
          <Item checked>Commercial License</Item>
          <Item checked>100+ HTML UI Elements</Item>
          <Item checked>Unlimited Domain Support</Item>
          <Item checked>6 Month Premium Support</Item>
          <Item checked>Lifetime Updates</Item>
        </ul>
      }
    />
  );
};

const PricingCard = ({
  recommended,
  title,
  features,
  price,
}: {
  recommended?: boolean;
  title: string;
  features: React.ReactNode;
  price?: number;
}) => {
  return (
    <div className="bg-white flex flex-col py-8 px-10 rounded-xl mx-4 md:mx-0">
      <div className="flex flex-col mb-8">
        <p className="font-bold text-sm text-primary uppercase">{title}</p>
        <h1 className="mt-8 mb-2 text-4xl font-black text-secondary">
          <span className="text-lg">$</span>
          {price != undefined ? `${price}` : "Custom"}
          <span className="text-sm font-medium ">/ month</span>
        </h1>
        <p className="text-sm text-secondary">billed monthly</p>
      </div>
      <div>{features}</div>
      <div className="mt-6 flex flex-col gap-2">
        <Link
          className={cn(
            "inline-flex items-center justify-between rounded-lg text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-0 h-11 px-5",
            recommended
              ? "text-white bg-primary"
              : "text-primary bg-primary-light"
          )}
          href={"/sign-in"}
          target="_blank"
        >
          Start Free Trial <Icons.ArrowRight className="ml-1 h-4 w-4" />
        </Link>
        <p className="text-muted-foreground text-xs">No credit card required</p>
      </div>
    </div>
  );
};

const Item = ({
  checked,
  children,
}: {
  checked: boolean;
  children: React.ReactNode;
}) => {
  return (
    <li className="flex items-center gap-2">
      {checked ? (
        <Icons.Check className="h-4 w-4 text-success" />
      ) : (
        <Icons.Cancel className="h-4 w-4 text-muted-foreground" />
      )}
      <div className={cn("text-sm", checked ? "" : "text-muted-foreground")}>
        {children}
      </div>
    </li>
  );
};

export { StarterPlan, StandardPlan, PremiumPlan };
