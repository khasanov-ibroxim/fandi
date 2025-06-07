import React from 'react';
import "./home_s2.css"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Link} from "react-router-dom"
const HomeS2 = () => {
    return (
        <div className={"home_s2"} data-aos="fade-up">
            <div className="container-fluid">
                <div className="subtitle_box justify-content-center">
                    <span></span>
                    <h2 style={{color: "white"}}>Преимущества</h2>
                </div>
                <div className="home_s2_title text-center ">
                    <h1>Наши ключевые преимущества — <br/>качество, гибкость и надёжность</h1>
                </div>
                <div className="home_s2_content">
                    <div className="home_s2_item">
                        <div className="home_s2_opacity"></div>
                        <div className="home_s2_item_left">
                            <span>Fandi teks</span>
                            <Link to={"#"}>Быстрая обработка</Link>


                        </div>
                        <div className="home_s2_item_right">
                            <p>Оперативно предоставляем всю необходимую информацию и поддерживаем обратную связь на каждом этапе.</p>
                            <div className="home_s2_item_right_icon"><ArrowForwardIcon fontSize={'large'}/></div>
                        </div>
                    </div>


                    <div className="home_s2_item">
                        <div className="home_s2_opacity"></div>
                        <div className="home_s2_item_left">
                            <span>Fandi teks</span>
                            <Link to={"#"}>Полный цикл</Link>


                        </div>
                        <div className="home_s2_item_right">
                            <p>Выполняем разработку конструкции, изготовление лекал, образцов и пошив полного размерного ряда.</p>
                            <div className="home_s2_item_right_icon"><ArrowForwardIcon fontSize={'large'}/></div>
                        </div>
                    </div>
                    <div className="home_s2_item">
                        <div className="home_s2_opacity"></div>
                        <div className="home_s2_item_left">
                            <span>Fandi teks</span>
                            <Link to={"#"}>Качество гарантировано</Link>


                        </div>
                        <div className="home_s2_item_right">
                            <p>Обеспечиваем поэтапный контроль, соответствие дизайну, фасону, размерам и маркировке.</p>
                            <div className="home_s2_item_right_icon"><ArrowForwardIcon fontSize={'large'}/></div>
                        </div>
                    </div>
                    <div className="home_s2_item">
                        <div className="home_s2_opacity"></div>
                        <div className="home_s2_item_left">
                            <span>Fandi teks</span>
                            <Link to={"#"}>Цвет и объём</Link>


                        </div>
                        <div className="home_s2_item_right">
                            <p>Красим полотно по вашему цвету и Pantone, минимальный заказ — 750 единиц на модель и цвет.</p>
                            <div className="home_s2_item_right_icon"><ArrowForwardIcon fontSize={'large'}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeS2;