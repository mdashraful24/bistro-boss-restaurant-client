import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css';

const Testimonials = () => {

    /**
     * Install Font Awesome Libraries
     * 
     * npm install --save @fortawesome/react-fontawesome
     * npm install --save @fortawesome/free-solid-svg-icons
     */

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, []);

    return (
        <div className='my-20'>
            <SectionTitle
                subHeading={"What Our Clients Say"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]} // Add Autoplay module
                className="mySwiper"
            >
                {
                    reviews.map(review => (
                        <SwiperSlide key={review._id} review={review}>
                            <div className='flex flex-col items-center text-center space-y-4 mx-20'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FontAwesomeIcon icon={faQuoteLeft} size="4x" color="" />
                                <div className='space-y-2'>
                                    <p>{review.details}</p>
                                    <h3 className='text-2xl text-[#CD9003]'>{review.name}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;
