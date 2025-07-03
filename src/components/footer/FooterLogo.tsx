import Button from "../common/Button";

export default function FooterLogo() {
    return (
        <div className="flex flex-col lg:flex-row">

            {/* logo */}
            <img src="Brease.svg" className="w-screen mb-[40px] md:mb-[64px] lg:mb-0 lg:w-[608px]" alt="Brease Logo" />

            {/* right col */}
            <div className="flex flex-col md:flex-row lg:flex-col w-full md:justify-between lg:items-end">

                <div className="flex gap-[8px] mb-[24px]">
                    <Button color="opaque-dark-to-white" type="secondary" arrow={true}>Contact sales</Button>
                    <Button color="white" type="primary" arrow={true}>Sign Up Now</Button>
                </div>

                <div className="md:text-right">
                    <p className="font-abc-diatype-medium text-sm-desktop text-primary-footer">© Designatives 2025. All Rights Reserved.</p>
                    <a className="cursor-pointer font-abc-diatype-medium text-sm-desktop text-white">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}