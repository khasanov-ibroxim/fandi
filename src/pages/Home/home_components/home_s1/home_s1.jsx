import React from 'react';
import "./home_s1.css"
import mashinka_icon from "@/assets/home/home_s1/mashinka_icon.svg"
import material_detal_icon from "@/assets/home/home_s1/material_detal_icon.svg"
import material_icon from "@/assets/home/home_s1/material_icon.svg"
import stanok_icon from "@/assets/home/home_s1/stanok_icon.svg"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Link} from "react-router-dom"


import bgImg from '../../../../assets/home/home_s1/img_h1.jpg';



const HomeS1 = () => {
    return (
        <div className={"home_s1 d-flex justify-content-center align-items-center"} style={{padding:"100px 0"}}>
            <div className="row">
                <div className="col-lg-6" data-aos="fade-right">
                    <div className="home_s1_text">
                        <div className="subtitle_box">
                            <span></span>
                            <h2>Our About</h2>
                        </div>
                        <h1>We Bringing a Change in the Textile</h1>
                        <p>We are continually looking to improve all aspects of the manufacturing process -from our
                            entire cycle manufacturing to packaging and shipping.</p>
                        <div className="home_s1_box">
                            <div className="home_s1_box_item">
                                <img src={mashinka_icon} alt=""/>
                                <h3>Textiles Materials</h3>
                            </div>
                            <div className="home_s1_box_item">
                                <img src={material_icon} alt=""/>
                                <h3>Create Your Design</h3>
                            </div>
                            <div className="home_s1_box_item">
                                <img src={material_detal_icon} alt=""/>
                                <h3>Rayon Fabric</h3>
                            </div>
                            <div className="home_s1_box_item">
                                <img src={stanok_icon} alt=""/>
                                <h3>Fabric Treated</h3>
                            </div>
                        </div>
                        <div className="home_s1_contact_box">
                            <Link to={"#"}>Read More <ArrowForwardIcon/></Link>
                            <div className="home_s1_contact_box_item">
                                <p>Call Us Anytime</p>
                                <a href="#">+00 123 456789</a>
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