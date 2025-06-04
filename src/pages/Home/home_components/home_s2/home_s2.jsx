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
                    <h2 style={{color: "white"}}>Our Services</h2>
                </div>
                <div className="home_s2_title text-center ">
                    <h1>Take Look Into Our <br/>
                        Best Services and Production</h1>
                </div>
                <div className="home_s2_content">
                    <div className="home_s2_item">
                        <div className="home_s2_opacity"></div>
                        <div className="home_s2_item_left">
                            <span>Fabric Dyeing</span>
                            <Link to={"#"}>Innovations In Textile Technology Smart</Link>


                        </div>
                        <div className="home_s2_item_right">
                            <p>Textiles are materials made from fibers or yarn, and they range of products range</p>
                            <div className="home_s2_item_right_icon"><ArrowForwardIcon fontSize={'large'}/></div>
                        </div>
                    </div>
                    <div className="home_s2_item">
                        <div className="home_s2_opacity"></div>
                        <div className="home_s2_item_left">
                            <span>Fabric Dyeing</span>
                            <Link to={"#"}>Innovations In Textile Technology Smart</Link>


                        </div>
                        <div className="home_s2_item_right">
                            <p>Textiles are materials made from fibers or yarn, and they range of products range</p>
                            <div className="home_s2_item_right_icon"><ArrowForwardIcon fontSize={'large'}/></div>
                        </div>
                    </div>
                    <div className="home_s2_item">
                        <div className="home_s2_opacity"></div>
                        <div className="home_s2_item_left">
                            <span>Fabric Dyeing</span>
                            <Link to={"#"}>Innovations In Textile Technology Smart</Link>


                        </div>
                        <div className="home_s2_item_right">
                            <p>Textiles are materials made from fibers or yarn, and they range of products range</p>
                            <div className="home_s2_item_right_icon"><ArrowForwardIcon fontSize={'large'}/></div>
                        </div>
                    </div>
                    <div className="home_s2_item">
                        <div className="home_s2_opacity"></div>
                        <div className="home_s2_item_left">
                            <span>Fabric Dyeing</span>
                            <Link to={"#"}>Innovations In Textile Technology Smart</Link>


                        </div>
                        <div className="home_s2_item_right">
                            <p>Textiles are materials made from fibers or yarn, and they range of products range</p>
                            <div className="home_s2_item_right_icon"><ArrowForwardIcon fontSize={'large'}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeS2;