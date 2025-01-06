const RecommendCard = ({ recommend }) => {

    const { name, image, recipe } = recommend;

    return (
        <div className="card bg-[#F3F3F3] rounded-none text-center">
            <figure >
                <img className="w-full object-cover" src={image} alt="" />
            </figure>
            <div className="p-5">
                <h2 className="text-lg font-semibold">
                    {name}
                </h2>
                <p className="text-gray-600">{recipe}</p>
                {/* Button */}
                <div className="mt-4">
                    <button className="btn bg-[#E8E8E8] hover:bg-[#1F2937] text-[#BB8506] uppercase border-0 border-b-4 border-[#BB8506] hover:border-none px-5">
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecommendCard;