import { useForm } from "react-hook-form"
import loginImg from '../../../src/assets/others/authentication2.png'
import bgImg from '../../../src/assets/others/authentication.png'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { setUser, createUser, handleGoogleSignIn, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    // Submit Form
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                // console.log("User created:", loggedUser);
                setUser(loggedUser);

                // New Technique
                // updateUserProfile(data.name, data.photoURL);

                // Old Technique
                updateUserProfile(data.name, data.photo);
                return updateUserProfile({ displayName: data.name, photoURL: data.photo });
            })
            .then(() => {
                // Create user entry in the database
                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            // console.log("user added to the database");
                            reset();
                            toast.success("Successfully Sign Up");
                            navigate("/");
                        }
                    })
            })
            .catch((error) => {
                toast.error("Email has already been used.");
            });
    };

    // Google Sign In
    // const handleGoogleSignInClickReg = () => {
    //     handleGoogleSignIn()
    //         .then(result => {
    //             const user = result.user;
    //             setUser(user);
    //             toast.success("Successfully Sign-In with Google");
    //             navigate("/");
    //         })
    //         .catch(error => {
    //             console.error("Google Sign-In Error:", error);
    //             toast.error(error.message || "Google Sign-In failed.");
    //         });
    // }

    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>Sign Up | Bistro Boss Restaurant</title>
            </Helmet>

            {/* Bg Image */}
            <div className="hero bg-base-200 min-h-screen" style={{
                backgroundImage: `url('${bgImg}')`
            }}>
                {/* Bg Image */}
                <div className="hero-content flex-col md:flex-row-reverse gap-0 md:gap-5 lg:gap-16" style={{
                    backgroundImage: `url('${bgImg})`,
                    boxShadow: '10px 10px 16px rgba(0, 0, 0, 0.8)',
                }}>
                    {/* Image */}
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img className='w-[200px] md:w-[500px]' src={loginImg} alt="" />
                    </div>
                    <div className="card w-full max-w-sm rounded-none lg:pr-10">

                        {/* Sign In Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body p-5">
                            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                            {/* Name */}
                            <div className="form-control">
                                <label className="label font-semibold">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text" {...register("name", { required: true })}
                                    name="name"
                                    placeholder="Type here" className="input input-bordered rounded-md" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            {/* Email */}
                            <div className="form-control">
                                <label className="label font-semibold">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email" {...register("email", { required: true })}
                                    name="email"
                                    placeholder="Type here" className="input input-bordered rounded-md" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            {/* Photo URL */}

                            {/* New Technique */}
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text" {...register("photoURL", { required: true })}
                                    placeholder="Photo URL"
                                    className="input input-bordered rounded-md" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div> */}

                            {/* Old Technique */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="photo" {...register("photo", { required: true })}
                                    name="photo"
                                    placeholder="Photo URL"
                                    className="input input-bordered rounded-md" />
                                {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                            </div>

                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        maxLength: {
                                            value: 20,
                                            message: "Password cannot be more than 20 characters",
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                            message: "Password must contain at least one uppercase letter, and one lowercase letter, and be at least 6 characters long",
                                        }
                                    })}
                                    name="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered rounded-md"
                                />
                                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                            </div>

                            {/* Button */}
                            <div className="form-control mt-6">
                                <input
                                    className="btn bg-[#D1A054B3] hover:bg-[#D1A054B3] rounded-md" type="submit"
                                    value="Sign Up" />
                            </div>

                            {/* Other Options */}
                            <div className='text-center font-semibold mt-2'>
                                <p className='text-[#d19f54] mb-1'><small>Already Sign Up? <span className='hover:text-red-500 mb-2'><Link to="/login">Go to log in</Link></span></small></p>
                                <small>Or sign In with</small>
                                <div>
                                    {/* Social */}
                                    <div className="flex justify-center items-center gap-8 md:gap-10 mt-4">
                                        <SocialLogin></SocialLogin>
                                        {/* <div onClick={handleGoogleSignInClickReg} className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                                            <FaFacebookF />
                                        </div> */}
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                                            <FaFacebookF />
                                        </div>
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                                            <FaGithub />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;








// Other options

// 1
{/* <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
                                })}
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered rounded-md"
                            />
                            {errors.password?.type === 'required' && <span className="text-red-600">Password is required.</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be at least 6 characters long.</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less then 20 characters.</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must contain at least one uppercase letter, and one lowercase letter.</span>}
                        </div> */}

// 2
{/* <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input
                                type="password" {...register("password", { pattern: /^[A-Za-z]+[a-z]+6+$/i }, { minLength: 6, maxLength: 20 }, { required: true })}
                                name="password"
                                placeholder="Enter your password" className="input input-bordered rounded-md" />
                            {errors.password && <span className="text-red-600">Password must contain at least 6 characters, including one uppercase and one lowercase letter.</span>}
                        </div> */}