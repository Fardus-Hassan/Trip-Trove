import { Link } from "react-router-dom";
import SectionHeading from "../../utility/SectionHeading";
import SectionTitle from "../../utility/SectionTitle";
import { useEffect, useState } from "react";

const PopularDestination = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://trip-trove-server-oized1a22-fardus-projects.vercel.app/country')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [])

    return (
        <div className="mb-10 sm:mb-[100px] w-[98%] mx-auto">
            <div data-aos="fade-down" data-aos-duration="1000" className="text-center mb-10">
                <SectionHeading>Countries</SectionHeading>
                <SectionTitle>Popular Countries</SectionTitle>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-2">
                {
                    data.map((item, i) => (
                        <Link data-aos="fade-down" data-aos-duration="1000" key={i} to={`/country/${item.country_name}`}>
                            <div className="relative">
                                <div className="">
                                    <img className="rounded-xl block sm:rounded-3xl w-full h-[40vh] object-cover" src={item.img} alt="" />
                                </div>
                                <div className="w-full h-full bg-black absolute top-0 bg-opacity-50 hover:bg-opacity-30 duration-100 rounded-xl sm:rounded-3xl">
                                    <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%]">
                                        <h2 className="text-center p-2 text-white w-full text-xl font-nunito font-bold">{item.country_name}</h2>
                                        <p className="text-white font-heebo text-sm text-center text-opacity-80 mt-2">
                                            {item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularDestination;