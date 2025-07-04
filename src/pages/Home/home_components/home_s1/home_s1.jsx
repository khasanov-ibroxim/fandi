import React from 'react';
import "./home_s1.css"
import mashinka_icon from "@/assets/home/home_s1/mashinka_icon.svg"
import material_detal_icon from "@/assets/home/home_s1/material_detal_icon.svg"
import material_icon from "@/assets/home/home_s1/material_icon.svg"
import stanok_icon from "@/assets/home/home_s1/stanok_icon.svg"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Link} from "react-router-dom"


import bgImg from '../../../../assets/home/home_s1/016A3238.JPG';



const HomeS1 = () => {
    return (
        <div className={"home_s1 d-flex justify-content-center align-items-center"} style={{padding:"100px 0"}}>
            <div className="row">
                <div className="col-lg-6" data-aos="fade-right">
                    <div className="home_s1_text">
                        <div className="subtitle_box">
                            <span></span>
                            <h2>О нас</h2>
                        </div>
                        <h1>Полный цикл пошива под ваш бренд</h1>
                        <p>Мы производим женскую, мужскую, детскую и корпоративную трикотажную одежду на заказ.</p>
                        <div className="home_s1_box">
                            <div className="home_s1_box_item">
                                <img src={mashinka_icon} alt=""/>
                                <h3>Широкий <br/> ассортимент</h3>
                            </div>
                            <div className="home_s1_box_item">
                                <img src={material_icon} alt=""/>
                                <h3>Большие <br/> объёмы</h3>
                            </div>
                            <div className="home_s1_box_item">
                                <img src={material_detal_icon} alt=""/>
                                <h3>Современное <br/> оборудование</h3>
                            </div>
                            <div className="home_s1_box_item">
                                <img src={stanok_icon} alt=""/>
                                <h3>Собственное <br/> производство</h3>
                            </div>
                        </div>
                        <div className="home_s1_contact_box">
                            <Link to={"#"} className={"home_s1_contact_box_btn"}>Контакты <ArrowForwardIcon/></Link>
                            <div className="home_s1_contact_box_item">
                                <p>Телефон</p>
                                <div style={{
                                    display:"flex",
                                    gap:"10px"
                                }}>
                                    <a href="tel:+998337004000">+998337004000</a>
                                    <a href="tel:+998935718328">+998935718328</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <img src={bgImg} alt="" className={"home_s1_img"}/>
                </div>
            </div>
        </div>
    );
};

export default HomeS1;