"use client";
import { Provider, ClapButton } from "@lyket/react";

export default function Header() {
  return (
    <div className="relative mx-4 mt-6 mb-0 md:mx-20 md:mt-20 h-40 md:h-64 flex justify-center items-center shadow-lg 
    bg-gradient-to-r from-pink-200 via-pink-100 to-pink-300
    backdrop-brightness-105
    rounded-lg
">
      <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10 font-bold">
        <Provider
          apiKey={process.env.NEXT_PUBLIC_API_KEY}
          theme={{
            colors: {
              primary: "black",
              background: "black",
              text: "#000000",
              icon: "white",
              highlight: "orange"
            },
            fonts: {
              body: "monospace"
            }
          }}
        >
        </Provider>
      </div>

      <p className="text-center font-mono text-3xl md:text-7xl text-black">
        Navomi S Ramesh </p>
    </div>
  );
}
