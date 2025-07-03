"use client"
import Button from "../common/Button";
import Heading from "../common/Heading";
import FullstackCard from "./FullstackCard";

const cards = [
    {
        image: "feature-2.png",
        title: "Collections, Dynamic content",
        subtext: "$SendNudes is a multilang variable"
    },
    {
        image: "feature-3.png",
        title: "Responsive at it’s core",
        subtext: "Mobile-ready is key"
    },
    {
        image: "feature-1.png",
        title: "React.js under the hood",
        subtext: "Scale with React.js, there is no limit"
    },
    {
        image: "feature-1.png",
        title: "React.js under the hood",
        subtext: "Scale with React.js, there is no limit"
    },
    {
        image: "feature-1.png",
        title: "React.js under the hood",
        subtext: "Scale with React.js, there is no limit"
    },
    {
        image: "feature-1.png",
        title: "React.js under the hood",
        subtext: "Scale with React.js, there is no limit"
    },
]

export default function Fullstack() {
    return (
        <div className="flex flex-col gap-[64px] px-[24px] md:px-[90px] lg:px-[11vw] pb-[80px] lg:pb-[120px] overflow-hidden">
            
            <div className="flex flex-col md:flex-row gap-[32px] md:gap-[80px] lg:gap-0">
                <div className="w-full">
                    <p className="font-abc-diatype-bold text-xs-mobile md:text-xs-tablet lg:text-xs-desktop mb-[8px] text-sublabel">FULL STACK</p>
                    <Heading>Focusing on developer needs</Heading>
                    <p className="font-abc-diatype-regular text-md-mobile leading-md-mobile md:text-md-tablet md:leading-md-tablet lg:text-md-desktop lg:leading-md-desktop text-subtext">Brease merges sleek design with powerful functionality, making content management not just efficient, but intuitively simple.</p>
                </div>
                <div className="flex mt-auto gap-[12px]">
                    <Button color="black" type="primary" arrow={true} leftArrow={true}></Button>
                    <Button color="black" type="primary" arrow={true}></Button>
                </div>
            </div>

            <div className="flex gap-[40px]">
                {cards.map((card, index) => (
                    <FullstackCard key={index} image={card.image} title={card.title} subtext={card.subtext} />
                ))}
            </div>

        </div>
    )
}