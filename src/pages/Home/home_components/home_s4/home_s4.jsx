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
                    <h1>Have An <span >idea?</span> <br/>
                        Let’s <span>Get</span> In Touch</h1>
                    <div className="home_s4_contact_box">
                        <a href="#">+998 99 000 00 00</a>
                        <a href="#">office@fandi.uz</a>
                    </div>
                </div>
                <div className="home_s4_right">
                    <p>
                        Purus aliquam ac aliquet fringilla volutpat cursus phasellus mi ultrices imperdiet turpis duis
                        quam aliquam lorem.
                    </p>
                    <p>Rated 4.7 out of 5 based on over 1000+ Reviews all over the world</p>
                    <Link to={"#"}>Get in touch <ArrowForwardIcon/></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeS4;