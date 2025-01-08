import { useForm } from "react-hook-form"
import loginImg from '../../../src/assets/others/authentication2.png'
import bgImg from '../../../src/assets/others/authentication.png'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
    }

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
                                <p className='text-[#d19f54] mb-1'><small>Already registered? <span className='hover:text-red-500 mb-2'><Link to="/login">Go to log in</Link></span></small></p>
                                <small>Or sign up with</small>
                                <div>
                                    {/* Social */}
                                    <div className="flex justify-center items-center gap-8 md:gap-10 mt-4">
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black">
                                            <FaFacebookF />
                                        </div>
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black">
                                            <FaGoogle />
                                        </div>
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black">
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