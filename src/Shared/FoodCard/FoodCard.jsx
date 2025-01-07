const FoodCard = ({ item }) => {

    const { name, image, recipe, price } = item;

    return (
        <div className="card bg-[#F3F3F3] rounded-none">
            <figure>
                <img className="w-full object-cover" src={image} alt="" />
            </figure>
            <p className="absolute right-0 mr-4 mt-4 bg-[#111827] text-white px-3 py-1.5">${price}</p>
            <div className="p-5 flex flex-col justify-between flex-grow text-center">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-gray-600 overflow-hidden my-2">{recipe}</p>
                {/* Button */}
                <div className="mt-5">
                    <button className="btn bg-[#E8E8E8] hover:bg-[#1F2937] text-[#BB8506] uppercase border-0 border-b-4 border-[#BB8506] hover:border-none px-5">
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;