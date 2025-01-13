import { Link, NavLink, useNavigate } from 'react-router-dom';
import profile from '../../assets/others/profile.png';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { FaCartShopping } from 'react-icons/fa6';
import useCart from '../../hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success(`Signed out "${user.email}"`, {
                    position: "top-right",
                });
                navigate("/");
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const navOptions = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'text-[#EEFF25]' : 'text-white'
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/menu"
                    className={({ isActive }) =>
                        isActive ? 'text-[#EEFF25]' : 'text-white'
                    }
                >
                    Our Menu
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/order/salad"
                    className={({ isActive }) =>
                        isActive ? 'text-[#EEFF25]' : 'text-white'
                    }
                >
                    Order
                </NavLink>
            </li>
            {/* <li>
                <Link to="/dashboard">
                    <button className="flex items-center gap-2">
                        <FaCartShopping />
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
                </Link>
            </li>
            {
                user ? <>
                    <button onClick={handleLogOut} className='uppercase text-white'>Log Out</button>
                </> : <>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? 'text-[#EEFF25]' : 'text-white'
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                </>
            } */}
        </>
    );

    return (
        <>
            <div className="max-w-screen-xl mx-auto navbar fixed z-10 bg-black bg-opacity-60 font-bold uppercase lg:px-5">
                <div className="navbar-start pb-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="text-sm dropdown-content bg-black space-y-2 rounded-box z-[1] mt-3 w-32 p-5 shadow"
                        >
                            {navOptions}
                        </ul>
                    </div>
                    <div className="text-[17px] md:text-xl text-white">
                        <p>Bistro Boss</p>
                        <p className="text-xs md:text-sm">R e s t a u r a n t</p>
                    </div>
                </div>
                <div className="navbar-end space-x-7">
                    <div className="hidden lg:flex">
                        <ul className="flex items-center gap-5 text-white -mr-2">{navOptions}</ul>
                    </div>

                    {/* Dashboard */}
                    <div>
                        <Link to="/dashboard">
                            <button className="flex items-center gap-2 text-white">
                                <FaCartShopping />
                                <div className="badge badge-secondary">+{cart.length}</div>
                            </button>
                        </Link>
                    </div>
                    
                    {/* Logout */}
                    {
                        user ? <>
                            <button onClick={handleLogOut} className='uppercase text-white'>Log Out</button>
                        </> : <>
                            <div>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive ? 'text-[#EEFF25]' : 'text-white'
                                    }
                                >
                                    Login
                                </NavLink>
                            </div>
                        </>
                    }

                    {/* User avatar */}
                    <div className="flex items-center gap-5">
                        <img
                            className="rounded-full w-9 md:w-11 h-9 md:h-11 object-cover cursor-pointer p-1 hover:bg-gray-500"
                            src={user && user?.photoURL ? user?.photoURL : profile}
                            alt={user && user.displayName ? user.displayName : "User profile"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
