import React from 'react';
import "./about_s1.css"
import img_1 from "@/assets/about/about_s1/sc1.jpg"
import img_2 from "@/assets/about/about_s1/horiimg1.jpg"


const AboutS1 = () => {
    return (
        <div className={"a1"}>
            <div className="container">
                <div className="row gap-2">
                    <div className="col-lg-6">
                        <div className="a1_left">
                            <img src={img_1} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="a1_right">
                            <img src={img_2} alt=""/>
                            <div className="a1_right_text">
                                <h1>Who We Are</h1>
                                <p>It is additionally connected with the production of clothes. The crude material of
                                    textiles is the fiber which might be regular, man-made, or regenerated.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutS1;