import { Parallax } from 'react-parallax';

const Cover = ({ bgImg, title, para }) => {
    return (
        <Parallax
            blur={{ min: -20, max: 20 }}
            bgImage={bgImg}
            bgImageAlt="the menu"
            strength={-200}
        >
            {/* Blur transition from min to max */}
            <div className="relative">
                {/* Background Image */}
                <div className="h-[500px] md:h-[600px] bg-fixed bg-cover bg-center bg-no-repeat"></div>

                {/* Center Content */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#151515] bg-opacity-60 text-white uppercase w-3/4 md:w-4/5 px-8 py-10 md:py-24">
                    <h1 className="text-4xl text-center mb-4">{title}</h1>
                    <p className="text-center md:w-4/5 md:mx-auto">{para}</p>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;