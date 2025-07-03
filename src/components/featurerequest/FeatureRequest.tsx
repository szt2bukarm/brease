"use client"
import { useGSAP } from "@gsap/react";
import Button from "../common/Button";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import { useRef } from "react";
gsap.registerPlugin(SplitText);

export default function FeatureRequest() {
    const textRef = useRef(null);

    useGSAP(() => {
        let trigger;
        const split = new SplitText(textRef.current, {
        type: "words",
        });
      
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 100%",
                end: "bottom 50%",
                scrub: 1,
            },
        });
      
          trigger = tl.scrollTrigger;
      
          gsap.set(split.words, { opacity: 0.5 });
          gsap.set(['[data-gsap="feature-request-logo-1"]', '[data-gsap="feature-request-logo-2"]','[data-gsap="feature-request-logo-3"]','[data-gsap="feature-request-logo-4"]','[data-gsap="feature-request-logo-5"]'], { opacity: 0,filter: "blur(10px)" });
      
          tl.to(split.words, {
            opacity: 1,
            stagger: 0.1,
            duration: 0.2,
            ease: "none",
          }, "<");

          tl.to(['[data-gsap="feature-request-logo-1"]', '[data-gsap="feature-request-logo-2"]','[data-gsap="feature-request-logo-3"]','[data-gsap="feature-request-logo-4"]','[data-gsap="feature-request-logo-5"]'], {
            opacity: 1,
            filter: "blur(0px)",
            duration: 2,
            stagger: 0.3,
            ease: "none",
          }, "<");
      
          const handleResize = () => {
            trigger?.refresh();
          };
      
          window.addEventListener("resize", handleResize);
      
          return () => {
            trigger?.kill();
            window.removeEventListener("resize", handleResize);
          };
      }, []);

    return (
        <div className="relative px-[24px] md:px-[90px] lg:px-[11vw] md:pt-[80px] pb-[80px] lg:pb-[120px]">
            <div className="flex flex-col md:flex-row gap-[48px] md:gap-[80px]">
                <div className="flex flex-col gap-[16px] md:pl-[48px] lg:pl-[80px] md:py-[48px] md:border-l-4 md:border-purple">
                    <p className="font-abc-diatype-bold text-xs-mobile md:text-xs-tablet lg:text-xs-desktop text-sublabel">FEATURE REQUEST</p>
                    <p ref={textRef} className="font-rale-grotesk-base-medium text-h3-mobile leading-h3-mobile md:text-h3-tablet md:leading-h3-tablet lg:text-h3-desktop lg:leading-h3-desktop text-heading tracking-[-1px]">We value your input! Share your thoughts on new features or enhancements you’d like to see in Brease. Your feedback helps us create a seamless and enjoyable experience for managing your digital content.</p>
                </div>

                <div className="flex flex-col min-h-full w-full md:pb-[48px]">
                    {/* logos */}
                    <div className="md:mt-auto w-full">
                        <div className="flex gap-[10px] mb-[24px] md:mb-[56px]">
                            <div data-gsap="feature-request-logo-1" className="w-[40px] h-[40px] p-[8px] bg-white flex justify-center items-center rounded-[12px] shadow-[0px_1px_5px_rgba(62,52,69,0.2)]">
                                <img className="h-[95%]" src="/FeatureRequestLogos/react.png" alt="React Logo" />
                            </div>
                            <div data-gsap="feature-request-logo-2" className="w-[40px] h-[40px] p-[8px] bg-white flex justify-center items-center rounded-[12px] shadow-[0px_1px_5px_rgba(62,52,69,0.2)]">
                                <img className="h-[90%]" src="/FeatureRequestLogos/slack.png" alt="Slack Logo" />
                            </div>
                            <div data-gsap="feature-request-logo-3" className="w-[40px] h-[40px] p-[8px] bg-white flex justify-center items-center rounded-[12px] shadow-[0px_1px_5px_rgba(62,52,69,0.2)]">
                                <img className="h-[95%]" src="/FeatureRequestLogos/jira.png" alt="Jira Logo" />
                            </div>
                            <div data-gsap="feature-request-logo-4" className="w-[40px] h-[40px] p-[8px] bg-white flex justify-center items-center rounded-[12px] shadow-[0px_1px_5px_rgba(62,52,69,0.2)]">
                                <img className="h-[90%]" src="/FeatureRequestLogos/image.png"  />
                            </div>
                            <div data-gsap="feature-request-logo-5" className="w-[40px] h-[40px] p-[8px] bg-white flex justify-center items-center rounded-[12px] shadow-[0px_1px_5px_rgba(62,52,69,0.2)]">
                                <img className="h-[90%]" src="/FeatureRequestLogos/figma.png" alt="Figma logo"  />
                            </div>
                        </div>
                        
                        <p className="font-abc-diatype-regular text-md-mobile leading-md-mobile md:text-md-tablet md:leading-md-tablet lg:text-md-desktop lg:leading-md-desktop text-subtext mb-[16px]">From structured content to SDK APIs. The Content Operating System gives you full control to build, scale, and ship all the content applications your business needs—your way.</p>
                        <Button color="black" type="primary" arrow={true}>Request feature</Button>
                    </div>
                </div>
            </div>


            {/* bg logo */}
            <div className="-z-1 absolute -top-30 right-0 blur-xl opacity-40">
            <svg className="fill-purple w-[1000px] h-[1280px] scale-x-[-1] rotate-[25deg]" width="23" height="30" viewBox="0 0 23 30">
                <path d="M16.2678 14.0671C16.48 14.2225 16.7421 14.2938 17.0037 14.2672C17.2652 14.2407 17.5077 14.1182 17.6843 13.9234C18.0789 13.4399 17.8516 12.878 17.3629 12.6167C13.9046 10.4037 9.8341 9.34325 5.73566 9.5877C5.01745 9.6312 4.30644 9.75569 3.61616 9.95881C2.95956 10.1887 2.34834 10.5319 1.81028 10.9728C1.23113 11.467 0.769802 12.0844 0.460055 12.7799C0.150307 13.4753 -2.24398e-05 14.2312 0.0200694 14.9923C-0.00867847 16.5447 0.587188 18.165 1.84948 19.0562C2.48681 19.5129 3.19247 19.8657 3.94023 20.1016C4.52156 20.2556 5.11539 20.358 5.71476 20.4073C12.1098 20.7 17.5955 17.9481 20.8204 14.5846C21.8318 13.4713 22.7335 12.1306 22.7335 10.6357C22.7335 9.32897 21.9965 7.71125 20.8204 6.45418C18.0267 3.49838 12.3764 0.197608 5.64419 0.634052C2.16832 0.861421 0.00961537 2.93127 0.00961537 6.03603C-0.0180682 7.28549 0.406016 8.50299 1.20396 9.46487C1.35674 9.64002 1.56353 9.75927 1.79166 9.80376C2.01979 9.84825 2.25624 9.81544 2.46364 9.71053H2.47932C2.597 9.65522 2.69969 9.57249 2.77878 9.46928C2.85786 9.36607 2.91103 9.24539 2.93382 9.11737C2.9566 8.98935 2.94835 8.85774 2.90973 8.73357C2.87112 8.60941 2.80328 8.49633 2.71191 8.40381C2.4178 8.08544 2.18932 7.71222 2.03955 7.30549C1.88977 6.89876 1.82163 6.4665 1.83902 6.03342C1.83902 3.92437 3.26858 2.62027 5.75918 2.45823C11.859 2.0636 16.9656 5.0377 19.4876 7.70863C20.4075 8.68345 20.9041 9.88302 20.9067 10.5207C20.9053 10.6221 20.8975 10.7234 20.8832 10.8239C20.8675 10.9127 20.8361 11.0042 20.8126 11.0852C19.3621 15.2667 12.0576 19.0379 5.75657 18.5779C3.64491 18.4969 1.78153 17.2712 1.83641 15.0027C1.95402 8.92388 12.6979 11.7124 16.2678 14.0671ZM20.4807 16.0638C20.36 16.1266 20.2541 16.2144 20.1702 16.3215C20.0862 16.4285 20.0262 16.5523 19.994 16.6845C19.9618 16.8166 19.9583 16.9542 19.9836 17.0878C20.009 17.2215 20.0626 17.3482 20.1409 17.4594C20.6166 18.1728 20.925 18.9464 20.925 19.4639C20.925 23.1985 11.9217 28.1065 5.76702 27.529C3.2738 27.3669 1.84686 26.0628 1.84686 23.9512C1.81696 23.0808 2.09454 22.2277 2.6309 21.5416C2.71896 21.4367 2.78112 21.3126 2.81236 21.1793C2.8436 21.046 2.84304 20.9072 2.81073 20.7742C2.77842 20.6411 2.71527 20.5176 2.62637 20.4134C2.53748 20.3093 2.42533 20.2275 2.29899 20.1747C2.13115 20.1051 1.94585 20.089 1.76852 20.1288C1.59119 20.1685 1.4305 20.2622 1.3085 20.3969C0.434897 21.3712 -0.0326584 22.643 0.00177537 23.9512C-0.0740144 27.5891 3.10654 29.5857 6.84376 29.3923C13.6387 29.4577 22.7309 24.7953 22.7309 19.4613C22.7309 18.5805 22.3467 17.5064 21.6855 16.4846C21.5672 16.2829 21.3811 16.1298 21.1604 16.0528C20.9397 15.9757 20.6988 15.9796 20.4807 16.0638Z"/>
            </svg>
            </div>
        </div>
        
    )
}