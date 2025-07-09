export default function AIPromptCardFeature({icon,text} : {icon : React.ReactNode, text : string}) {
    return (
        <div className="py-[5px] px-[12px] flex items-center gap-[8px] rounded-[30px] border-1 border-[#DDDDDD] hover:bg-background transition duration-150 ease-out">

            <img src={`/AIPromptCard/${icon}.svg`} className="h-[12px]" />
            <p className="font-abc-diatype-medium text-subtext text-[12px] leading-[17px]">{text}</p>

        </div>
    )
}