import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import useMenu from "../../../hooks/UseMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import menuCoverImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");

    return (
        <div>
            <Helmet>
                <title>Our Menu | Bistro Boss Restaurant</title>
            </Helmet>

            {/* Main cover */}
            <Cover
                bgImg={menuCoverImg}
                title={"OUR MENU"}
                para={"Would you like to try a dish?"}>
            </Cover>
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>
            {/* Offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Desert menu items */}
            <MenuCategory
                img={dessertImg}
                items={dessert}
                title={"dessert"}
                para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            <MenuCategory
                img={pizzaImg}
                items={pizza}
                title={"pizza"}
                para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            <MenuCategory
                img={saladImg}
                items={salad}
                title={"salad"}
                para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            <MenuCategory
                img={soupImg}
                items={soup}
                title={"soup"}
                para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
        </div>
    );
};

export default Menu;