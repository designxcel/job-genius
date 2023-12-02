import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import { useEffect, useState } from 'react';

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    },[])
    return (
        <div className='md:p-20 mt-10 mb-10'>
            <div className='text-5xl text-center font-bold mb-10'>
                <h2>What Our Client Say!</h2>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                reviews.map(review =><SwiperSlide className="px-20 space-y-6" key={review._id}>
                
                <div className="avatar flex justify-center items-center">
                    <div className="w-16 rounded-full">
                        <img src={review.image} />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                    />
                </div>
                <div className="text-5xl text-cyan-400 flex justify-center">
                    <FaQuoteLeft></FaQuoteLeft>
                </div>
                <p className='max-w-7xl mx-auto text-gray-400'>{review.desc}</p>
                <h2 className="text-3xl text-center font-bold uppercase text-gray-700">{review.name}</h2>
            </SwiperSlide>)
            }
            </Swiper>
        </div>
    );
};

export default Testimonial;