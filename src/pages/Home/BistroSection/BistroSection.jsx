import bgImg from '../../../assets/home/chef-service.jpg'

const BistroSection = () => {
    return (
        <section className="relative mb-16">
            {/* Background Image */}
            <div className="h-[500px]  bg-fixed bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `url('${bgImg}')`
            }}></div>

            {/* Center Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-3/4 md:w-4/5 px-8 py-10 md:py-24 shadow-lg rounded">
                <h1 className="text-4xl text-center mb-4">Bistro Boss</h1>
                <p className="text-center text-gray-700 md:w-4/5 md:mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus
                    laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius
                    dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                </p>
            </div>
        </section>
    );
};

export default BistroSection;
