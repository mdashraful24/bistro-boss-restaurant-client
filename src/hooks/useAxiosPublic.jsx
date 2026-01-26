import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "http://localhost:5000" // https://bistro-boss-restaurant-server-lake.vercel.app
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;