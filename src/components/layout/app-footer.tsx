import Link from "next/link";
import React from "react";
import { Icons } from "../icon";
import { cn } from "@/lib/util";

const companyLinks = [
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/contact-us",
    label: "Contact Us",
  },
  {
    href: "/careers",
    label: "Careers",
  },
  {
    href: "/press",
    label: "Press",
  },
];

const productLinks = [
  {
    href: "/features",
    label: "Features",
  },
  {
    href: "/pricing",
    label: "Pricing",
  },
  {
    href: "/news",
    label: "News",
  },
  {
    href: "/help-desk",
    label: "Help Desk",
  },

  {
    href: "/support",
    label: "Support",
  },
];

const serviceLinks = [
  {
    href: "/digital-marketing",
    label: "Digital Marketing",
  },
  {
    href: "/content-writing",
    label: "Content Writing",
  },
  {
    href: "/seo-for-business",
    label: "SEO for Business",
  },
  {
    href: "/ui-design",
    label: "UI Design",
  },
];

const legaLinks = [
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
  },
  {
    href: "/terms-and-conditions",
    label: "Terms and Conditions",
  },
  {
    href: "/return-policy",
    label: "Return Policy",
  },
];

const contactLinks = [
  {
    href: "mailto:support@brainwave.io",
    label: "support@brainwave.io",
  },
  {
    href: "tel:+133-394-3439-1435",
    label: "+133-394-3439-1435",
  },
];

export default function AppFooter() {
  return (
    <footer className="w-full bg-secondary xl:pb-[20px]">
      <div className="max-w-6xl mx-auto w-full grid">
        <div className=" mt-36 mb-20 px-4 md:px-0 grid grid-cols-2 gap-6 md:grid-cols-5">
          <div className="order-2 flex flex-col gap-6">
            <p className="text-muted-foreground font-medium text-base">
              Company
            </p>
            <ul className="grid gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
          <div className="order-2 flex flex-col gap-6">
            <p className="text-muted-foreground font-medium text-base">
              Products
            </p>
            <ul className="grid gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
          <div className="order-2 flex flex-col gap-6">
            <p className="text-muted-foreground font-medium text-base">
              Services
            </p>
            <ul className="grid gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
          <div className="order-2 flex flex-col gap-6">
            <p className="text-muted-foreground font-medium text-base">Legal</p>
            <ul className="grid gap-3">
              {legaLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
          <div className="order-2 flex flex-col gap-6">
            <p className="text-muted-foreground font-medium text-base">
              Contact Us
            </p>
            <ul className="grid gap-3">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-6 px-4 md:px-0 border-t border-border flex items-center justify-between gap-3">
          <p className="text-left text-sm leading-4 text-muted-foreground">
            © 2024 Copyright, All Right Reserved, Made by Sejal_ui_ux with 💙
          </p>
          <ul className="flex gap-8">
            <li>
              <SocialLink
                href="https://x.com/brainwave"
                label="Twitter"
                icon={<Icons.X className="h-4 w-4 hover:text-primary" />}
                external
              />
            </li>
            <li>
              <SocialLink
                href="https://facebook.com/brainwave"
                label="Twitter"
                icon={<Icons.Facebook className="h-4 w-4 hover:text-primary" />}
                external
              />
            </li>
            <li>
              <SocialLink
                href="https://instagram.com/brainwave"
                label="Instagram"
                icon={
                  <Icons.Instagram className="h-4 w-4 hover:text-primary" />
                }
                external
              />
            </li>
            <li>
              <SocialLink
                href="https://linkedin.com/in/brainwave"
                label="LinkedIn"
                icon={<Icons.Linkedin className="h-4 w-4 hover:text-primary" />}
                external
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  label: string;
  external?: boolean;
  className?: string;
}

const FooterLink = ({
  href,
  label,
  external = false,
  className,
}: FooterLinkProps) => {
  const isExternal = external || href.startsWith("http");

  const externalProps = isExternal
    ? {
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <Link
      className={cn(
        "text-white text-lg inline-flex items-center hover:underline-offset-4 hover:underline",
        className
      )}
      href={href}
      {...externalProps}
    >
      {label}
    </Link>
  );
};

const SocialLink = ({
  href,
  label,
  external = true,
  className,
  icon,
}: FooterLinkProps & {
  icon: React.ReactNode;
}) => {
  return (
    <Link
      className={
        "text-white text-lg inline-flex items-center hover:underline-offset-4 hover:underline"
      }
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {icon}
    </Link>
  );
};
