"use client"
import { useState } from "react";

export default function NavThemeSwitcher() {
    const [theme, setTheme] = useState("light");

    return (
        <div className="p-[4px] flex gap-[6px] bg-white/10 rounded-[12px]">
            <div className={`h-[28px] w-[28px] flex items-center justify-center rounded-[8px]
                    ${theme === "light" ? "bg-purple" : "" }
                `}>
            <img src="sun.svg" className={`w-[16px] ${theme === "light" ? "" : "invert"}`} />
            </div>
            <div className="h-[28px] w-[28px] flex items-center justify-center">
            <img src="moon.svg" className={`w-[12px] ${theme === "dark" ? "invert" : ""}`} />
            </div>
        </div>
    )
}