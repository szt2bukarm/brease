export default function Button({arrow,leftArrow = false,type = "primary",color = "transparent",children} : {
    arrow : boolean,
    leftArrow : boolean,
    type : string,
    color : string,
    children : React.ReactNode
}) {
    return (
    <button className={`
        group cursor-pointer min-h-[36px] py-[8px] px-[16px] radius-[100px] rounded-[12px] font-abc-diatype-bold flex gap-[16px] items-center transition duration-300 ease-out
        ${color === "black" && type === "primary" ? "bg-black text-white hover:bg-purple hover:text-black" : ""}
        ${color === "white" && type === "primary" ? "bg-white text-black hover:bg-purple hover:text-black" : ""}
        ${color === "white" && type === "secondary" ? "bg-background text-black hover:bg-black hover:text-white" : ""}
        ${color === "opaque-to-white" && type === "secondary" ? "bg-white/10 text-white hover:bg-white hover:text-black" : ""}
        ${color === "opaque-gray-to-white" && type === "secondary" ? "bg-[#F2F2F2] text-black hover:bg-black hover:text-white" : ""}
        ${color === "opaque-dark-to-white" && type === "secondary" ? "bg-[#2A2A2A] text-white hover:bg-white hover:text-black" : ""}
        ${color === "transparent" ? "bg-transparent text-white hover:text-purple" : ""}
    `}>
        {children}
        {arrow &&
        <svg className={`transition duration-300 ease-out 
            ${leftArrow ? 'rotate-180' : ''}
            ${color === "white" && type === "secondary" ? 'invert-0 group-hover:invert' : ''}
            ${color === "black" || color === "opaque" ? 'invert group-hover:invert-0' : ''}
            ${color === "opaque-to-white" ? 'invert group-hover:invert-0' : ''}
            ${color === "opaque-gray-to-white" ? 'invert-0 group-hover:invert' : ''}
            ${color === "opaque-dark-to-white" ? 'invert group-hover:invert-0' : ''}
            `} width="16" height="8" viewBox="0 0 16 8" stroke="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4H15M15 4L12 1M15 4L12 7"/>
        </svg>
        }
    </button>
    )
}