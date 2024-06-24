"use client";

import { useEffect, useRef } from "react";

export default function MouseTracker({shouldExpand}: {shouldExpand: boolean}) {
    const tracker = useRef<HTMLDivElement>(null)
    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            if(tracker.current) {
                tracker.current.style.top = `${event.clientY}px`
                tracker.current.style.left = `${event.clientX}px`
            }
        })
    })
    return (
        <div ref={tracker} className={`w-[80px] h-[80px] rounded-full -translate-x-1/2 -translate-y-1/2  absolute mix-blend-difference bg-white pointer-events-none transition duration-700 ease-out ${shouldExpand && "scale-[2]"}`}></div>
    )
}
