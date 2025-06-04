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
                        <h1>Textiles Art has <span>Versatile</span> Fashion</h1>
                        <p>It is additionally connected with the production of clothes. The crude material of textiles
                            is the fiber which might be regular regenerated.
                        </p>
                        <Link to={"#"}>Discover more <ArrowForwardIcon/></Link>
                    </div>
                </div>
                <div className="home_header_element" data-aos="fade-up">
                    <img src={header_element} alt="header_element"/>
                </div>
                <div className="col-lg-6 d-flex  justify-content-end" data-aos="fade-left">
                    <div className="h-header_right">
                        <div className="h-header_user">
                            <div className="h-header_user_left">
                                <div className="h-header_user_left_stars">
                                    <img
                                        src="https://api.iconify.design/material-symbols:star-rounded.svg?color=%23f0ad4e"
                                        alt=""/>
                                    <img
                                        src="https://api.iconify.design/material-symbols:star-rounded.svg?color=%23f0ad4e"
                                        alt=""/>
                                    <img
                                        src="https://api.iconify.design/material-symbols:star-rounded.svg?color=%23f0ad4e"
                                        alt=""/>
                                    <img
                                        src="https://api.iconify.design/material-symbols:star-rounded.svg?color=%23f0ad4e"
                                        alt=""/>
                                    <img
                                        src="https://api.iconify.design/material-symbols:star-rounded.svg?color=%23f0ad4e"
                                        alt=""/>
                                </div>
                                <h3>Elic Semules</h3>
                            </div>
                            <div className="h-header_user_right">
                                <img src={user} alt=""/>
                            </div>
                        </div>
                        <p>Fabiflex customer service is great. I was searching & found exactly what I wanted, was
                            delivered quickly. Great blankets fabric and I am planning to buy it in bulk order.</p>
                        <div className="h-header_right_box">
                            <div className="h-header_right_box_item">
                                <h2>580+</h2>
                                <p>Happy Expert Customer</p>
                            </div>
                            <div className="h-header_right_box_item">
                                <h2>248+</h2>
                                <p>Finished Successfull Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;