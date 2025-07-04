import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import img_1 from "@/assets/home/home_s3/0B0A4585.jpg"
import "./products.css"
import { Autoplay } from "swiper/modules";
import { Products_db } from "@/pages/products/products_db.jsx";

const Products = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // ✅ fixed


    const imgChecker = (product, index) => {
        if (Array.isArray(product)) {
            return hoveredIndex === index ? product[1] : product[0];
        } else {
            return product;
        }
    };

    return (
        <div className="main_container">
            <div className="products_box">
                <div className="products_opacity"></div>
                <Swiper className="products_swiper" modules={[Autoplay]} autoplay={{ delay: 2000 }}>
                    <SwiperSlide><img src={img_1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img_1} alt="" /></SwiperSlide>
                </Swiper>
            </div>

            <div className="products_content">
                <div className="row">
                    {Products_db.map((item, index) => (
                        <div className="col-lg-4 col-6" key={index}
                             onMouseEnter={() => setHoveredIndex(index)}
                             onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="product_item">
                                <img src={imgChecker(item.img_path, index)} alt="product" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
