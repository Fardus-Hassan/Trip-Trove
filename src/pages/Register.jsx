import { Link, useNavigate } from "react-router-dom";
import {
    Checkbox,
    Typography,
} from "@material-tailwind/react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { GlobalStateContext } from "../GlobalContext/GlobalContext";
import { auth } from "../firebase.config";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)
    const { register : regis, setUser, logout } = useContext(GlobalStateContext);
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    
    const onSubmit = (data) => {
        const {name, email, password, photoURL} = data;

        if(password.length <6){
            return setError('Password should be at least 6 characters')
        }
        if (!/[A-Z]/.test(password)){
            return setError('Must have an UPPERCASE letter in the password')
        }
        if (!/[a-z]/.test(password)){
            return setError('Must have an lowercase letter in the password')
        }
        reset();
        regis(email, password).then((result) => {

            const user = result.user;
            setUser(user);
            logout()
            navigate('/login')
            

            updateProfile(auth.currentUser, {

                displayName: name,
                photoURL: photoURL

            }).then(() => {
                toast.success('Register Successfully');

            }).catch((error) => {

                setError(error.message)
            });

        })
            .catch((error) => {
                console.log(error);
                setError(error.message)

            });

    }



    return (
        <div>
            <div className="relative">
                <div    className="">
                    <img className="w-full min-h-[100vh] lg:h-[100vh] md:min-h-[calc(100vh-52px)] object-center object-cover" src="https://images.pexels.com/photos/6300606/pexels-photo-6300606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="bg-black absolute top-0 w-full h-full bg-opacity-70"></div>
                    <div className="absolute w-[95%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <div className="flex xl:flex-row flex-col justify-center items-center gap-20">
                            {/* <div className="lg:w-[40%]">

                            <h1 className="text-white text-[32px] sm:text-[40px] font-nunito font-bold">Welcome Back! Login to Unlock Exclusive Benefits</h1>
                            <p className="text-white font-heebo font-semibold mt-8">Unlock exclusive benefits! Log in to our website to access premium features, personalized content, and exciting rewards. Your journey awaits!</p>
                            <p className="text-white font-heebo font-semibold mt-8">
                                Welcome to a world of possibilities! Sign in now to explore our website's full potential and discover amazing experiences tailored just for you.</p>
                        </div> */}
                            <div data-aos="fade-down" data-aos-duration="1000" className="border border-pmColor lg:min-w-[35%] lg:mt-0 mt-[100px] rounded-3xl p-5 lg:p-10">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h1 className="text-white text-center text-[32px] sm:text-[40px] font-nunito font-bold mb-5">Create Account</h1>

                                    <p className="font-heebo sm:mb-10 mb-6 text-[14px] text-center text-white text-opacity-80 font-semibold">Create Your Account Today and Unlock Exclusive Benefits!</p>

                                    <div className="relative w-full h-10 mb-5">
                                        <input
                                            name="name" type="text" {...register("name", { required: true })}
                                            className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                            placeholder=" " /><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Full Name
                                        </label>
                                        {errors.email && <span className="text-xs text-red-500">This Name field is required</span>}
                                    </div>
                                    <div className="relative w-full h-10 mb-5">
                                        <input
                                            name="photoURL" type="text" {...register("photoURL")}
                                            className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                            placeholder=" " /><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Photo URL
                                        </label>
                                        {/* {errors.email && <span className="text-xs text-red-500">This Email field is required</span>} */}
                                    </div>
                                    <div className="relative w-full h-10 mb-5">
                                        <input
                                            name="email" type="email" {...register("email", { required: true })}
                                            className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                            placeholder=" " /><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Email
                                        </label>
                                        {errors.email && <span className="text-xs text-red-500">This Email field is required</span>}
                                    </div>
                                    <div className="relative w-full h-10 mb-2">
                                        <input
                                            name="password" {...register("password", { required: true })}
                                            type={showPassword ? 'text' : 'password'}
                                            className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                            placeholder=" " /><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Password
                                        </label>
                                        {showPassword ? <img onClick={() => setShowPassword(!showPassword)} className="w-5 h-5 absolute top-[50%] translate-y-[-50%] right-3" src="https://i.ibb.co/3fxNPxp/view.png" alt="" /> : <img onClick={() => setShowPassword(!showPassword)} className="w-5 h-5 absolute top-[50%] translate-y-[-50%] right-3" src="https://i.ibb.co/pj04qyJ/hide.png" alt="" />}
                                        {errors.password && <span className="text-xs text-red-500">This Password field is required</span>}
                                    </div>
                                    <div className="mb-2">
                                        <Checkbox
                                        className="bg-opacity-30 bg-pmColor"
                                            label={
                                                <Typography
                                                    variant="small"
                                                    className="flex items-center font-normal text-pmColor"
                                                >
                                                    I agree the
                                                    <a
                                                        href="#"
                                                        className="font-medium transition-colors hover:text-white"
                                                    >
                                                        &nbsp;Terms and Conditions
                                                    </a>
                                                </Typography>
                                            }
                                            containerProps={{ className: "-ml-2.5" }}
                                        />
                                    </div>
                                    {error && <span className="text-xs text-red-500">{error}</span>}
                                    <button className="group mb-5 relative w-full inline-flex bg-opacity-70 bg-pmColor h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200">
                                        <span>Submit</span>
                                        <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                            <svg
                                                width="15"
                                                height="15"
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                </form>
                                <div>
                                    <p className="text-sm text-center text-white font-inter font-medium">Have any account? Please <Link to='/login' className="text-pmColor font-semibold" >Login</Link> 👈</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;