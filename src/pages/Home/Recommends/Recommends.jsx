import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecommendCard from "../../../Shared/RecommendCard/RecommendCard";
import FoodCard from "../../../Shared/FoodCard/FoodCard";

const Recommends = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setItems(data.slice(0, 3));
            })
    }, [])

    return (
        <section className="mb-16">
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>

            <div className="grid md:grid-cols-3 gap-10">
                {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                    // recommends.map(recommend => <RecommendCard key={recommend._id} recommend={recommend}></RecommendCard>)
                }
            </div>
        </section>
    );
};

export default Recommends;