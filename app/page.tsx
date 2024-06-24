"use client";

import Hero from "@/components/hero";
import MouseTracker from "@/components/MouseTracker";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
    const [shouldExpand, setShouldExpand] = useState<boolean>(false);
    console.log(setShouldExpand);
  return (
    <main className="bg-black text-white min-h-screen w-full">
        <Navbar />
        <Hero setShouldExpand={setShouldExpand} />
        <Hero setShouldExpand={setShouldExpand} />
        <MouseTracker shouldExpand={shouldExpand} />
    </main>
  );
}
