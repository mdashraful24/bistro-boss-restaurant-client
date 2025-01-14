import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBoxOpen, FaTruck, FaUsers, FaWallet } from "react-icons/fa6";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })

    // custom shape for the barChart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom shape for the pieChart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })

    return (
        <div className="mt-9 mb-16 space-y-6">
            <h2 className="text-2xl font-semibold">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : "Back!"
                }
            </h2>

            {/* stats */}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Revenue Card */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-300 text-white p-4 rounded-lg shadow-md flex justify-center items-center gap-5">
                        <FaWallet className="text-4xl mb-2" />
                        <div>
                            <h2 className="text-3xl font-bold">{stats?.revenue ? stats.revenue.toFixed(2) : "0.00"}</h2>
                            <p className="text-lg">Revenue</p>
                        </div>
                    </div>

                    {/* Customers Card */}
                    <div className="bg-gradient-to-r from-[#D1A054] to-orange-200 text-white p-4 rounded-lg shadow-md flex justify-center items-center gap-5">
                        <FaUsers className="text-4xl mb-2" />
                        <div>
                            <h2 className="text-3xl font-bold">{stats.users}</h2>
                            <p className="text-lg">Customers</p>
                        </div>
                    </div>

                    {/* Products Card */}
                    <div className="bg-gradient-to-r from-pink-500 to-red-300 text-white p-4 rounded-lg shadow-md flex justify-center items-center gap-5">
                        <FaBoxOpen className="text-4xl mb-2" />
                        <div>
                            <h2 className="text-3xl font-bold">{stats.menuItems}</h2>
                            <p className="text-lg">Products</p>
                        </div>
                    </div>

                    {/* Orders Card */}
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-300 text-white p-4 rounded-lg shadow-md flex justify-center items-center gap-5">
                        <FaTruck className="text-4xl mb-2" />
                        <div>
                            <h2 className="text-3xl font-bold">{stats.orders}</h2>
                            <p className="text-lg">Orders</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* chart */}
            <div className="flex flex-col md:flex-row items-center bg-white">
                {/* barChart */}
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                        {/* <Legend></Legend> */}
                    </BarChart>
                </div>

                {/* pieChart */}
                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;