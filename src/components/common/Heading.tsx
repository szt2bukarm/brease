import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import SplitText from "gsap/dist/SplitText"
import { useRef } from "react"
gsap.registerPlugin(SplitText)

export default function Heading({children}: Readonly<{children: React.ReactNode}>) {
    const headingRef = useRef<HTMLHeadingElement>(null)

    useGSAP(() => {
        let split = new SplitText(headingRef.current, {type: "words"})
        gsap.set(split.words, {opacity: 0})
        gsap.fromTo(split.words,
             {opacity: 0, filter: "blur(10px)"},
             {opacity: 1, filter: "blur(0px)", duration: 1.75, stagger: 0.075, ease:"power4.out",
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 70%",
            }
        })
    })

    return (
        <h2 ref={headingRef} className="font-rale-grotesk-base-medium text-h2-mobile leading-h2-mobile md:text-h2-tablet md:leading-h2-tablet lg:text-h2-desktop lg:leading-h2-desktop mb-[16px] text-heading tracking-[-1px]">{children}</h2>
    )
}