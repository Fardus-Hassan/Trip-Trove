import toast from "react-hot-toast";
import SectionHeading from "../utility/SectionHeading";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { GlobalStateContext } from "../GlobalContext/GlobalContext";


const AddTouristsSpot = () => {

    const { user } = useContext(GlobalStateContext)

    const { displayName, email } = user

    // console.log(user);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    // const [error, setError] = useState(null)

    const onSubmit = (data) => {
        // setError('')

        const { short_description, travel_time, totalVisitorsPerYear, seasonality, average_cost, location, tourists_spot_name, image, country_name, image2, image3 } = data;



        fetch('http://localhost:3000/touristSpots', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                short_description,
                travel_time,
                totalVisitorsPerYear,
                seasonality,
                average_cost,
                location,
                tourists_spot_name,
                img : [image, image2, image3],
                country_name,
                displayName,
                email

            })
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('Add Successfully');
                }

                reset()
            })


    }

    return (
        <div className="bg-img2 xl:h-[100vh] min-h-[100vh]">

            <div className="flex xl:flex-row xl:pt-0 pt-32 p-8 bg-black bg-opacity-50 flex-col justify-center xl:h-[100vh] min-h-[100vh] w-full items-center gap-10">
                <div className="xl:w-[40%] xl:text-left text-center">

                    <div className="xl:ml-24">
                        <SectionHeading>ADD SPOT</SectionHeading>
                    </div>


                    <h1 className="text-white text-[32px] sm:text-[40px] font-nunito font-bold">Add Your Favorite Tourist Spot</h1>
                    <p className="text-white font-heebo font-semibold mt-8">Contribute to our database by sharing your insights and experiences from your travels. Help shape travel trends and inspire others with your adventures!</p>
                    <p className="text-white font-heebo font-semibold mt-8">
                        Discover new destinations and share your travel experiences to enrich our tourism data. Your insights help shape future travel trends!</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="xl:w-[40%] w-full">
                    <h1 className="text-white xl:text-left text-center text-[32px] sm:text-[40px] font-nunito font-bold mb-5">Add Here</h1>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-5">
                        <div className="relative w-full h-10 sm:mb-5">
                            <input
                                name="image" type="text" {...register("image", { required: true })}
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Image
                            </label>
                            {errors.image && <span className="text-xs block text-red-500">This field is required</span>}
                        </div>
                        <div className="relative w-full h-10 mb-5">
                            <input
                                name="tourists_spot_name" type="text" {...register("tourists_spot_name", { required: true })}
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Tourists Spot Name
                            </label>
                            {errors.tourists_spot_name && <span className="text-xs block text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-5">
                        <div className="relative w-full h-10 sm:mb-5">
                            <input
                                name="image2" type="text" {...register("image2")}
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Image 2
                            </label>
                            {/* {errors.image && <span className="text-xs block text-red-500">This field is required</span>} */}
                        </div>
                        <div className="relative w-full h-10 mb-5">
                            <input
                                name="image3" type="text" {...register("image3")}
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Image3
                            </label>
                            {/* {errors.tourists_spot_name && <span className="text-xs block text-red-500">This field is required</span>} */}
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-5">
                        <div className="relative w-full h-10 sm:mb-5">
                            <input
                                name="location" type="text" {...register("location", { required: true })}
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Location
                            </label>
                            {errors.location && <span className="text-xs block text-red-500">This field is required</span>}
                        </div>
                        <div className="relative w-full h-10 mb-5">
                            <input
                                name="average_cost
                                " type="text" {...register("average_cost", { required: true })}
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Average Cost

                            </label>
                            {errors.average_cost && <span className="text-xs block text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-5">
                        <div className="relative w-full h-10 sm:mb-5">
                            <input
                                name="seasonality" type="text" {...register("seasonality", { required: true })}
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Seasonality
                            </label>
                            {errors.seasonality && <span className="text-xs block text-red-500">This field is required</span>}
                        </div>
                        <div className="relative w-full h-10 mb-5">
                            <input
                                name="country_name
                                " type="text" {...register("country_name", { required: true })}
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Country Name

                            </label>
                            {errors.country_name && <span className="text-xs block text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-5">
                        <div className="relative w-full h-10 sm:mb-5">
                            <input
                                name="totalVisitorsPerYear" type="text" {...register("totalVisitorsPerYear", { required: true })}
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Total Visitors Per Year
                            </label>
                            {errors.totalVisitorsPerYear && <span className="text-xs block text-red-500">This field is required</span>}
                        </div>
                        <div className="relative w-full h-10 mb-5">
                            <input
                                name="travel_time
                                " type="text" {...register("travel_time", { required: true })}
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Travel Time

                            </label>
                            {errors.travel_time && <span className="text-xs text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-5">
                        <div className="relative w-full h-32 mb-6">
                            <textarea
                                name="short_description 
                                " type="text" {...register("short_description", { required: true })}
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Short Description

                            </label>
                            {errors.short_description && <span className="text-xs block text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <label className="input input-bordered border w-full border-pmColor text-white flex bg-pmColor bg-opacity-50 items-center gap-2">
                        <input type="Submit" value='Add' className="grow w-full block" />
                    </label>
                </form>
            </div>
            {/* <div className="absolute rounded-3xl w-full h-full bg-black bg-opacity-70 top-0"></div> */}
        </div>
    );
};

export default AddTouristsSpot;