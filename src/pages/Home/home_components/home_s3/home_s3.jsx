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
                        <h2>Our project</h2>
                    </div>
                    <div className="home_s3_title">
                        <h1>Don’t take our word, see our portfolio</h1>
                        <p>It is additionally connected with the production of clothes. The crude material of textiles
                            is the fiber which might be regular regenerated.there are various textures with the
                            distinctive feel and requirements, we utilize various kinds of fabrics relying on climate
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