import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaBook, FaCalendarAlt, FaEnvelope, FaHome, FaListUl, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { MdMenuBook, MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054] p-4">
                {/* Title */}
                <div className="text-3xl font-bold px-6 pt-5 pb-6">
                    <p>Bistro Boss</p>
                    <p className="text-xl">R e s t a u r a n t</p>
                </div>

                {/* Dashboard item title */}
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome"><FaHome />Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems"><FaUtensils />Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems"><FaListUl />Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageBookings"><FaBook />Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users"><FaUsers />All Users</NavLink>
                            </li>
                        </> : <>
                                <li>
                                    <NavLink to="/dashboard/userHome"><FaHome />User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation"><FaCalendarAlt />Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory"><IoWallet />Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart"><FaShoppingCart />My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review"><MdRateReview />Add Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings"><BsCalendar2CheckFill />My Booking</NavLink>
                                </li> 
                        </>
                    }

                    {/* Divider */}
                    <div className="bg-black h-[1.5px] my-4"></div>

                    {/* Sheared nav links */}
                    <li>
                        <NavLink to="/"><FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"><MdMenuBook />Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"><FaShoppingBag />Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"><FaEnvelope />Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className="flex-1 px-10 bg-gray-50">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;



{/* <li>
                                <NavLink to="/dashboard/userHome"><FaHome />User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation"><FaCalendarAlt />Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation"><IoWallet />Payment History</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart"><FaShoppingCart />My Cart ({cart.length})</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/review"><MdRateReview />Add Review</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings"><BsCalendar2CheckFill />My Booking</NavLink>
                            </li> */}