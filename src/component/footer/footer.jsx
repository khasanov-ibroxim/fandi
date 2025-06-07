import React from 'react';
import "./footer.css"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer className={"main_container"}>
            <div className="footer_box">
                <div className="footer_element" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <ArrowOutwardIcon />
                </div>

                <div className="footer_title">
                    Держим связь всегда
                </div>
                <div className="footer_content">
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-md-6 col-lg-5 mb-4">
                            <div className="subtitle_box">
                                <span style={{ background: "white" }}></span>
                                <h2 style={{ color: "white" }}>О нас</h2>
                            </div>
                            <div className="footer_item_1_box d-flex flex-column flex-md-row g-4 mt-3">
                                <div className="footer_item_1 me-md-5 mb-3 mb-md-0">
                                    <h1>New York</h1>
                                    <p>123 Broadway Street, Suite 16, New York, NY</p>
                                    <a href={"#"}>+998 99 000 00 00</a>
                                </div>
                                <div className="footer_item_1">
                                    <h1>New York</h1>
                                    <p>123 Broadway Street, Suite 16, New York, NY</p>
                                    <a href={"#"}>+998 99 000 00 00</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-2 mb-4">
                            <div className="subtitle_box">
                                <span style={{ background: "white" }}></span>
                                <h2 style={{ color: "white" }}>Our About</h2>
                            </div>
                            <div className="footer_item_2_box d-flex justify-content-between mt-3">
                                <ul className="p-0 m-0">
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">About us</Link></li>
                                    <li><Link to="#">Services</Link></li>
                                    <li><Link to="#">Blog</Link></li>
                                </ul>
                                <ul className="p-0 m-0">
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">FeedBacks</Link></li>
                                    <li><Link to="#">Contact us</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="subtitle_box">
                                <span style={{ background: "white" }}></span>
                                <h2 style={{ color: "white" }}>Our About</h2>
                            </div>
                            <div className="footer_item_3_box mt-3">
                                <a href={"tel:+998337004000"} className={"tell"}>+998337004000</a>
                                <a href={"tel:+998935718328"} className={"tell"}>+998935718328</a>
                                <Link to="mailto:marketing@fanditeks.uz">marketing@fanditeks.uz </Link>
                                <Link to="mailto:fanditeks@hotmail.com">fanditeks@hotmail.com </Link>
                            </div>
                            <div className="footer_item_4_box">
                                <a href="#"><InstagramIcon/></a>
                                <a href="https://t.me/fanditeks"><TelegramIcon/></a>
                                <a href="#"><FacebookIcon/></a>
                                <a href="https://wa.me/+998935718328"><WhatsAppIcon/></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;