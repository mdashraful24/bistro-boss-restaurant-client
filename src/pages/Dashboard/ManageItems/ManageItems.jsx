import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/UseMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div className="mb-16">
            <SectionTitle
                subHeading={"Hurry Up!"}
                heading={"MANAGE ALL ITEMS"}
            ></SectionTitle>
            <div className="bg-white px-8 py-5">
                <div>
                    <h2 className="text-2xl font-semibold uppercase">Total Items: { }</h2>
                </div>
                {/* Table */}
                <div className="overflow-x-auto rounded-t-xl mt-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white text-center uppercase">
                                <th className="py-5">#</th>
                                <th className="py-5">Item Image</th>
                                <th className="py-5">Item Name</th>
                                <th className="py-5">Price</th>
                                <th className="py-5">ACTION</th>
                                <th className="py-5">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id} className="text-center hover:bg-gray-50">
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
                                    <td className="py-5">${item.price}</td>
                                    <td className="py-5">
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button
                                                className="btn btn-sm bg-[#D1A054] hover:bg-[#b88943] text-white"
                                            >
                                                <FaEdit />
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="py-5">
                                        <button
                                            className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
                                            onClick={() => handleDeleteItem(item)}
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;