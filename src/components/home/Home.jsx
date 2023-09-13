import React from 'react'
import './home.css'
import Applybtn from './Applybtn';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from "swiper";

import Img1 from '../../assets/home-banner1.jpg'

const data = [
  {
    id: 1,
    p_text: 'Best online education service In the world',
    h2_text: 'Best Coding Platform Here',
    Image: Img1
  },
  {
    id: 2,
    p_text: 'Best online education service In the world',
    h2_text: 'One Step Ahead This Season',
    Image: Img1
  }]

const Home = () => {
  return (
      <section id='home'>
      <Swiper
        cssMode={true}
        navigation={false}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
      {
        data.map(({id, p_text, h2_text, Image}) => {
        return (
        <SwiperSlide  key={id}>
        <div className="banner-text" mySlide>
          <div className='text-center'>
            <p className="text-uppercase">{p_text}</p>
            <h2 className="text-lowercase">{h2_text}</h2>
          </div>
          <Applybtn/>
        </div>

        <img src={Image} alt="home-banner" style={{width: "100%"}}/>
        </SwiperSlide>
        )
      })
      }
      </Swiper>
      </section>

  )
}

export default Home