export default function BreaseKitCard({image,title,components} : {
    image : string,
    title : string,
    components : number
}) {
    return (
        <div className="hidden lg:flex flex-col p-[24px] min-h-full">
            <img src={`BreaseKitCards/${image}`} className="w-full mb-auto" />
            <div>
                <p className="font-abc-diatype-bold text-md-mobile leading-md-mobile md:text-md-tablet md:leading-md-tablet lg:text-md-desktop lg:leading-md-desktop text-heading">{title}</p>
                <p className="font-abc-diatype-regular text-sm-mobile leading-sm-mobile md:text-sm-tablet md:leading-sm-tablet lg:text-sm-desktop lg:leading-sm-desktop text-subtext">{components} Components</p>
            </div>
        </div>
    )
}