export default function NavDropdown({children} : {
    children : React.ReactNode
}) {
    return (
        <div className="group cursor-pointer px-[8px] h-[80px] flex items-center justify-center gap-[8px] border-b-2 border-transparent hover:border-purple transition duration-300 ease-out">
            <span className="font-abc-diatype-bold text-white group-hover:text-purple transition duration-300 ease-out">{children}</span>
            <img src="downarrow.svg" className="w-[9px]" />
        </div>
    )
}