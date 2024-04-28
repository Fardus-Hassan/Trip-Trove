import React, { useState } from "react";
import SectionHeading from "../../../utility/SectionHeading";
import SectionTitle from "../../../utility/SectionTitle";
import PackCard from "./PackCard";

const initialCards = [1, 2, 3, 4, 5, 6]; // Your initial list of cards

const Package = () => {
    const [cards, setCards] = useState(initialCards.slice(0, 3)); // Initially show three cards
    const [startIndex, setStartIndex] = useState(3);

    const handleViewMore = () => {
        const nextCards = initialCards.slice(0, startIndex + 3); // Show additional three cards
        setCards(nextCards);
        setStartIndex(startIndex + 3);
    };

    const handleLessMore = () => {
        const nextCards = initialCards.slice(0, startIndex - 3); // Show fewer three cards
        setCards(nextCards);
        setStartIndex(startIndex - 3);
    };

    return (
        <div className="max-w-[1440px] w-[95%] mx-auto mb-10 sm:mb-[100px]">
            <div className="text-center mb-10">
                <SectionHeading>PACKAGES</SectionHeading>
                <SectionTitle>Tourists Spots</SectionTitle>
            </div>
            <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-5">
                {cards.map((item, i) => (
                    <PackCard key={i}></PackCard>
                ))}
            </div>
            {initialCards.length > startIndex && (
                <button className="sm:px-7 mt-5 mx-auto block px-5 sm:py-4 py-3 text-white font-heebo font-medium sm:font-semibold rounded-xl bg-pmColor mb-5" onClick={handleViewMore}>
                    View More
                </button>
            )}
            {startIndex > 3 && (
                <button className="sm:px-7 mt-5 mx-auto block px-5 sm:py-4 py-3 text-white font-heebo font-medium sm:font-semibold rounded-xl bg-pmColor mb-5" onClick={handleLessMore}>
                    Less More
                </button>
            )}
        </div>
    );
};

export default Package;
