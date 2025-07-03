export default function FullstackCard({image,title,subtext}: {image : string, title : string, subtext : string}) {
    return (
        <div className="flex flex-col gap-[24px] min-w-[400px]">

            <img src={`FullStackCards/${image}`} className="w-full" />

            <div>
                <p className="font-rale-grotesk-base-medium text-h5-mobile leading-h5-mobile md:text-h5-tablet md:leading-h5-tablet lg:text-h5-desktop lg:leading-h5-desktop text-heading">{title}</p>
                <p className="font-abc-diatype-regular text-md-desktop leading-md-desktop text-subtext">{subtext}</p>
            </div>

        </div>
    )
}