import React from 'react';
import "./about_s3.css"
import person from "@/assets/about/about_s3/team5-305x415.jpg"
import {Swiper, SwiperSlide} from "swiper/react";

const AboutS3 = () => {
    return (
        <div className={"a3"}>
            <div className="a3_opacity"></div>


            <Swiper
            className={"a3_swiper"}
            >
                <SwiperSlide className={"a3_swiper_item"}>
                    <div className="a3_img">
                        <img src={person} alt=""/>
                    </div>
                    <div className="a3_content">
                        <div className="a3_left">
                            <h1>Sofia Willam</h1>
                            <p>Senior-Employee</p>
                        </div>
                        <div className="a3_right">
                            <a href="#">+998 99 999 99 99</a>
                            <a href="#">example@mail.ru</a>
                            <p>Quis ipsum suspendisse ultrices gravida. Risus maecenas lacus vel facilisis. </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={"a3_swiper_item"}>
                    <div className="a3_img">
                        <img src={person} alt=""/>
                    </div>
                    <div className="a3_content">
                        <div className="a3_left">
                            <h1>Sofia Willam</h1>
                            <p>Senior-Employee</p>
                        </div>
                        <div className="a3_right">
                            <a href="#">+998 99 999 99 99</a>
                            <a href="#">example@mail.ru</a>
                            <p>Quis ipsum suspendisse ultrices gravida. Risus maecenas lacus vel facilisis. </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default AboutS3;