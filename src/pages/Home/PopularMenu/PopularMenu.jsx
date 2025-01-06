import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular")
                setMenu(popularItems);
                // setMenu(data);
            })
    })

    return (
        <section className="mb-16">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            {/* Button */}
            <div className="flex justify-center mt-10">
                <button className="btn bg-transparent uppercase border-0 border-b-4 border-black hover:text-black hover:border-none px-5">
                    View Full Menu
                </button>
            </div>
        </section>
    );
};

export default PopularMenu;