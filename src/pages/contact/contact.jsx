import React from 'react';
import "./contact.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
    return (
        <div className={"main_container"}>
            <div className="contact_top_box">
                <div className="contact_top_box_title">
                    <h1>Come and Visit One of our Offices <br/>
                        Over the World</h1>
                </div>
                <div className="contact_top_content">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12002.843197572256!2d69.21724696958805!3d41.228072385976766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61947afb5fb3%3A0x4eb5241eda3b95f1!2sSergeli%20Moshina%20Bozor!5e0!3m2!1sru!2s!4v1750364384299!5m2!1sru!2s"
                        width="90%" height="500" allowFullScreen="" loading="lazy" className={"map"}
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="contact_top_element">
                    <h1>New York, NY</h1>
                    <p>It can be very well produced using fiber, yarn, texture and dispached safely.The Largest Exporter
                        of all over world.</p>
                    <div className="contact_top_element_box">
                        <div className="contact_top_element_item">
                            <h2>Address</h2>
                            <p>8572 N. Orange St. Jamestown, NY 14701</p>
                        </div>
                        <div className="contact_top_element_item">
                            <h2>Phone & Email</h2>
                            <a href={"#"}>+998 99 999 99 99</a>
                            <a href={"#"}>fabiflex@yourdomain.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact_bottom_box container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact_bottom_box_left">
                            <h1>Let’s Work Together</h1>
                            <p>If you work in the fashion industry, chances are you work with textiles almost constantly.
                                Whether you’re shopping for, printing on, or working with textiles, they never seem to
                                differ much from any fabric you’ve worked with.
                            </p>
                            <a href={"#"} className={"tell"}>+998 99 999 99 99</a>
                            <a href="#" className={"email"}>fabiflex@yourtextilemain.com</a>
                            <div className="contact_social">
                                <a href={"#"} className="contact_social_item"><FacebookIcon/></a>
                                <a href={"#"} className="contact_social_item"><InstagramIcon/></a>
                                <a href={"#"} className="contact_social_item"><TelegramIcon/></a>
                                <a href={"#"} className="contact_social_item"><WhatsAppIcon/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact_bottom_right">
                            <h2>Contact</h2>
                            <div className="contact_form">
                                <div className="input_box">
                                    <input type="text" placeholder={"Name"}/>
                                    <input type="text" placeholder={"Email"}/>
                                </div>
                                <div className="input_box">
                                    <input type="text" placeholder={"Phone Number"}/>
                                    <input type="text" placeholder={"Company"}/>
                                </div>
                                <div className="input_box">
                                    <textarea rows={7} placeholder={"Message"}/>
                                </div>
                                <button>Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;