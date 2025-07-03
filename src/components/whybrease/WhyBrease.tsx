import Button from "../common/Button";

export default function WhyBrease() {
    return (
        <div className="md:pl-[48px] lg:pl-[80px] pb-[48px] md:pb-[80px] flex flex-col items-start w-full md:border-l-4 border-purple mb-[48px] md:mb-[64px] lg:mb-[80px]">
            
            <p className="font-abc-diatype-bold text-xs-mobile md:text-xs-tablet lg:text-xs-desktop mb-[16px] text-purple">WHY BREASE?</p>
            <h3 className="font-rale-grotesk-base-medium text-white text-h3-mobile leading-h3-mobile md:text-h3-tablet md:leading-h3-tablet lg:text-h3-desktop lg:leading-h3-desktop mb-[32px] tracking-[-1px]">Brease is a haven where intuitive design meets reliable performance, ensuring your digital content management is not just a necessity, but a tranquil, effortless experience.</h3>

            <Button color="white" type="primary" arrow={true}>Let's Get Started</Button>
        </div>
    )
}