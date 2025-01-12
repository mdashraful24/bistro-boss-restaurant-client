import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = user => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
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
                subHeading={"How many??"}
                heading={"MANAGE ALL USERS"}
            ></SectionTitle>
            <div className="bg-white px-8 py-5">
                <div>
                    <h2 className="text-3xl font-bold">Total users: {users.length}</h2>
                </div>
                {/* Table */}
                <div className="overflow-x-auto rounded-t-xl mt-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white text-center">
                                <th className="py-5">#</th>
                                <th className="py-5">NAME</th>
                                <th className="py-5">EMAIL</th>
                                <th className="py-5">ROLE</th>
                                <th className="py-5">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id} className="text-center hover:bg-gray-50">
                                    <td className="py-5 font-bold">{index + 1}</td>
                                    <td className="py-5">{user.name}</td>
                                    <td className="py-5">{user.email}</td>
                                    <td className="py-5">
                                        {user.role === 'admin' ? 'Admin' : <button
                                            className="btn btn-sm bg-[#D1A054] hover:bg-[#D1A054] text-white"
                                            onClick={() => handleMakeAdmin(user)}
                                        >
                                            <FaUsers />
                                        </button>}
                                    </td>
                                    <td className="py-5">
                                        <button
                                            className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
                                            onClick={() => handleDeleteUser(user)}
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

export default AllUsers;