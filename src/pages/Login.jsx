import { Checkbox, Typography } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { GlobalStateContext } from "../GlobalContext/GlobalContext";
import { auth } from "../firebase.config";


const Login = () => {

    const { login } = useContext(GlobalStateContext);
    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state || '/';
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [error, setError] = useState(null)
    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const handleProvider = (provider) => {

        return signInWithPopup(auth, provider).then(result => {
            if (result.user) {

                toast.success('Login Successfully');
                navigate(form);
            }
        }).catch(error => {
            console.log(error);
        })
    }


    const onSubmit = (data) => {
        setError('')
        const { email, password } = data;
        login(email, password).then((result) => {
            if (result.user) {
                navigate(form);
                toast.success('Login Successfully');
            }
        })
            .catch((error) => {

                setError(error.message)
            });
    }


    return (
        <div className="relative">
            <div className="">
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
                        <div  data-aos="fade-down" data-aos-duration="1000"  className="border border-pmColor lg:min-w-[35%] lg:mt-0 mt-[100px] rounded-3xl p-5 lg:p-10">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1 className="text-white text-center text-[32px] sm:text-[40px] font-nunito font-bold mb-5">Login Here</h1>

                                <p className="font-heebo sm:mb-10 mb-6 text-[14px] text-center text-white text-opacity-80 font-semibold">Welcome Back! Login to Unlock Exclusive Benefits!</p>

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
                                {error && <span className="text-xs text-red-500">{error === "Firebase: Error (auth/invalid-credential)." ? "This user cannot be found" : 'Something is wrong. Try again later'}</span>}
                                <div className="mb-2">
                                    <Checkbox
                                        className="bg-opacity-30 bg-pmColor"
                                        label={
                                            <Typography
                                                variant="small"
                                                className="flex items-center font-normal text-pmColor"
                                            >
                                                Remember me
                                                <a
                                                    href="#"
                                                    className="font-medium transition-colors hover:text-white"
                                                >
                                                </a>
                                            </Typography>
                                        }
                                        containerProps={{ className: "-ml-2.5" }}
                                    />
                                </div>
                                <button

                                    className="group relative w-full inline-flex bg-opacity-70 bg-pmColor h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200">
                                    <span>Login</span>
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
                                <div className="flex lg:flex-row flex-col items-center justify-between mb-5 mt-4 gap-3">

                                    <button
                                        onClick={() => handleProvider(googleProvider)}
                                        className="flex items-center flex-nowrap text-nowrap justify-center bg-pmColor px-4 bg-opacity-40 border border-gray-300 rounded-lg shadow-md w-full py-2 text-sm font-medium text-white hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="-0.5 0 48 48" version="1.1">

                                            <g id="Icons" stroke="none" fill="none">
                                                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                                    <g id="Google" transform="translate(401.000000, 860.000000)">
                                                        <path
                                                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                                            id="Fill-1" fill="#FBBC05"> </path>
                                                        <path
                                                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                                            id="Fill-2" fill="#EB4335"> </path>
                                                        <path
                                                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                                            id="Fill-3" fill="#34A853"> </path>
                                                        <path
                                                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                                            id="Fill-4" fill="#4285F4"> </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <span>Continue with Google</span>
                                    </button>

                                    <button
                                        onClick={() => handleProvider(githubProvider)}
                                        className="flex items-center justify-center bg-pmColor bg-opacity-40 border px-4 border-gray-300 rounded-lg shadow-md w-full text-center py-2 text-sm font-medium text-white hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 73 73" version="1.1">
                                            <g id="team-collaboration/version-control/github" stroke="none" fill="none"
                                            >
                                                <g id="container" transform="translate(2.000000, 2.000000)">
                                                    <rect id="mask" stroke="#000000" fill="#000000" x="-1"
                                                        y="-1" width="71" height="71" rx="14">

                                                    </rect>
                                                    <path
                                                        d="M58.3067362,21.4281798 C55.895743,17.2972267 52.6253846,14.0267453 48.4948004,11.615998 C44.3636013,9.20512774 39.8535636,8 34.9614901,8 C30.0700314,8 25.5585181,9.20549662 21.4281798,11.615998 C17.2972267,14.0266224 14.0269912,17.2972267 11.615998,21.4281798 C9.20537366,25.5590099 8,30.0699084 8,34.9607523 C8,40.8357654 9.71405782,46.1187277 13.1430342,50.8109917 C16.5716416,55.5036246 21.0008949,58.7507436 26.4304251,60.5527176 C27.0624378,60.6700211 27.5302994,60.5875152 27.8345016,60.3072901 C28.1388268,60.0266961 28.290805,59.6752774 28.290805,59.2545094 C28.290805,59.1842994 28.2847799,58.5526556 28.2730988,57.3588401 C28.2610487,56.1650247 28.2553926,55.1235563 28.2553926,54.2349267 L27.4479164,54.3746089 C26.9330843,54.468919 26.2836113,54.5088809 25.4994975,54.4975686 C24.7157525,54.4866252 23.9021284,54.4044881 23.0597317,54.2517722 C22.2169661,54.1004088 21.4330982,53.749359 20.7075131,53.1993604 C19.982297,52.6493618 19.4674649,51.9294329 19.1631397,51.0406804 L18.8120898,50.2328353 C18.5780976,49.6950097 18.2097104,49.0975487 17.7064365,48.4426655 C17.2031625,47.7871675 16.6942324,47.3427912 16.1794003,47.108799 L15.9336039,46.9328437 C15.7698216,46.815909 15.6178435,46.6748743 15.4773006,46.511215 C15.3368806,46.3475556 15.2317501,46.1837734 15.1615401,46.0197452 C15.0912072,45.855594 15.1494901,45.7209532 15.3370036,45.6153308 C15.5245171,45.5097084 15.8633939,45.4584343 16.3551097,45.4584343 L17.0569635,45.5633189 C17.5250709,45.6571371 18.104088,45.9373622 18.7947525,46.4057156 C19.4850481,46.8737001 20.052507,47.4821045 20.4972521,48.230683 C21.0358155,49.1905062 21.6846737,49.9218703 22.4456711,50.4251443 C23.2060537,50.9284182 23.9727072,51.1796248 24.744894,51.1796248 C25.5170807,51.1796248 26.1840139,51.121096 26.7459396,51.0046532 C27.3072505,50.8875956 27.8338868,50.7116403 28.3256025,50.477771 C28.5362325,48.9090515 29.1097164,47.7039238 30.0455624,46.8615271 C28.7116959,46.721353 27.5124702,46.5102313 26.4472706,46.2295144 C25.3826858,45.9484285 24.2825656,45.4922482 23.1476478,44.8597436 C22.0121153,44.2280998 21.0701212,43.44374 20.3214198,42.5080169 C19.5725954,41.571802 18.9580429,40.3426971 18.4786232,38.821809 C17.9989575,37.300306 17.7590632,35.5451796 17.7590632,33.5559381 C17.7590632,30.7235621 18.6837199,28.3133066 20.5326645,26.3238191 C19.6665366,24.1944035 19.7483048,21.8072644 20.778215,19.1626478 C21.4569523,18.951772 22.4635002,19.1100211 23.7973667,19.6364115 C25.1314792,20.1630477 26.1082708,20.6141868 26.7287253,20.9882301 C27.3491798,21.3621504 27.8463057,21.6790175 28.2208409,21.9360032 C30.3978419,21.3277217 32.644438,21.0235195 34.9612442,21.0235195 C37.2780503,21.0235195 39.5251383,21.3277217 41.7022622,21.9360032 L43.0362517,21.0938524 C43.9484895,20.5319267 45.0257392,20.0169716 46.2654186,19.5488642 C47.5058357,19.0810026 48.4543466,18.9521409 49.1099676,19.1630167 C50.1627483,21.8077563 50.2565666,24.1947724 49.3901927,26.324188 C51.2390143,28.3136755 52.1640399,30.7245457 52.1640399,33.556307 C52.1640399,35.5455485 51.9232849,37.3062081 51.444357,38.8393922 C50.9648143,40.3728223 50.3449746,41.6006975 49.5845919,42.5256002 C48.8233486,43.4503799 47.8753296,44.2285916 46.7404118,44.8601125 C45.6052481,45.4921252 44.504759,45.9483056 43.4401742,46.2293914 C42.3750975,46.5104772 41.1758719,46.7217219 39.8420054,46.8621419 C41.0585683,47.9149226 41.6669728,49.5767225 41.6669728,51.846804 L41.6669728,59.2535257 C41.6669728,59.6742937 41.8132948,60.0255895 42.1061847,60.3063064 C42.3987058,60.5865315 42.8606653,60.6690374 43.492678,60.5516109 C48.922946,58.7498829 53.3521992,55.5026409 56.7806837,50.810008 C60.2087994,46.117744 61.923472,40.8347817 61.923472,34.9597686 C61.9222424,30.0695396 60.7162539,25.5590099 58.3067362,21.4281798 Z"
                                                        id="Shape" fill="#FFFFFF">

                                                    </path>
                                                </g>
                                            </g>
                                        </svg>

                                        <span>Continue with Github</span>
                                    </button>
                                </div>
                                <p className="text-sm text-center text-white font-inter font-medium">Do not have any account?  <Link to='/register' className="text-pmColor font-semibold" >Create Account</Link> 👈</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;