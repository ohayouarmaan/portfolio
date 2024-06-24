"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseTracker({shouldExpand}: {shouldExpand: boolean}) {
    const tracker = useRef<HTMLDivElement>(null)
    const [mousePosition, setMousePosition] = useState([0, 0]);
    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            const y = event.pageY;
            const x = event.pageX;
            const scrollLeft = (document.documentElement || document.body.parentNode || document.body).scrollLeft;
            const scrollTop = (document.documentElement || document.body.parentNode || document.body).scrollTop;
            setMousePosition([x - scrollLeft, y - scrollTop ]);
        })
    })
    return (
        <div style={{
            top: `${mousePosition[1]}px`,
            left: `${mousePosition[0]}px`
        }} ref={tracker} className={`w-[80px] h-[80px] rounded-full -translate-x-1/2 -translate-y-1/2  fixed mix-blend-difference bg-white pointer-events-none transition duration-700 ease-out ${shouldExpand && "scale-[2]"}`}></div>
    )
}
