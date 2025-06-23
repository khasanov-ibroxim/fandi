import React from 'react';
import "./home_s3.css"
import {Swiper, SwiperSlide} from "swiper/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import img_1 from "@/assets/home/home_s3/portfolio1-1140x480.jpg"
import img_2 from "@/assets/home/home_s3/portfolio2-1140x480.jpg"
import img_3 from "@/assets/home/home_s3/portfolio3-1140x480.jpg"
import {Autoplay} from "swiper/modules";

import {Link} from "react-router-dom"
import {PRODUCTION} from "@/utils/constes.jsx";

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
                        <p>Производим футболки, майки, туники, поло, толстовки, спортивные брюки, трусы, шорты и многое
                            другое.
                            Свыше 100 000 изделий в месяц, более 100 единиц современного оборудования и 1000 м²
                            производственной площади в Ташкентской области, Республики Узбекистан.
                        </p>
                    </div>
                </div>

                <div className="home_s3_box_content">
                    <Swiper loop={true} modules={[Autoplay]} autoplay={{delay: 3000}} className={"home_s3_swiper"}>
                        <SwiperSlide>
                            <div className="home_s3_box_content_item">
                                <Link to={PRODUCTION.replace(":id" , 1)} onClick={()=>window.scrollTo("top")} className="h_s3_top">
                                    <div className="h_s3_top_left">
                                        <h1>Закройный цех</h1>
                                    </div>
                                    <div className="h_s3_top_right">
                                        <p>На этом этапе мы подготавливаем ткань к пошиву, точно раскраивая детали
                                            изделия по лекалам. Используем современные раскройные столы и оборудование,
                                            что обеспечивает высокую точность и минимальный расход материала.</p>
                                        <ArrowForwardIcon/>
                                    </div>
                                </Link>
                                <div className="h_s3_bottom">
                                    <img src={img_1} alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home_s3_box_content_item">
                                <Link to={PRODUCTION.replace(":id" , 2)} onClick={()=>window.scrollTo("top")} className="h_s3_top">
                                    <div className="h_s3_top_left">
                                        <h1>Швейный цех</h1>

                                    </div>
                                    <div className="h_s3_top_right">
                                        <p>Именно здесь наши опытные швеи превращают заготовки в готовые изделия.
                                            Благодаря более чем 100 единицам профессионального оборудования, мы
                                            обеспечиваем стабильное качество и высокую скорость пошива.</p>
                                        <ArrowForwardIcon/>
                                    </div>
                                </Link>
                                <div className="h_s3_bottom">
                                    <img src={img_2} alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home_s3_box_content_item">
                                <Link to={PRODUCTION.replace(":id" , 3)} onClick={()=>window.scrollTo("top")} className="h_s3_top">
                                    <div className="h_s3_top_left">
                                        <h1>Контроль качества</h1>

                                    </div>
                                    <div className="h_s3_top_right">
                                        <p>Каждое изделие проходит строгую проверку на всех этапах производства — от
                                            кроя до упаковки. Мы следим за соответствием размеров, прочностью швов и
                                            точностью исполнения всех требований заказчика.</p>
                                        <ArrowForwardIcon/>
                                    </div>
                                </Link>
                                <div className="h_s3_bottom">
                                    <img src={img_3} alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home_s3_box_content_item">
                                <Link to={PRODUCTION.replace(":id" , 4)} onClick={()=>window.scrollTo("top")} className="h_s3_top">
                                    <div className="h_s3_top_left">
                                        <h1>Гладильно-упаковочный цех</h1>

                                    </div>
                                    <div className="h_s3_top_right">
                                        <p>Здесь изделия приводятся к финальному виду: отпариваются, гладятся и
                                            аккуратно упаковываются. Мы обеспечиваем презентабельный внешний вид
                                            продукции и её готовность к отгрузке.</p>
                                        <ArrowForwardIcon/>
                                    </div>
                                </Link>
                                <div className="h_s3_bottom">
                                    <img src={img_1} alt=""/>
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