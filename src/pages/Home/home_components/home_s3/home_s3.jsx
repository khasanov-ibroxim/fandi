import React from 'react';
import "./home_s3.css"
import {Swiper, SwiperSlide} from "swiper/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import img_1 from "@/assets/home/home_s3/portfolio1-1140x480.jpg"
import img_2 from "@/assets/home/home_s3/portfolio2-1140x480.jpg"
import img_3 from "@/assets/home/home_s3/portfolio3-1140x480.jpg"
import {Autoplay} from "swiper/modules";

const HomeS3 = () => {
    return (
        <div className={"home_s3"}>
            <div className="home_s3_center_line"></div>
            <div className="container-fluid">
                <div className="home_s3_box_title" data-aos="fade-right">
                    <div className="subtitle_box">
                        <span></span>
                        <h2>Что мы делаем</h2>
                    </div>
                    <div className="home_s3_title">
                        <h1>Полный цикл текстильного производства</h1>
                        <p>Производим футболки, майки, туники, поло, толстовки, спортивные брюки, трусы, шорты и многое другое.
                            Свыше 100 000 изделий в месяц, более 100 единиц современного оборудования и 1000 м² производственной площади в Ташкентской области, Республики Узбекистан.
                        </p>
                    </div>
                </div>

                <div className="home_s3_box_content">
                    <Swiper loop={true} modules={[Autoplay]} autoplay={{delay:3000}} className={"home_s3_swiper"}>
                        <SwiperSlide>
                            <div className="home_s3_box_content_item">
                                <div className="h_s3_top">
                                    <div className="h_s3_top_left">
                                        <h1>Cotton Fabric</h1>
                                        <p>Dyeing</p>
                                    </div>
                                    <div className="h_s3_top_right">
                                        <p>Cotton fibers are natural hollow fibers; they are soft, cool, known as
                                            breathable fibers . Cotton fibers can hold water 24–27 times their own
                                            weight.</p>
                                        <ArrowForwardIcon/>
                                    </div>
                                </div>
                                <div className="h_s3_bottom">
                                    <img src={img_1} alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home_s3_box_content_item">
                                <div className="h_s3_top">
                                    <div className="h_s3_top_left">
                                        <h1>Cotton Fabric</h1>
                                        <p>Dyeing</p>
                                    </div>
                                    <div className="h_s3_top_right">
                                        <p>Cotton fibers are natural hollow fibers; they are soft, cool, known as
                                            breathable fibers . Cotton fibers can hold water 24–27 times their own
                                            weight.</p>
                                        <ArrowForwardIcon/>
                                    </div>
                                </div>
                                <div className="h_s3_bottom">
                                    <img src={img_2} alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home_s3_box_content_item">
                                <div className="h_s3_top">
                                    <div className="h_s3_top_left">
                                        <h1>Cotton Fabric</h1>
                                        <p>Dyeing</p>
                                    </div>
                                    <div className="h_s3_top_right">
                                        <p>Cotton fibers are natural hollow fibers; they are soft, cool, known as
                                            breathable fibers . Cotton fibers can hold water 24–27 times their own
                                            weight.</p>
                                        <ArrowForwardIcon/>
                                    </div>
                                </div>
                                <div className="h_s3_bottom">
                                    <img src={img_3} alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HomeS3;