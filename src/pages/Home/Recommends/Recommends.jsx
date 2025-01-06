import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecommendCard from "../../../Shared/RecommendCard/RecommendCard";

const Recommends = () => {

    const [recommends, setRecommends] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setRecommends(data.slice(0, 3));
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
                    recommends.map(recommend => <RecommendCard key={recommend._id} recommend={recommend}></RecommendCard>)
                }
            </div>
        </section>
    );
};

export default Recommends;