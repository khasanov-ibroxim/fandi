import React, {useState} from 'react';
import "./home_s5.css";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import quote from "@/assets/home/home_s5/quote.svg";

const HomeS5 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="home_s5">
            <div className="home_s5_title">
                Testimonial
            </div>
            <Swiper
                slidesPerView={"auto"}
                loop={true}
                centeredSlides={true}
                className="home_s5_swiper"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {[...Array(4)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className={`home_s5_item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="home_s5_item_top">
                                <svg id="Line" height="512" viewBox="0 0 64 64" width="512"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m59.91406 38.957a13.13393 13.13393 0 0 0 -11.20506-11.42429.99982.99982 0 0 0 -.26171 1.98243 11.10979 11.10979 0 0 1 9.47851 9.6665 11.06346 11.06346 0 0 1 -21.4834 4.79053 10.77838 10.77838 0 0 1 -.2734-5.34617 72.66178 72.66178 0 0 1 11.10248-26.607.9997.9997 0 1 0 -1.6621-1.11133 74.73615 74.73615 0 0 0 -11.40918 27.36479 12.74393 12.74393 0 0 0 .34472 6.33154 13.064 13.064 0 0 0 25.36914-5.647z"/>
                                    <path
                                        d="m18.74658 27.53271a.99975.99975 0 0 0 -.26074 1.98243 11.1118 11.1118 0 0 1 9.47852 9.6665 11.06373 11.06373 0 0 1 -21.48389 4.79053 10.77365 10.77365 0 0 1 -.27393-5.34617 72.64715 72.64715 0 0 1 11.10303-26.607 1.00012 1.00012 0 0 0 -1.66309-1.11133 74.73187 74.73187 0 0 0 -11.40869 27.36479 12.74532 12.74532 0 0 0 .34521 6.33154 13.06335 13.06335 0 1 0 14.16358-17.07129z"/>
                                </svg>
                            </div>
                            <div className="home_s5_item_body">
                                {activeIndex === index && "active"}
                                Fabiflex customer service is great. I was searching & found exactly what I wanted, was
                                delivered quickly. Very good transaction. Fast shipping. Great blankets fabric and I am
                                planning to buy it in bulk order.
                            </div>
                            <div className="home_s5_item_footer">
                                <h1>Judy Wells</h1>
                                <p>Customer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeS5;
