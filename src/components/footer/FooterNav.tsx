import FooterNavLink from "./FooterNavLink";

export default function FooterNav() {
    return (
        <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-[32px] lg:gap-0 lg:flex lg:justify-between lg:flex-row min-w-full mb-[64px]">

            <div className="flex flex-col max-w-[200px]">
                <p className="font-abc-diatype-bold text-white text-sm-desktop mb-[23px]">Product</p>
                <ul className="flex flex-col gap-[10px]">
                    <FooterNavLink>Brease v1</FooterNavLink>
                    <FooterNavLink>Section Editor</FooterNavLink>
                    <FooterNavLink>Page Builder</FooterNavLink>
                    <FooterNavLink>Features</FooterNavLink>
                    <FooterNavLink>Enterprise Edition</FooterNavLink>
                    <FooterNavLink>Try live demo</FooterNavLink>
                    <FooterNavLink>Changelog</FooterNavLink>
                </ul>
            </div>

            <div className="flex flex-col max-w-[200px]">
                <p className="font-abc-diatype-bold text-white text-sm-desktop mb-[23px]">Solution</p>
                <ul className="flex flex-col gap-[10px]">
                    <FooterNavLink>Static websites</FooterNavLink>
                    <FooterNavLink>Mobile applications</FooterNavLink>
                    <FooterNavLink>Corporate websites</FooterNavLink>
                    <FooterNavLink>For developers</FooterNavLink>
                    <FooterNavLink>For content creators</FooterNavLink>
                </ul>
            </div>

            <div className="flex flex-col max-w-[200px]">
                <p className="font-abc-diatype-bold text-white text-sm-desktop mb-[23px]">Resources</p>
                <ul className="flex flex-col gap-[10px]">
                    <FooterNavLink>Resource Center</FooterNavLink>
                    <FooterNavLink>How to get started</FooterNavLink>
                    <FooterNavLink>Meet the community</FooterNavLink>
                    <FooterNavLink>GitHub repository</FooterNavLink>
                    <FooterNavLink>Starters</FooterNavLink>
                    <FooterNavLink>Headless CMS Guide</FooterNavLink>
                </ul>
            </div>

            <div className="flex flex-col max-w-[200px]">
                <p className="font-abc-diatype-bold text-white text-sm-desktop mb-[23px]">Integrations</p>
                <ul className="flex flex-col gap-[10px]">
                    <FooterNavLink>View all</FooterNavLink>
                    <FooterNavLink>Next.js</FooterNavLink>
                    <FooterNavLink>Vue.js</FooterNavLink>
                    <FooterNavLink>Gatsby</FooterNavLink>
                    <FooterNavLink>Flutter.js</FooterNavLink>
                    <FooterNavLink>React.js</FooterNavLink>
                </ul>
            </div>

            <div className="flex flex-col max-w-[200px]">
                <p className="font-abc-diatype-bold text-white text-sm-desktop mb-[23px]">Company</p>
                <ul className="flex flex-col gap-[10px]">
                    <FooterNavLink>About us</FooterNavLink>
                    <FooterNavLink>Handbook</FooterNavLink>
                    <FooterNavLink>Careers</FooterNavLink>
                    <FooterNavLink>Partner program</FooterNavLink>
                    <FooterNavLink>Contact</FooterNavLink>
                    <FooterNavLink>Faq</FooterNavLink>
                </ul>
            </div>


        </div>
    )
}