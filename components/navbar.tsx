"use client";

import { FaDiscord, FaGithub } from "react-icons/fa";

export default function Navbar () {
    return (
        <nav className="border-b-4 border-neutral-500 justify-between flex items-center p-4 border-dashed w-full max-h-[10vh]">
            <h3 className="text-[1.6rem] text-neutral-400 uppercase">june 24</h3>
            <h1 className="text-[3rem] text-neutral-300">0xArmaan.</h1>
            <ul className="text-[1.6rem] text-neutral-400 flex gap-10">
                <li className="flex items-center">
                   [<FaGithub />&nbsp;github]
                </li>
                <li className="flex items-center">
                   [<FaDiscord />&nbsp;discord]
                </li>
            </ul>
        </nav>
    )
}
