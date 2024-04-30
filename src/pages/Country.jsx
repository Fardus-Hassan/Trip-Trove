import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionHeading from "../utility/SectionHeading";
import SectionTitle from "../utility/SectionTitle";
import CountryCard from "./CountryCard";
import Error from "./Error";


const Country = () => {

    const { country_name } = useParams()
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://trip-trove-server-oized1a22-fardus-projects.vercel.app/touristSpots')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const country = data.filter(item => item.country_name.toLowerCase() === country_name.toLowerCase());
                console.log(country);
                setCountries(country)
            })
    }, [country_name])

    return (
        <div className="max-w-[1440px] w-[95%] mx-auto md:pt-[150px] pt-[100px] pb-10 mb-10">
            {
                countries.length < 1 ? <div className="flex justify-center items-center w-full mb-10">
                    <span className="loading loading-bars loading-lg text-pmColor"></span>
                </div> : <div>
                    <div data-aos="fade-down" data-aos-duration="1000" className="text-center mb-10">
                        <SectionHeading>{country_name.toUpperCase()}</SectionHeading>
                        <SectionTitle>Tourists Spots</SectionTitle>
                    </div>
                    <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-6">
                        {
                            countries.map((item, i) => (
                                <CountryCard item={item} key={i}></CountryCard>
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Country;