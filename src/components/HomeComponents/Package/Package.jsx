import React, { useEffect, useState } from "react";
import SectionHeading from "../../../utility/SectionHeading";
import SectionTitle from "../../../utility/SectionTitle";
import PackCard from "./PackCard";

const Package = () => {
    const [info, setInfo] = useState([]);
    const [cards, setCards] = useState([]);
    const [startIndex, setStartIndex] = useState(3);

    useEffect(() => {
        fetch('http://localhost:3000/touristSpots')
            .then(res => res.json())
            .then(data => {
                setInfo(data);
                setCards(data.slice(0, 3)); // Initially show three cards
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleViewMore = () => {
        const nextCards = info.slice(0, startIndex + 3);
        setCards(nextCards);
        setStartIndex(startIndex + 3);
    };

    const handleLessMore = () => {
        const nextCards = info.slice(0, startIndex - 3);
        setCards(nextCards);
        setStartIndex(startIndex - 3);
    };

    return (
        <div className="max-w-[1440px] w-[95%] mx-auto mb-10 sm:mb-[100px]">
            <div data-aos="fade-down" data-aos-duration="1000" className="text-center mb-10">
                <SectionHeading>PACKAGES</SectionHeading>
                <SectionTitle>Tourists Spots</SectionTitle>
            </div>
            <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-5">
                {cards.map((item, i) => (
                    <PackCard item={item} key={i}></PackCard>
                ))}
            </div>

            {startIndex > 3 && (
                <button className="sm:px-7 mt-5 mx-auto block px-5 sm:py-4 py-3 text-white font-heebo font-medium sm:font-semibold rounded-xl bg-pmColor mb-5" onClick={handleLessMore}>
                    Less More
                </button>
            )}
            {info.length > startIndex && (
                <button data-aos="fade-down" data-aos-duration="1000" className="sm:px-7 mt-5 mx-auto block px-5 sm:py-4 py-3 text-white font-heebo font-medium sm:font-semibold rounded-xl bg-pmColor mb-5" onClick={handleViewMore}>
                    View More
                </button>
            )}
        </div>
    );
};

export default Package;
