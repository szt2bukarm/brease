import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"

export default function AIPromptCardGridBlock() {
    const blockRef = useRef<HTMLDivElement>(null)

    const mouseOver = (e) => {
        gsap.to(e.target, { opacity: 1, duration: 0.1})
    }

    const mouseOut = (e) => {
        gsap.to(e.target, { opacity: 0, duration: 1})
    }

    return (
        <div className="w-full h-full border-r-1 border-b-1 border-[#000] opacity-15">
            <div ref={blockRef} onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="w-full h-full bg-[#000] opacity-0" />
        </div>
    )
}
