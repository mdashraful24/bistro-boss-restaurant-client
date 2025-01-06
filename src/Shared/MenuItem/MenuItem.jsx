const MenuItem = ({ item }) => {

    const { name, image, recipe, price } = item;

    return (
        <div className="flex space-x-4 px-2">
            <img style={{ borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt={name} />
            <div>
                <h3 className="uppercase">{name} ------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;