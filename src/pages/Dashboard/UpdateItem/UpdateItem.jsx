import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

// Image upload
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { _id, name, category, recipe, price } = useLoaderData();

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgBB and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            // now send the menu item data to the server with the image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount > 0) {
                // show success popup
                // reset();
                Swal.fire({
                    position: "bottom-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };

    return (
        <div className="mb-16">
            <SectionTitle
                subHeading={"Hurry Up!"}
                heading={"UPDATE ITEM"}
            ></SectionTitle>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Recipe Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipeName">
                            Recipe name*
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Recipe name"
                            {...register("name", { required: true })}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D1A054]"
                        />
                    </div>

                    {/* Category and Price */}
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                Category*
                            </label>
                            <select defaultValue={category}
                                {...register("category", { required: true })}
                                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D1A054]"
                            >
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                Price*
                            </label>
                            <input
                                type="text"
                                defaultValue={price}
                                placeholder="Price"
                                {...register("price", { required: true })}
                                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D1A054]"
                            />
                        </div>
                    </div>

                    {/* Recipe Details */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipeDetails">
                            Recipe Details*
                        </label>
                        <textarea
                            defaultValue={recipe}
                            placeholder="Recipe Details"
                            rows="4"
                            {...register("recipe", { required: true })}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D1A054]"
                        ></textarea>
                    </div>

                    {/* File Upload */}
                    <div className="mb-8">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileUpload">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            className="block text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gray-300"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-10">
                        <button
                            type="submit"
                            className="btn gap-2 bg-[#835D23] hover:bg-[#835D23] text-white font-bold rounded-none"
                        >
                            Update Recipe Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;