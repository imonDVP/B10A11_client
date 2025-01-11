// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/img2.jpg'
import bgimg2 from '../assets/img3.jpg'
import bgimg3 from '../assets/img7.jpg'
import bgimg4 from '../assets/img9.jpg'

export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto bg-slate-100  dark:bg-black dark:text-white'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='Take Web Development Service'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Take App Development Service'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Take Digital Marketing Service'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg4}
            text='Take Software Service'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
