import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");

    return (
        <section className="mb-16">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            {/* Button */}
            <div className="flex justify-center mt-10">
                <button className="btn bg-transparent uppercase border-0 border-b-4 border-b-black hover:text-black hover:border-none px-5">
                    View Full Menu
                </button>
            </div>
        </section>
    );
};

export default PopularMenu;