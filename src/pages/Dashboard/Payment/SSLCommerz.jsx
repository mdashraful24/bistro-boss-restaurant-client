import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";

const SSLCommerz = () => {
    const [cart, refetch] = useCart();
    const { user } = useAuth();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleCreatePayment = async () => {
        try {
            const payment = {
                email: user.email,
                price: totalPrice,
                transactionId: "",
                date: new Date(),
                cartIds: cart.map((item) => item._id),
                menuItemIds: cart.map((item) => item.menuId),
                status: "pending",
            };

            const { data } = await axios.post('http://localhost:5000/create-ssl-payment', payment);

            if (data?.GatewayPageURL) {
                window.location.href = data.GatewayPageURL;
            } else {
                console.error("Failed to initiate payment. Please try again.");
            }
        } catch (error) {
            console.error("Error creating payment:", error);
        }
    };

    return (
        <div>
            <div>
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Payment Details</p>
                    <p className="text-gray-400">
                        Complete your order by providing your payment details.
                    </p>
                    <button
                        onClick={handleCreatePayment}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SSLCommerz;
