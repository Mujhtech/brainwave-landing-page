import React from "react";
import AppFooter from "./app-footer";
import AppHeader from "./app-header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col relative ">
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
}
