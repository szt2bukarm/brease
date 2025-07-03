import Button from "../common/Button";

export default function FeatureRequest() {
    return (
        <div className="px-[24px] md:px-[90px] lg:px-[11vw] md:pt-[80px] pb-[80px] lg:pb-[120px]">
            <div className="flex flex-col md:flex-row gap-[48px] md:gap-[80px]">
                <div className="flex flex-col gap-[16px] md:pl-[48px] lg:pl-[80px] md:py-[48px] md:border-l-4 md:border-purple">
                    <p className="font-abc-diatype-medium text-xs-mobile md:text-xs-tablet lg:text-xs-desktop text-sublabel">FEATURE REQUEST</p>
                    <p className="text-h3-mobile leading-h3-mobile md:text-h3-tablet md:leading-h3-tablet lg:text-h3-desktop lg:leading-h3-desktop text-heading tracking-[-1px]">We value your input! Share your thoughts on new features or enhancements you’d like to see in Brease. Your feedback helps us create a seamless and enjoyable experience for managing your digital content.</p>
                </div>

                <div className="flex flex-col min-h-full w-full md:pb-[48px]">
                    <div className="md:mt-auto w-full">
                        <div className="flex gap-[10px] mb-[24px] md:mb-[56px]">
                            <div className="w-[40px] h-[40px] p-[8px] bg-white flex justify-center items-center rounded-[12px] shadow-[0px_1px_5px_rgba(62,52,69,0.2)]">
                                <img className="h-[95%]" src="/FeatureRequestLogos/react.png" alt="React Logo" />
                            </div>
                            <div className="w-[40px] h-[40px] p-[8px] bg-white flex justify-center items-center rounded-[12px] shadow-[0px_1px_5px_rgba(62,52,69,0.2)]">
                                <img className="h-[90%]" src="/FeatureRequestLogos/slack.png" alt="Slack Logo" />
                            </div>
                            <div className="w-[40px] h-[40px] p-[8px] bg-white flex justify-center items-center rounded-[12px] shadow-[0px_1px_5px_rgba(62,52,69,0.2)]">
                                <img className="h-[95%]" src="/FeatureRequestLogos/jira.png" alt="Jira Logo" />
                            </div>
                            <div className="w-[40px] h-[40px] p-[8px] bg-white flex justify-center items-center rounded-[12px] shadow-[0px_1px_5px_rgba(62,52,69,0.2)]">
                                <img className="h-[90%]" src="/FeatureRequestLogos/image.png"  />
                            </div>
                            <div className="w-[40px] h-[40px] p-[8px] bg-white flex justify-center items-center rounded-[12px] shadow-[0px_1px_5px_rgba(62,52,69,0.2)]">
                                <img className="h-[90%]" src="/FeatureRequestLogos/figma.png" alt="Figma logo"  />
                            </div>
                        </div>
                        <p className="font-abc-diatype-regular text-md-mobile leading-md-mobile md:text-md-tablet md:leading-md-tablet lg:text-md-desktop lg:leading-md-desktop text-subtext mb-[16px]">From structured content to SDK APIs. The Content Operating System gives you full control to build, scale, and ship all the content applications your business needs—your way.</p>
                        <Button color="black" type="primary" arrow={true}>Request feature</Button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}