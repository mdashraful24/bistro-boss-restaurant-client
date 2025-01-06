const Navbar = () => {

    const navOptions = <>
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
    </>

    return (
        <>
            <div className="max-w-screen-xl mx-auto navbar fixed z-10 bg-[#151515] bg-opacity-40 font-bold uppercase">
                <div className="navbar-start pb-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost md:text-xl text-white">
                        Bistro Boss
                        <br />
                        Restaurant
                    </a>
                </div>
                {/* <div className="navbar-center hidden lg:flex"></div> */}
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal text-white px-5">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;







// npm install @fortawesome/fontawesome-free

// const Navbar = () => {
//     return (
//         <nav className="bg-black text-white px-4 py-3">
//             <div className="container mx-auto flex items-center justify-between">
//                 {/* Logo Section */}
//                 <a className="text-2xl font-bold flex flex-col items-start leading-tight">
//                     <span>BISTRO BOSS</span>
//                     <span className="text-sm tracking-wide">RESTAURANT</span>
//                 </a>

//                 {/* Navigation Links */}
//                 <div className="hidden md:flex space-x-6">
//                     <a href="#" className="hover:text-yellow-500">
//                         HOME
//                     </a>
//                     <a href="#" className="hover:text-yellow-500">
//                         CONTACT US
//                     </a>
//                     <a href="#" className="hover:text-yellow-500">
//                         DASHBOARD
//                     </a>
//                     <a href="#" className="hover:text-yellow-500">
//                         OUR MENU
//                     </a>
//                     <a href="#" className="hover:text-yellow-500">
//                         OUR SHOP
//                     </a>
//                 </div>

//                 {/* Icons Section */}
//                 <div className="flex items-center space-x-4">
//                     {/* Cart Icon */}
//                     <a href="#" className="relative">
//                         <i className="fas fa-shopping-cart text-lg"></i>
//                         <span className="absolute top-0 right-0 bg-red-600 text-xs rounded-full px-1.5 py-0.5 text-white">
//                             7
//                         </span>
//                     </a>

//                     {/* User Avatar and Sign Out */}
//                     <div className="flex items-center space-x-2">
//                         <img
//                             src="https://via.placeholder.com/30"
//                             alt="User Avatar"
//                             className="w-8 h-8 rounded-full"
//                         />
//                         <a href="#" className="hover:text-yellow-500">
//                             SIGN OUT
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
