import Button from "../common/Button";

export default function Hero() {
    return (
        <div className="relative min-w-full min-h-full bg-primary">
            <div className="px-[24px] md:px-[64px] lg:px-[11vw] pt-[112px] md:pt-[152px] flex md:flex-row flex-col justify-between">

                <div className="flex flex-col gap-[32px] md:gap-[40px] mb-[40px] md:mb-[80px]">
                    <h1 className="text-white text-h1-mobile leading-h1-mobile md:text-[4.82vw] md:leading-[4.82vw] lg:text-[4.5vw] lg:leading-[4.5vw] tracking-[-1px] font-rale-grotesk-base-medium md:max-w-[692px] lg:max-w-[914px] xl:max-w-[80%]">Rethinking Simplicity in Content Management</h1>
                    <div className="flex gap-[12px]">
                        <Button color="white" type="primary" arrow={true}>Getting Started</Button>
                        <Button color="opaque-to-white" type="secondary" arrow={false}>Learn More</Button>
                    </div>
                </div>

                <div className="mt-auto md:border-l-4 md:border-purple md:pl-[40px] pb-[40px]">
                    <p className="font-abc-diatype-medium text-white text-md-desktop leading-md-desktop md:max-w-[326px]">
                    A headless CMS that balances power and simplicity — for teams who want more control and less friction.
                    </p>
                </div>

            </div>

            <div className="relative px-[24px] md:px-[64px] lg:px-[32px] h-[320px] md:h-[512px] lg:h-[640px] z-1">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/showreel.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[100px] bg-background z-0"></div>
        </div>
    )
}