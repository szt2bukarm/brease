import Button from "../common/Button";
import BreaseKitCard from "./BreaseKitCard";

const cards = [
    {
        image: "1.png",
        title: "Hero Section",
        components: 44
    },
    {
        image: "2.png",
        title: "Team Section",
        components: 14
    },
    {
        image: "3.png",
        title: "Blog, Articles",
        components: 5
    },
    {
        image: "4.png",
        title: "CTA Sections",
        components: 12
    }
]

export default function BreaseKit() {
    return (
        <div className="relative px-[24px] md:px-[90px] lg:px-[11vw] bg-background">
            <div className="relative z-1 flex flex-col md:flex-row bg-white min-h-[512px] shadow-[0_40px_80px_-16px_rgba(62,52,69,0.16)]">

                {/* left col */}
                <div className="px-[24px] md:px-[64px] lg:px-[80px] py-[64px] flex flex-col min-h-full md:w-1/2 lg:w-full">

                    <div className="p-[8px] w-[48px] h-[48px] rounded-[12px] flex items-center justify-center shadow-[0px_1px_5px_rgba(62,52,69,0.2)] mb-[24px]">
                        <p className="font-abc-diatype-bold text-[24px] translate-x-[0.5px] bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(130deg, #005244 40%,#D8ABFF 65%)"}}>1.0</p>
                    </div>

                    <div className="w-full flex flex-wrap gap-x-[8px] lg:gap-x-[10px] mb-[16px]">
                        <div className="relative w-fit h-fit font-rale-grotesk-base-medium text-black text-h2-mobile leading-h2-mobile md:text-h2-tablet md:leading-h2-tablet lg:text-h2-desktop lg:leading-h2-desktop tracking-[-1px]">
                            <h2 className="relative z-1 h-fit">Brease Kit</h2> 
                            <img src="brush.svg" className="absolute -bottom-1 -left-1 md:left-0 md:bottom-0 lg:-bottom-2 lg:-left-3 lg:min-w-[270px]"/>
                        </div>
                        <h2 className="font-rale-grotesk-base-medium text-black text-h2-mobile leading-h2-mobile md:text-h2-tablet md:leading-h2-tablet lg:text-h2-desktop lg:leading-h2-desktop tracking-[-1px] h-fit">Templates</h2>
                    </div>

                    <p className="font-rale-grotesk-base-semibold text-heading text-h5-mobile leading-h5-mobile md:text-h5-tablet md:leading-h5-tablet lg:text-h5-desktop lg:leading-h5-desktop mb-[24px] md:mb-auto">Design once, use everywhere</p>
                    <p className="font-abc-diatype-regular text-subtext text-md-mobile leading-md-mobile md:text-md-tablet md:leading-md-tablet lg:text-md-desktop lg:leading-md-desktop mb-[24px] lg:w-[90%]">Brease Kit brings your brand system into the CMS, letting you define components and variations once — and reuse them visually.</p>

                    <div className="flex flex-col md:flex-row gap-[12px] flex-wrap items-start">
                        <Button color="black" type="primary" arrow={true}>View Templates</Button>
                        <Button color="opaque-gray-to-white" type="secondary" arrow={true}>What is Brease Kit?</Button>
                    </div>

                </div>


                {/* cards */}

                <div className="grid md:w-1/2 lg:min-w-[600px] grid-cols-2 grid-rows-2 border-l-1 border-[#E8E8E8]">
                    {cards.map((card, index) => {
                        const borderClasses = `
                        border-[#E8E8E8]
                        ${index === 0 || index === 1 ? 'border-b' : ''}
                        ${index === 0 || index === 2 ? 'border-r' : ''}
                        `;

                        return (
                        <div key={index} className={`${borderClasses}`}>
                            <BreaseKitCard image={card.image} title={card.title} components={card.components} />
                        </div>
                        );
                    })}
                    </div>
                </div>

            <div className="absolute z-0 bottom-0 left-0 w-full h-[65px] bg-background-dark"></div>
        </div>
    )
}