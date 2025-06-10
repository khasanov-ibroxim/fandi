import React from 'react';
import {Link} from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import header_element from "@/assets/home/home_header/header_element.jpg"
import user from "@/assets/home/home_header/user.png"
import "./home_header.css"

const HomeHeader = () => {
    return (
        <div className={"home_header"}>
            <div className="row ">
                <div className="col-lg-6" data-aos="fade-right">
                    <div className="h-header_left">
                        <h1>ООО <br/> <span>FANDI TEKS </span></h1>
                        <p>Надёжный производитель готовой трикотажной продукции.</p>
                        <p> Полный цикл производства — от идеи до готового изделия.</p>
                        <Link to={"#"}>Производство <ArrowForwardIcon/></Link>
                    </div>
                </div>
                <div className="home_header_element" data-aos="fade-up">
                    <img src={header_element} alt="header_element"/>
                </div>
                <div className="col-lg-6 d-flex  justify-content-end" data-aos="fade-left">
                    <div className="h-header_right">

                        <p>FANDI TEKS — это фабрика, где идеи превращаются в одежду, а стандарты — в качество. Мы
                            работаем для тех, кто ценит надёжность, гибкость и чёткие сроки. От первой выкройки до
                            финальной упаковки.</p>
                        <div className="h-header_right_box">
                            <div className="h-header_right_box_item">
                                <h2>1+</h2>
                                <p>на рынке</p>
                            </div>
                            <div className="h-header_right_box_item">
                                <h2>30+</h2>
                                <p>довольных клиентов</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;