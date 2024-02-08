import React from 'react'
import './Residencies.css'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const Residencies = () => {
  return (
    <section id='projects' className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Our Projects</span>
                <span className='primaryText'>From Concept to Creation</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons />
                {
                   data.map((card, i)=>(
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                
                                <img src={card.image} alt="projects"/>
                                <span className='primaryText'>{card.name}</span>
                            </div>
                        </SwiperSlide>
                   )) 
                }
            </Swiper>
        </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = ()=> {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}
