import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                // console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        // console.log(res.data);
                        toast.success("Successfully Sign-In with Google");
                        navigate(from, { replace: true });
                        // navigate("/");
                    })
                    .catch(error => {
                        console.error("Google Sign-In Error:", error);
                        toast.error(error.message || "Google Sign-In failed.");
                    });
            })
    }

    return (
        <div className="">
            <div
                onClick={handleGoogleSignIn}
                className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer hover:bg-[#D1A054B3] hover:border-[#D1A054B3] hover:scale-110 transition-transform  duration-300"
            >
                <FcGoogle />
            </div>
        </div>
    );
};

export default SocialLogin;