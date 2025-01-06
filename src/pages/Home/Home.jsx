import Banner from "./Banner/Banner";
import BistroSection from "./BistroSection/BistroSection";
import Category from "./Category/Category";
import Contact from "./Contact/Contact";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Recommends from "./Recommends/Recommends";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroSection></BistroSection>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;