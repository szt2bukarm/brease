export default function AIPromptCardInputEmpty() {
    return (
        <div className="flex flex-col pl-[12px] pt-[12px] pb-[8px] pr-[8px] bg-background rounded-[8px]">
            <p className="font-abc-diatype-medium text-subtext text-[12px] leading-[17px] mb-[12px]">What would you like to do today?</p>
            <div className="flex gap-[7px] ml-auto">

                <div className="w-[28px] h-[28px] bg-white border-1 border-[#DEDEDE] flex items-center justify-center rounded-[8px]">
                    <img src="AIPromptCard/plus.svg" className="h-[16px]" />
                </div>

                <div className="w-[28px] h-[28px] bg-black flex items-center justify-center rounded-[8px]">
                    <img src="AIPromptCard/send.svg" className="h-[12px" />
                </div>
            </div>
        </div>
    )
}