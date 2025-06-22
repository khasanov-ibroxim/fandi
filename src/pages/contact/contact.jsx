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
                    <h1>Свяжитесь с нами — <br/>создадим качество вместе!</h1>
                </div>
                <div className="contact_top_content">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3010.926038880594!2d69.148719!3d41.004991999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzE4LjAiTiA2OcKwMDgnNTUuNCJF!5e0!3m2!1sru!2s!4v1750581994342!5m2!1sru!2s"
                        width="90%" height="500" allowFullScreen="" loading="lazy" className={"map"}
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="contact_top_element">
                    <h1>Как нас найти</h1>
                    <p>Наша фабрика находится по адресу, где рождается качество — приезжайте в удобное для вас
                        время.</p>
                    <div className="contact_top_element_box">
                        <div className="contact_top_element_item">
                            <h2>Адрес</h2>
                            <p>Республика Узбекистан, Ташкентская область, Куйчрчикский район, населённый пункт Беруний,
                                ул. Файзобод, д.340</p>
                        </div>
                        <div className="contact_top_element_item">
                            <h2>Телефон & Email</h2>
                            <a href={"tel:+998337004000"}>+998 33 700 40 00</a>
                            <a href={"mailto:fanditeks@hotmail.com"}>fanditeks@hotmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact_bottom_box container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact_bottom_box_left">
                            <h1>Вперёд к сотрудничеству</h1>
                            <p>Мы готовы к новым идеям и партнёрствам. Давайте создадим что-то выдающееся вместе.</p>
                            <a href={"tel:+998337004000"} className={"tell"}>+998 33 700 40 00</a>
                            <a href="mailto:fanditeks@hotmail.com" className={"email"}>fanditeks@hotmail.com</a>
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
                            <h2>Контакты</h2>
                            <div className="contact_form">
                                <div className="input_box">
                                    <input type="text" placeholder={"Имя"}/>
                                    <input type="text" placeholder={"Email"}/>
                                </div>
                                <div className="input_box">
                                    <input type="text" placeholder={"Телефон"}/>
                                    <input type="text" placeholder={"Сообщение"}/>
                                </div>

                                <button>Свяжитесь</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;