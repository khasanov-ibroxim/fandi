import React from 'react';
import "./home_s4.css"
import bgImg from "@/assets/home/home_s4/ctaimg.png"
import {Link} from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HomeS4 = () => {
    return (
        <div className={"home_s4 container-fluid"}>
            <div className="home_s4_box" >
                <div className="home_s4_left">
                    <h1>Есть идея? <br/>
                        Свяжитесь с нами!</h1>
                    <div className="home_s4_contact_box">
                        <a href="tel:+998337004000">+998337004000</a>
                        <a href="mailto:marketing@fanditeks.uz">marketing@fanditeks.uz </a>
                        <a href="mailto:fanditeks@hotmail.com">fanditeks@hotmail.com</a>
                    </div>
                </div>
                <div className="home_s4_right">
                    <p>
                        Мы всегда готовы обсудить ваши задачи и предложить лучшие решения в сфере Швейного производства.
                    </p>

                    <Link to={"#"}>Связаться с нами <ArrowForwardIcon/></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeS4;