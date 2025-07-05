import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function NavMobileButton({opened,onClick} : {
    opened : boolean,
    onClick : () => void
}) {
    const hambugerRef = useRef<HTMLDivElement[]>([])

    const openAnim = () => {
        gsap.to(hambugerRef.current[0], {
            y: 2.5,
            duration: 0.1
        })
        gsap.to(hambugerRef.current[1], {
            y: -2.5,
            duration: 0.1
        })

        gsap.to(hambugerRef.current[0], {
            rotate: 45,
            duration: 0.1,
            delay: 0.1
        })
        gsap.to(hambugerRef.current[1], {
            rotate: -45,
            duration: 0.1,
            delay: 0.1
        })
    }

    const closeAnim = () => {
        gsap.to(hambugerRef.current[0], {
            rotate: 0,
            duration: 0.1
        })
        gsap.to(hambugerRef.current[1], {
            rotate: 0,
            duration: 0.1
        })

        gsap.to(hambugerRef.current[0], {
            y: 0,
            duration: 0.1,
            delay: 0.1
        })
        gsap.to(hambugerRef.current[1], {
            y: 0,
            duration: 0.1,
            delay: 0.1
        })
    }

    useGSAP(() => {
        opened ? openAnim() : closeAnim()
    },[opened])

    return (
        <button onClick={onClick} className={`cursor-pointer group flex md:hidden justify-center items-center w-[36px] h-[36px]  rounded-[12px] mr-[16px] hover:bg-white transition duration-300 ease-in-out ${opened ? "bg-black" : "bg-white/10"}`}>
            
            {/* hamburger button */}
            <div className="flex flex-col gap-[4px]">
                <div ref={el => hambugerRef.current[0] = el} className="w-[16px] h-[1px] bg-white group-hover:bg-black transition duration-300 ease-in-out"></div>
                <div ref={el => hambugerRef.current[1] = el} className="w-[16px] h-[1px] bg-white group-hover:bg-black transition duration-300 ease-in-out"></div>
            </div>

        </button>
    )
}