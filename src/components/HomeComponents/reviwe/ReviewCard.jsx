
const ReviewCard = () => {
    return (
        <div className="sm:mb-[100px] border-none mb-10 bg-pmColor bg-opacity-80 rounded-3xl">
            <div className=" lg:mt-0 border-none mt-14 text-center p-5 relative">
                <span className=" text-black text-7xl rounded-full  w-10 h-10">
                    <img className="max-w-32 max-h-32 object-cover border-4 border-white  mx-auto rounded-full" src="https://i.pinimg.com/564x/94/21/55/942155b73e3ad9184c190f08aca149d6.jpg" alt="" />
                </span>
                <h3 className=" text-black text-center text-opacity-90 font-nunito text-xl my-3 font-semibold">Fly Today</h3>
                <div className="my-5">
                    <span className="block w-20 h-[1px] bg-white mx-auto mb-1"></span>
                    <span className="block w-40 h-[1px] bg-white mx-auto"></span>
                </div>
                <p className="text-base  text-black text-opacity-60 text-center font-heebo font-bold">Fly today to your dream destination and make memories with seamless travel arrangements and exciting adventures awaiting you!</p>
            </div>
        </div>
    );
};

export default ReviewCard;