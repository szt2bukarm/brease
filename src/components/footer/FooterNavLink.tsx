export default function FooterNavLink({children} : {
    children : React.ReactNode}) {
    return (
        <li className="font-abc-diatype-regular cursor-pointer text-primary-footer hover:opacity-50 transition duration-300 ease-out">{children}</li>
    )
}