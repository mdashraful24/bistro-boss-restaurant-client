import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0); //accumulator or total
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="mb-16">
            <SectionTitle
                subHeading={"My Cart"}
                heading={"WANNA ADD MORE?"}
            ></SectionTitle>
            <div className="bg-white px-8 py-2">
                <div className="flex justify-between items-center mt-4">
                    <h2 className="text-2xl font-semibold">Total orders: {cart.length}</h2>
                    <h2 className="text-2xl font-semibold">Total price: ${totalPrice.toFixed(2)}</h2>
                    <button className="btn bg-[#D1A054] hover:bg-[#D1A054] text-white">Pay</button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-t-xl mt-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white text-center">
                                <th className="py-5">#</th>
                                <th className="py-5">ITEM IMAGE</th>
                                <th className="py-5">ITEM NAME</th>
                                <th className="py-5">PRICE</th>
                                <th className="py-5">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id} className=" text-center">
                                    <td>{index + 1}</td>
                                    <td className="py-5">
                                        <div className="flex justify-center items-center gap-3">
                                            <div className="avatar">
                                                <div className="h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-5">{item.name}</td>
                                    <td className="py-5">${item.price.toFixed(2)}</td>
                                    <th className="py-5">
                                        <button
                                            className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
                                            onClick={() => handleDelete(item._id)}
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
