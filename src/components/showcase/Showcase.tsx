import Button from "../common/Button";
import ShowcaseButton from "./ShowcaseButton";

export default function Showcase() {
    return (
        <div className="flex flex-col pb-[80px]">
            
            {/* buttons */}
            <div className="w-full overflow-x-auto">
                <div className="flex flex-nowrap justify-center items-center gap-[12px] my-[32px] px-[24px] min-w-max">
                    <ShowcaseButton>Content Editing</ShowcaseButton>
                    <ShowcaseButton>Section Editing</ShowcaseButton>
                    <ShowcaseButton>Page Builder</ShowcaseButton>
                    <ShowcaseButton>Collections</ShowcaseButton>
                    <ShowcaseButton>Collaborate</ShowcaseButton>
                </div>
            </div>

            <div className="px-[24px] md:px-[90px] lg:px-[11vw]">

                <div className="p-[1px] rounded-[7px] md:rounded-[10px] lg:rounded-[13px] bg-gradient-to-b from-[#EBECF0] to-[#D9DCE4]">
                    <img src="/BothWorldsCards/1.png" className="w-full rounded-[8px] shadow-[0_40px_80px_-16px_rgba(62,52,69,0.16)]" />
                </div>
            </div>


        </div>
    )
}