import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white mt-16">
            <div className="bg-[#151515] bg-opacity-70">
                <div className="pt-10">
                    <SectionTitle
                        subHeading={"Check it out"}
                        heading={"FROM OUR MENU"}
                    ></SectionTitle>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-10 lg:px-36 pb-24">
                    <div>
                        <img src={featureImg} alt="" />
                    </div>
                    <div className="text-justify px-5">
                        <p>March 20, 2023</p>
                        <p className="uppercase my-1">WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn bg-transparent text-white uppercase border-0 border-b-4 hover:text-black hover:border-none px-5 mt-7">
                            add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;