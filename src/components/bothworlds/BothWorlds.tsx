import Button from "../common/Button";
import BothWorldsCard from "./BothWorldsCard";

const cards = [
    {
        bgColor: "green",
        logoPos: "left",
        image: "1.png",
        label: "Page Builder",
        heading: "Visual editing meets structured content",
        text: "Brease gives content teams an intuitive page editor while keeping things clean under the hood for developers. One platform. Zero compromise",
    },
    {
        bgColor: "purple",
        logoPos: "right",
        image: "2.png",
        label: "Section Builder",
        heading: "Custom Sections, Infinite Flexibility",
        text: "Build modular sections once. Reuse, adapt, and scale them across any page — without touching code every time",
    },
]

export default function BothWorlds() {
    return (
        <div className="flex flex-col gap-[40px] lg:gap-[64px] bg-background pt-[80px] pb-[80px] lg:pb-[120px]">
            <div className="px-[24px] md:px-[90px] lg:px-[11vw] flex flex-col md:flex-row w-full justify-between">
                <div className="flex flex-col md:w-[453px] lg:w-[644px]">
                    <p className="font-abc-diatype-medium text-xs-mobile md:text-xs-tablet lg:text-xs-desktop mb-[8px] text-sublabel">PAGE BUILDER & SECTION EDITOR</p>
                    <h2 className="text-h2-mobile leading-h2-mobile md:text-h2-tablet md:leading-h2-tablet lg:text-h2-desktop lg:leading-h2-desktop mb-[16px] text-heading tracking-[-1px]">Both worlds fused together</h2>
                    <p className="text-md-mobile leading-md-mobile md:text-md-tablet md:leading-md-tablet lg:text-md-desktop lg:leading-md-desktop font-abc-diatype-regular text-subtext">From structured content to SDK APIs. The Content Operating System gives you full control to build, scale, and ship all the content applications your business needs—your way.</p>
                </div>
                <div className="h-full flex flex-col mt-[24px] md:mt-auto items-start">
                    <Button color="white" type="secondary" arrow={true}>Sites under Brease</Button>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-[16px] lg:gap-[32px] px-[24px] md:px-[90px] lg:px-[32px]">
                {cards.map((card, index) => (
                    <BothWorldsCard key={index} bgColor={card.bgColor} logoPos={card.logoPos} label={card.label} heading={card.heading} text={card.text} image={card.image} />
                ))}
            </div>
        </div>
    )
}