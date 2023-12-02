import slide1 from '../../assets/Slider/slider1.jpg'
import slide2 from '../../assets/Slider/slider2.jpg'
import slide3 from '../../assets/Slider/slider3.jpg'
import slide4 from '../../assets/Slider/slider4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
 
const Slider = () => {
  return (
    <div className='p-10'>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper max-w-7xl mx-auto"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
        </SwiperSlide>
        </Swiper>
    </div>
  );
}

export default Slider;