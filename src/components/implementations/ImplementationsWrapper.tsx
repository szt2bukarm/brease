import Implementations from "./Implementations";
import ImplementationsMobile from "./ImplementationsMobile";

export default function ImplemetationsWrapper() {
    return (
        <>
        <div className="block md:hidden">
            <ImplementationsMobile />
        </div>
        <div className="hidden md:block">
            <Implementations />
        </div>
        </>
    )
}