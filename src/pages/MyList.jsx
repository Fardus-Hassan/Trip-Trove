import { Button } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { GlobalStateContext } from "../GlobalContext/GlobalContext";


const MyList = () => {

    const {user} = useContext(GlobalStateContext);


    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/touristSpots/myList/${user.email}`)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setData(data);
        })
    },[user.email])


    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/touristSpots/${_id}`, {
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(info => {
                    const updatedData = data.filter(item => item._id !== _id);
                    setData(updatedData);
                    console.log(updatedData);
                })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }


    return (
        <div className="max-w-[1440px] w-[95%] mx-auto md:pt-[150px] pt-[100px] pb-10">
            {
                data.length == 0 ? <div data-aos="fade-down" data-aos-duration="1000" role="alert" className="alert shadow-lg w-[90%] mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div>
                        <h3 className="font-bold">No Information</h3>
                        <div className="text-xs">Want to add some information ?</div>
                    </div>
                    <Link to='/add-tourists-spot'><button className="btn btn-sm bg-pmColor text-white">Add</button></Link>
                </div> : <div className="overflow-x-auto">
                    <table data-aos="fade-down" data-aos-duration="1500" className="table table-base table-pin-rows table-pin-cols font-heebo">
                        <thead>
                            <tr>
                                <th></th>
                                <td>Tourists Spot Name</td>
                                <td>Average Cost</td>
                                <td>Country Name</td>
                                <td>Location</td>
                                <td>Travel Time</td>
                                <td>Total Visitors Per Year</td>
                                <td>Season</td>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, i) => (
                                    <tr key={i} className="">
                                        <th>{i + 1}</th>
                                        <td>{item.tourists_spot_name}</td>
                                        <td>{item.average_cost}</td>
                                        <td>{item.country_name}</td>
                                        <td>{item.location}</td>
                                        <td>{item.travel_time}</td>
                                        <td>{item.totalVisitorsPerYear}</td>
                                        <td>{item.seasonality}</td>
                                        <td><Link to={`/update-data/${item._id}`}>
                                            <Button size="sm" variant="text" className={`bg-pmColor hover:text-black text-white`}>
                                                <span>Update</span>
                                            </Button>
                                        </Link></td>
                                        <td><Button onClick={() => handleDelete(item._id)} size="sm" variant="text" className={`bg-pmColor hover:text-black text-white`}>
                                            <span>Delete</span>
                                        </Button></td>
                                        <th>{i + 1}</th>
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <td>Tourists Spot Name</td>
                                <td>Average Cost</td>
                                <td>Country Name</td>
                                <td>Short Description</td>
                                <td>Location</td>
                                <td>Travel Time</td>
                                <td>Total Visitors Per Year</td>
                                <td>Season</td>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            }
        </div>
    );
};

export default MyList;