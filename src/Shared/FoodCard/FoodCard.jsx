import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            // send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    // console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            // position: "top-center",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the cart to update the cart items count
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In.",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirect to login with the current location as "from"
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };


    return (
        <div className="card bg-[#F3F3F3] rounded-none">
            <figure>
                <img className="w-full h-full md:h-60 object-cover" src={image} alt="" />
            </figure>
            <p className="absolute right-0 mr-4 mt-4 bg-[#111827] text-white px-3 py-1.5">${price}</p>
            <div className="p-5 flex flex-col justify-between flex-grow text-center">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-gray-600 overflow-hidden my-2">{recipe}</p>
                {/* Button */}
                <div className="mt-5">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn bg-[#E8E8E8] hover:bg-[#1F2937] text-[#BB8506] uppercase border-0 border-b-4 border-[#BB8506] hover:border-none px-5">
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;