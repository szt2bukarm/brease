import WhyBrease from "../whybrease/WhyBrease";
import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";

export default function Footer() {
    return (
        <footer className="w-full px-[24px] md:px-[90px] lg:px-[11vw] pt-[80px] bg-background-dark">
            <WhyBrease />
            <FooterNav />
            <FooterLogo />
        </footer>
    )
}