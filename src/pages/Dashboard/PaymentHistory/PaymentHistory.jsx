import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <div className="mb-16">
            <SectionTitle subHeading={"At a Glance!"} heading={"PAYMENT HISTORY"}></SectionTitle>

            <div className="bg-white px-8 py-5">
                <div>
                    <h2 className="text-2xl font-semibold uppercase">Total Payments: {payments.length}</h2>
                </div>
                {/* Table */}
                <div className="overflow-x-auto rounded-t-xl mt-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white text-center uppercase">
                                <th className="py-5">Email</th>
                                <th className="py-5">Transaction Id</th>
                                <th className="py-5">TOTAL PRICE</th>
                                <th className="py-5">PAYMENT DATE</th>
                                <th className="py-5">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map(payment => <tr key={payment._id} className="text-center hover:bg-gray-50">
                                    <td className="py-5">{payment.email}</td>
                                    <td className="py-5">{payment.transactionId}</td>
                                    <td className="py-5">{payment.price.toFixed(2)}</td>
                                    <td className="py-5">{new Date(payment.date).toISOString().split('T')[0]}</td>
                                    <td className="py-5 text-red-500">{payment.status}</td>
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

export default PaymentHistory;