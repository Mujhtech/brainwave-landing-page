"use client";
// import { TempoDevtools } from "tempo-devtools";
import { Fragment } from "react";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   if (process.env.NEXT_PUBLIC_TEMPO) {
  //     TempoDevtools.init();
  //   }
  // }, []);

  return <Fragment>{children}</Fragment>;
}
