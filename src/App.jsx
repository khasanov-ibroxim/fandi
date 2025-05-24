import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
// import logo from '../assets/logo.png'
import {mebelData} from "./assets/mebel/mebelData.jsx";

const App = () => {
    return (
        <div className="App">
            <span className="app-opacity"></span>

            <div className="app_content_box">
                <div className="app_content_box_text">
                    <h1>Coming soon</h1>
                    <p>Our website is currently undergoing scheduled maintenance. We Should be back shortly. Thank you for your patience.</p>

                    {/*<h4>Г. Ташкент</h4>*/}
                </div>
                <div className="app_box_images">
                    <Swiper
                        spaceBetween={30}
                        effect="fade"
                        pagination={{clickable: true}}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        modules={[EffectFade, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {mebelData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.url} alt={item.alt} loading={"lazy"}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default App;