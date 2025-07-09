import Button from "../common/Button";

export default function FooterLogo() {
    return (
        <div className="flex flex-col gap-[40px] md:gap-[64px] lg:gap-[56px] sm:gap-[64px]">

            {/* right col */}
            <div className="flex sm:flex-row flex-col items-center justify-center sm:items-start sm:justify-between w-full">

                <div className="flex gap-[8px] mb-[24px] w-fit">
                    <Button color="opaque-dark-to-white" type="secondary" arrow={true}>Contact sales</Button>
                    <Button color="white" type="primary" arrow={true}>Sign Up Now</Button>
                </div>

                <div className="text-center sm:text-right">
                    <p className="font-abc-diatype-medium text-sm-desktop text-primary-footer">© Designatives 2025. All Rights Reserved.</p>
                    <a className="cursor-pointer font-abc-diatype-medium text-sm-desktop text-white">Privacy Policy</a>
                </div>
            </div>

            {/* logo */}
            <img src="brease-footer.png" className="w-screen" alt="Brease Logo" />

        </div>
    )
}