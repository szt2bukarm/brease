import { useEffect, useState, useRef } from "react"
import AIPromptCardFeature from "./AIPromptCardFeature"
import AIPromptCardGridBlock from "./AIPromptCardGridBlock"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import AIPromptCardInputEmpty from "./AIPromptCardInputEmpty"
import AIPromptCardInput from "./AIPromptCardInput"

const features = [
    {
        icon: "pen-line",
        text: "Creating and Editing Pages"
    },
    {
        icon: "sparkles",
        text: "Build with AI"
    },
    {
        icon: "database",
        text: "Managing collections"
    },
    {
        icon: "between-horizontal",
        text: "Setup navigations"
    },
    {
        icon: "between-horizontal",
        text: "Replace content"
    }
]

export default function AIPromptCard({emptyInput,scaleVariant,showTabUnder} : {emptyInput : boolean,scaleVariant: number, showTabUnder : boolean}) {
    const [scale, setScale] = useState(1)
    const iconRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const featuresRef = useRef<HTMLDivElement[]>([]);
    const [transformOrigin, setTransformOrigin] = useState("center center")

    // Preserving your scale method as requested
    useEffect(() => {
        if (scaleVariant == 1) {
            const updateScale = () => {
                const width = window.innerWidth
                let baseWidth = 1440
                let minScale = 0.7

                if (width < 500) {
                    baseWidth = 750
                    minScale = 0.3
                }

                const newScale = Math.max(Math.min(width / baseWidth, 1), minScale)
                setScale(newScale)
            }
            updateScale()

            window.addEventListener("resize", updateScale)
            return () => window.removeEventListener("resize", updateScale)    
        }
    }, [])

    useEffect(() => {
        if (scaleVariant == 2) {
            const updateScale = () => {
                const width = window.innerWidth
                if (width < 1440) setTransformOrigin("right center");
                if (width < 1100) setTransformOrigin("center center");
                let baseWidth = 1440
                let minScale = 0.7

                if (width < 1100) {
                    baseWidth = 750
                    minScale = 0.4
                }

                const newScale = Math.max(Math.min(width / baseWidth, 1), minScale)
                setScale(newScale)
            }
            updateScale()

            window.addEventListener("resize", updateScale)
            return () => window.removeEventListener("resize", updateScale)    
        }
    }, [])

    useGSAP(() => {
        gsap.set([iconRef.current,...featuresRef.current], {scale: 0})
        gsap.set(textRef.current, {y: 20, filter: "blur(10px)", opacity: 0})
        gsap.to([iconRef.current,...featuresRef.current], {
            scale: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
                trigger: iconRef.current,
                start: "top 70%",
                end: "bottom 70%",
            }
        })
        gsap.to(textRef.current, {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: iconRef.current,
                start: "top 70%",
                end: "bottom 70%",
            }
        })
    })

    return (
        <div className="relative z-1 flex items-center justify-center" style={{ transform: `scale(${scale})`, transformOrigin: transformOrigin }}>
            {showTabUnder && 
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[230px] rounded-[12px] w-[500px] h-[50px] bg-background z-1"></div>
            }

            <div className="overflow-hidden relative min-w-[450px] max-w-[450px] bg-white rounded-[12px] z-5 scale-125 shadow-[0_21px_42px_-7px_rgba(62,52,69,0.16)]">
                
                <div className="grid grid-cols-31 grid-rows-9 border-b-1 border-[#DDDDDD] absolute w-full h-[130px] left-0 top-0 z-2 opacity-50">
                    {Array.from({ length: 279 }, (_, index) => (
                        <AIPromptCardGridBlock 
                            key={index} 
                        />
                    ))}
                </div>

                <div className="absolute w-full h-[130px] left-0 top-0 bg-gradient-to-b from-primary-footer to-transparent z-1 -translate-y-5 pointer-events-none"></div>
                <div className="absolute w-full h-[130px] left-0 top-0 bg-gradient-to-b from-transparent to-[#FFFFFF] z-3 pointer-events-none"></div>

                <div className="relative mx-[21px] py-[21px] flex gap-[21px] border-b-1 border-[#DDDDDD] z-5 pointer-events-none">
                    
                    <div ref={iconRef} className="p-[1px] max-w-[42px] max-h-[42px] rounded-[12px] md:rounded-[12px] bg-gradient-to-b from-[#EBECF0] to-[#D9DCE4] w-full h-full overflow-hidden shadow-[0_2px_4px_0px_rgba(62,52,69,0.16)]">
                        <div className="bg-white rounded-[12px] w-[42px] h-[42px] flex items-center justify-center">
                            <img src="/ai-star.svg" className="h-[21px]" />
                        </div>
                    </div>

                    <div ref={textRef} className="flex flex-col">
                    <p className="font-abc-diatype-medium text-primary text-[12px] leading-[17px] mb-[8px]">Interpreter Agent</p>
                    <p className="font-abc-diatype-medium text-[14px] text-heading leading-[21px]"><b>Hi there! Welcome to the Brease Headless CMS assistant.</b> I’m here to help you manage your content and navigate the CMS.</p>
                    </div>
                </div>

                <div className="p-[21px]">
                    <div className="w-full flex flex-col mb-[21px]">
                        <p className="font-abc-diatype-medium text-[14px] leading-[21px] text-heading mb-[10px] pl-[3px]">I can help you with tasks like:</p>

                        <div className="flex flex-wrap items-center gap-[8px]">
                            {features.map((feature, index) => (
                                <div ref={el => featuresRef.current[index] = el} key={index}>
                                    <AIPromptCardFeature icon={feature.icon} text={feature.text} />
                                </div>
                            ))}
                            <p ref={el => featuresRef.current[features.length] = el} className="font-abc-diatype-medium text-subtext text-[12px] leading-[17px] p-[7px]">and much more...</p>
                        </div>
                    </div>

                    {emptyInput && <AIPromptCardInputEmpty />}
                    {!emptyInput && <AIPromptCardInput />}

                </div>
            </div>
        </div>
    )
}