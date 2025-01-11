// Click validate button form not submit
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../../src/assets/others/authentication2.png'
import bgImg from '../../../src/assets/others/authentication.png'
import { useContext, useEffect, useRef, useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Login = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const [error, setError] = useState({});
    const [showPassWord, setShowPassword] = useState(false);
    const { signIn, setUser, handleGoogleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    // Load 6 Captcha
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    // Submit Form
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user);
                Swal.fire({
                    title: `Welcome "${user?.displayName}"`,
                    text: `Hello, ${user?.displayName || user?.email}`,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                });
                // navigate(location?.state ? location.state : "/");
                // New Technique
                console.log('state in the location login page', location.state);
                const from = location.state?.from?.pathname || "/";
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError({ login: "Please check your email or password." });
                toast.error("Login Failed. Please try again.");
            })
    }

    // Google Sign In
    const handleGoogleSignInClick = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success("Successfully! Login with Google");
                // navigate(location?.state ? location.state : "/");
                navigate(fromJSON, { replace: true });
            })
            .catch(error => {
                setError({ ...error, google: error.message });
                toast.error("Google Sign-In Failed. Please try again.");
            })
    }

    // Captcha Validation
    // const handleValidateCaptcha = (event) => {
    //     event.preventDefault(); // Prevent form submission
    //     const user_captcha_value = captchaRef.current.value;
    //     console.log(user_captcha_value);

    //     if (validateCaptcha(user_captcha_value)) {
    //         setDisable(false);
    //     }
    //     else {
    //         setDisable(true);
    //     }
    // }

    // Captcha Validation
    const handleValidateCaptcha = (event) => {
        event.preventDefault();
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value);

        if (validateCaptcha(user_captcha_value)) {
            setDisable(false);
        } else {
            setDisable(true);
            captchaRef.current.value = '';
            toast.error("Invalid Captcha. Please try again.");
        }
    };


    return (
        // '<><>' --> Fragment
        <>
            {/* Helmet */}
            <Helmet>
                <title>Login | Bistro Boss Restaurant</title>
            </Helmet>

            {/* Bg Image */}
            <div className="hero bg-base-200 min-h-screen" style={{
                backgroundImage: `url('${bgImg}')`
            }}>
                {/* Bg Image */}
                <div className="hero-content flex-col md:flex-row gap-0 md:gap-5 lg:gap-16 md:h-[650px]" style={{
                    backgroundImage: `url('${bgImg})`,
                    boxShadow: '10px 10px 16px rgba(0, 0, 0, 0.8)',
                }}>
                    {/* Image */}
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img className='w-[200px] md:w-[500px]' src={loginImg} alt="" />
                    </div>
                    <div className="card w-full max-w-sm rounded-none lg:pr-10">
                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="card-body md:p-5">
                            <h1 className="text-3xl font-bold text-center">Login</h1>
                            <div className="form-control">
                                <label className="label font-semibold">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email" placeholder="Type here" className="input input-bordered rounded-md" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input
                                    type={showPassWord ? 'text' : 'password'}
                                    name="password" placeholder="Enter your password" className="input input-bordered rounded-md" required />
                                <button type="button" onClick={() => setShowPassword(!showPassWord)}
                                    className="absolute right-4 top-[52px]">
                                    {
                                        showPassWord ? <FaEyeSlash /> : <FaEye />
                                    }
                                </button>
                                {
                                    error.login && (
                                        <label className="label text-sm text-red-600">
                                            {error.login}
                                        </label>
                                    )
                                }
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            {/* Captcha */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input
                                    type="text"
                                    ref={captchaRef}
                                    name="captcha" placeholder="Type here" className="input input-bordered rounded-md" />
                                {/* TODO: write "required" */}
                                <button onClick={(event) => handleValidateCaptcha(event)} className='btn btn-outline btn-xs w-20 mt-3 rounded-md'>Validate</button>
                            </div>

                            {/* Button */}
                            <div className="form-control mt-6">
                                {/* TODO: apply disabled for re-captcha "disable" */}
                                <input
                                    disabled={false}
                                    className="btn bg-[#D1A054B3] hover:bg-[#D1A054B3] rounded-md" type="submit"
                                    value="Sign In" />
                            </div>

                            {/* Other Options */}
                            <div className='text-center font-semibold mt-2'>
                                <p className='text-[#d19f54] mb-1'><small>New here? <span className='hover:text-red-500 mb-2'><Link to="/signUp">Create a New Account</Link></span></small></p>
                                <small>Or sign in with</small>
                                <div>
                                    {/* Social */}
                                    <div className="flex justify-center items-center gap-8 md:gap-10 mt-4">
                                        <div onClick={handleGoogleSignInClick} className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                                            <FaFacebookF />
                                        </div>
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                                            <FaGoogle />
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

export default Login;


// Use onBlur
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import loginImg from '../../../src/assets/others/authentication2.png'
// import bgImg from '../../../src/assets/others/authentication.png'
// import { useContext, useEffect, useRef, useState } from 'react';
// import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
// import { Helmet } from 'react-helmet-async';
// import { AuthContext } from '../../providers/AuthProvider';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Login = () => {
//     const captchaRef = useRef(null);
//     const [disable, setDisable] = useState(true);

//     const { signIn } = useContext(AuthContext);

//     // Load 6 Captcha
//     useEffect(() => {
//         loadCaptchaEnginge(6);
//     }, [])

//     // Handle Form
//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 Swal.fire({
//                     title: "You Logged in successfully!",
//                     icon: "success",
//                     draggable: true
//                 });
//             })
//     }

//     // Captcha Validation
//     const handleCaptchaChange = () => {
//         const user_captcha_value = captchaRef.current.value;
//         console.log(user_captcha_value);

//         if (validateCaptcha(user_captcha_value)) {
//             setDisable(false);
//         } else {
//             setDisable(true);
//         }

//         // Reload the CAPTCHA each time the input changes
//         loadCaptchaEnginge(6);
//     }

//     return (
//         // '<><>' --> Fragment
//         <>
//             {/* Helmet */}
//             <Helmet>
//                 <title>Login | Bistro Boss Restaurant</title>
//             </Helmet>

//             {/* Bg Image */}
//             <div className="hero bg-base-200 min-h-screen" style={{
//                 backgroundImage: `url('${bgImg}')`
//             }}>
//                 {/* Bg Image */}
//                 <div className="hero-content flex-col md:flex-row gap-0 md:gap-5 lg:gap-16 md:h-[650px]" style={{
//                     backgroundImage: `url('${bgImg})`,
//                     boxShadow: '10px 10px 16px rgba(0, 0, 0, 0.8)',
//                 }}>
//                     {/* Image */}
//                     <div className="text-center md:w-1/2 lg:text-left">
//                         <img className='w-[200px] md:w-[500px]' src={loginImg} alt="" />
//                     </div>
//                     <div className="card w-full max-w-sm rounded-none lg:pr-10">
//                         {/* Login Form */}
//                         <form onSubmit={handleLogin} className="card-body md:p-5">
//                             <h1 className="text-3xl font-bold text-center">Login</h1>
//                             <div className="form-control">
//                                 <label className="label font-semibold">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email" placeholder="Type here" className="input input-bordered rounded-md" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text font-semibold">Password</span>
//                                 </label>
//                                 <input
//                                     type="password"
//                                     name="password" placeholder="Enter your password" className="input input-bordered rounded-md" required />
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>

//                             {/* Captcha */}
//                             <div className="form-control">
//                                 <label className="label">
//                                     <LoadCanvasTemplate />
//                                 </label>
//                                 <input
//                                     type="text"
//                                     ref={captchaRef}
//                                     name="captcha" placeholder="Type here" className="input input-bordered rounded-md" onBlur={handleCaptchaChange} required />
//                             </div>

//                             {/* Button */}
//                             <div className="form-control mt-6">
//                                 <input
//                                     disabled={disable}
//                                     className="btn bg-[#D1A054B3] hover:bg-[#D1A054B3] rounded-md" type="submit"
//                                     value="Sign In" />
//                             </div>

//                             {/* Other Options */}
//                             <div className='text-center font-semibold mt-2'>
//                                 <p className='text-[#d19f54] mb-1'><small>New here? <span className='hover:text-red-500 mb-2'><Link to="/signUp">Create a New Account</Link></span></small></p>
//                                 <small>Or sign in with</small>
//                                 <div>
//                                     {/* Social */}
//                                     <div className="flex justify-center items-center gap-8 md:gap-10 mt-4">
//                                         <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black">
//                                             <FaFacebookF />
//                                         </div>
//                                         <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black">
//                                             <FaGoogle />
//                                         </div>
//                                         <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black">
//                                             <FaGithub />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;


// Click validate button form submit
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import loginImg from '../../../src/assets/others/authentication2.png'
// import bgImg from '../../../src/assets/others/authentication.png'
// import { useContext, useEffect, useRef, useState } from 'react';
// import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
// import { Helmet } from 'react-helmet-async';
// import { AuthContext } from '../../providers/AuthProvider';
// import { Link } from 'react-router-dom';

// const Login = () => {
//     const captchaRef = useRef(null);
//     const [disable, setDisable] = useState(true);

//     const { signIn } = useContext(AuthContext);

//     // Load 6 Captcha
//     useEffect(() => {
//         loadCaptchaEnginge(6);
//     }, [])

//     // Handle Form
//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//             })
//     }

//     // Captcha Validation
//     const handleValidateCaptcha = () => {
//         const user_captcha_value = captchaRef.current.value;
//         console.log(user_captcha_value);

//         if (validateCaptcha(user_captcha_value)) {
//             setDisable(false);
//         }
//         else {
//             setDisable(true);
//         }
//     }

//     return (
//         // '<><>' --> Fragment
//         <>
//             {/* Helmet */}
//             <Helmet>
//                 <title>Login | Bistro Boss Restaurant</title>
//             </Helmet>

//             {/* Bg Image */}
//             <div className="hero bg-base-200 min-h-screen" style={{
//                 backgroundImage: `url('${bgImg}')`
//             }}>
//                 {/* Bg Image */}
//                 <div className="hero-content flex-col md:flex-row gap-0 md:gap-5 lg:gap-16 md:h-[650px]" style={{
//                     backgroundImage: `url('${bgImg})`,
//                     boxShadow: '10px 10px 16px rgba(0, 0, 0, 0.8)',
//                 }}>
//                     {/* Image */}
//                     <div className="text-center md:w-1/2 lg:text-left">
//                         <img className='w-[200px] md:w-[500px]' src={loginImg} alt="" />
//                     </div>
//                     <div className="card w-full max-w-sm rounded-none lg:pr-10">
//                         {/* Login Form */}
//                         <form onSubmit={handleLogin} className="card-body md:p-5">
//                             <h1 className="text-3xl font-bold text-center">Login</h1>
//                             <div className="form-control">
//                                 <label className="label font-semibold">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email" placeholder="Type here" className="input input-bordered rounded-md" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text font-semibold">Password</span>
//                                 </label>
//                                 <input
//                                     type="password"
//                                     name="password" placeholder="Enter your password" className="input input-bordered rounded-md" required />
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>

//                             {/* Captcha */}
//                             <div className="form-control">
//                                 <label className="label">
//                                     <LoadCanvasTemplate />
//                                 </label>
//                                 <input
//                                     type="text"
//                                     ref={captchaRef}
//                                     name="captcha" placeholder="Type here" className="input input-bordered rounded-md" required />
//                                 <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs w-20 mt-3 rounded-md'>Validate</button>
//                             </div>

//                             {/* Button */}
//                             <div className="form-control mt-6">
//                                 <input
//                                     disabled={disable}
//                                     className="btn bg-[#D1A054B3] hover:bg-[#D1A054B3] rounded-md" type="submit"
//                                     value="Sign In" />
//                             </div>

//                             {/* Other Options */}
//                             <div className='text-center font-semibold mt-2'>
//                                 <p className='text-[#d19f54] mb-1'><small>New here? <span className='hover:text-red-500 mb-2'><Link to="/signUp">Create a New Account</Link></span></small></p>
//                                 <small>Or sign in with</small>
//                                 <div>
//                                     {/* Social */}
//                                     <div className="flex justify-center items-center gap-8 md:gap-10 mt-4">
//                                         <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black">
//                                             <FaFacebookF />
//                                         </div>
//                                         <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black">
//                                             <FaGoogle />
//                                         </div>
//                                         <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black">
//                                             <FaGithub />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;