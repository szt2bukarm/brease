"use client"
import Button from "../common/Button";
import Heading from "../common/Heading";


export default function JoinBeta() {
    return (
        <div className="relative px-[24px] md:px-[90px] lg:px-[11vw] py-[88px] bg-background">
            <div className="z-1 relative w-full flex flex-col md:flex-row gap-[40px] md:gap-[80px] lg:min-h-[608px]">

                <div className="p-[1px] h-[300px] w-full md:w-[50vw] md:h-[33vw] md:max-h-[608px] lg:max-h-none lg:h-[608px] lg:w-[900px] rounded-[7px] md:rounded-[10px] lg:rounded-[13px] bg-gradient-to-b from-[#EBECF0] to-[#D9DCE4]">
                    <img src="/BothWorldsCards/1.png" className="object-cover h-full w-full object-left rounded-[8px] shadow-[0_40px_80px_-16px_rgba(62,52,69,0.16)]" />
                </div>

                <div className="flex flex-col min-h-full">

                    <div>
                        <p className="font-abc-diatype-bold text-xs-mobile md:text-xs-tablet lg:text-xs-desktop mb-[16px] text-sublabel">JOIN THE BREASE BETA PROGRAM</p>
                        <Heading>Get a full year of Brease — free.</Heading>
                    </div>

                    <div className="mt-[24px] md:mt-[40px] lg:mt-auto">
                        <p className="font-rale-grotesk-base-medium text-h5-mobile leading-h5-mobile md:text-h5-tablet md:leading-h5-tablet lg:text-h5-desktop lg:leading-h5-desktop text-black mb-[16px]">We’re inviting select dev studios to join our beta program.<br></br><br></br>You’ll get:</p>
                        <ul className="translate-x-5 list-disc font-abc-diatype-regular text-md-mobile leading-md-mobile md:text-md-tablet md:leading-md-tablet lg:text-md-desktop lg:leading-md-desktop text-subtext mb-[32px]">
                            <li>Full access to Brease Pro for 12 months</li>
                            <li>Priority support & direct product input</li>
                            <li>A say in shaping the future of content management</li>
                        </ul>
                        <p style={{ backgroundImage: "linear-gradient(10deg, #D8ABFF 25%, #005244 50%"}} className="font-rale-grotesk-base-medium bg-clip-text text-transparent text-h5-desktop leading-h5-desktop md:text-h5-tablet md:leading-h5-tablet lg:text-h5-desktop lg:leading-h5-desktop mb-[32px]">This is not a trial. It’s your new stack — early.</p>
                        <Button color="black" type="primary" arrow={true}>Apply for Early Access</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}