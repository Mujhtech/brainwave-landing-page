import React from "react";

export default function Testimonial() {
  return (
    <div className="flex flex-col items-start text-secondary px-4 md:px-0">
      <h1 className="text-primary text-7xl font-black">“</h1>
      <p className="font-bold text-2xl">
        “OMG! I cannot believe that I have got a brand new landing page after
        getting Omega. It was super easy to edit and publish.”
      </p>
      <div className="mt-6 flex items-center gap-1 text-lg">
        <h3 className="font-bold">Diego Morata</h3>
        <span className="font-normal text-sm">Web Developer</span>
      </div>
    </div>
  );
}
