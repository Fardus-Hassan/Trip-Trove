

const SectionHeading = ({children}) => {
    return (
        <div>
            <h3 className="text-pmColor text-base sm:text-lg font-nunito font-bold relative inline-block">{children}
                <span className="w-10 h-[2px] sm:h-[3px] bg-pmColor block absolute top-2 left-[120%]"></span>
                <span className="w-16 h-[2px] sm:h-[3px] bg-pmColor block absolute bottom-2 left-[120%]"></span>
                <span className="w-10 h-[2px] sm:h-[3px] bg-pmColor block absolute top-2 right-[120%]"></span>
                <span className="w-16 h-[2px] sm:h-[3px] bg-pmColor block absolute bottom-2 right-[120%]"></span>
            </h3>
        </div>
    );
};

export default SectionHeading;