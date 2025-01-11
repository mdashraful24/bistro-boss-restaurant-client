import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaCalendarAlt, FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdRateReview } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();

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
                    <li>
                        <NavLink to="/dashboard/userHome"><FaHome />User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"><FaCalendarAlt />Reservation</NavLink>
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
                    {/* Divider */}
                    {/* <div className="divider divider-neutral"></div> */}
                    <div class="bg-white h-[2px] my-4"></div>
                    <li>
                        <NavLink to="/"><FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"><IoMdMenu />Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order"><FaShoppingBag />Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/"><TbMailFilled />Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className="flex-1 px-10 bg-gray-100">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;