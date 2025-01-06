import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            {/* Main Footer Section */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Section with Darker Background */}
                <div className="bg-[#1e293b] text-white flex flex-col items-center p-12">
                    <h3 className="text-lg font-bold">CONTACT US</h3>
                    <p className="mt-2">123 ABS Street, Unit 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>

                {/* Right Section with Slightly Lighter Background */}
                <div className="bg-[#0f172a] text-white flex flex-col items-center p-12">
                    <h3 className="text-lg font-bold">Follow US</h3>
                    <p className="mt-2">Join us on social media</p>
                    <div className="flex mt-4 space-x-4">
                        <a href="#" className="text-white hover:text-gray-400">
                            <i className="fab fa-facebook-f"><FaFacebookF /></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <i className="fab fa-instagram"><FaInstagram /></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <i className="fab fa-twitter"><FaTwitter /></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="bg-black text-white text-center py-4">
                <p className="text-sm">Copyright &copy; {new Date().getFullYear()} CulinaryCloud. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
