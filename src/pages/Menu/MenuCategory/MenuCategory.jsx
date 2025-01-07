import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img, title, para }) => {
    return (
        <div>
            {
                title && <Cover
                    bgImg={img}
                    title={title}
                    para={para}>
                </Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-20 mb-7">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center mb-10">
                <button className="btn bg-transparent uppercase border-0 border-b-4 border-b-black hover:text-black hover:border-none px-5">
                    ORDER YOUR FAVORITE FOOD
                </button>
            </div>
        </div>
    );
};

export default MenuCategory;