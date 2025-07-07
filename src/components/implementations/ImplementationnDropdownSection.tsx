export default function ImplementationsDropdownSection({border,selected,title,onClick,children} : {
    border : boolean,
    selected : boolean,
    title : string,
    onClick : () => void,
    children : React.ReactNode
}) {
    return (
        <div onClick={onClick} className={`cursor-pointer group h-full py-[24px] lg:py-[32px] ${border ? "border-b border-[#DDDDDD]" : ""}`}>
            <p className={`group-hover:text-heading font-rale-grotesk-base-semibold text-h5-mobile leading-h5-mobile md:text-h5-tablet md:leading-h5-tablet lg:text-h5-desktop lg:leading-h5-desktop transition-all ease-in-out duration-300 ${selected ? 'text-heading mb-[12px]' : 'text-subtext mb-[0px]'}`}>{title}</p>
            <div className={`transition-all ease-in-out duration-300 overflow-hidden ${selected ? 'max-h-[144px]' : 'max-h-0'}`}>
                <p className="font-abc-diatype-regular text-md-desktop leading-md-desktop text-subtext">{children}</p>
            </div>
        </div>
    )
}
