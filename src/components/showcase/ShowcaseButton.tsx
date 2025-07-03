export default function ShowcaseButton({active = false, children} : {active : boolean, children : React.ReactNode}) {
    return (
        <button className={`cursor-pointer min-w-fit px-[16px] py-[8px] font-abc-diatype-regular text-sm-desktop border-1 rounded-[12px] transition duration-300 ease-out hover:border-purple ${active ? "bg-purple text-black border-purple" : "bg-white text-subtext border-showcaseborder"}`}>{children}</button>
    )
}