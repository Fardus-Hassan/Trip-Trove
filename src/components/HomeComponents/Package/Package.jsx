import SectionHeading from "../../../utility/SectionHeading";
import SectionTitle from "../../../utility/SectionTitle";
import PackCard from "./PackCard";





const loop = [1, 2, 3];

const Package = () => {
    return (
        <div className="max-w-[1440px] w-[95%] mx-auto mb-10 sm:mb-[100px]">
            <div className="text-center mb-10">
                <SectionHeading>PACKAGES</SectionHeading>
                <SectionTitle>Awesome Packages</SectionTitle>
            </div>
            <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    loop.map((item, i) => (
                        <PackCard key={i}></PackCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Package;