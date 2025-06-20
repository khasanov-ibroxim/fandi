import React, {useState} from 'react';
import "./about_s2.css";
import img_1 from "@/assets/about/about_s2/tkan.png"
import img_2 from "@/assets/about/about_s2/izdeliya.png"
import img_3 from "@/assets/about/about_s2/siryo.png"
import img_4 from "@/assets/about/about_s2/volokna.png"
import bgImg from "@/assets/about/about_s2/aboutsec1.png";
import {Link} from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const AboutS2 = () => {
    const [activeContent, setActiveContent] = useState(1);

    const items = [
        {
            id: 1,
            icon: img_1,
            title: "Fabric Dyeing",
            text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut unde omnis iste natus error sit accusantiumtotam rem aperiam, eaque ab illo inventore veritatis et quasi vitae dicta sunt explicabo.`
        },
        {
            id: 2,
            icon: img_2,
            title: "Digital Printing",
            text: `Depending on the product characteristics, functional requirements and end-use applications the highly diversified range of technical textile products have been classified into 12 segments. Fabric is made of yarn which is made from different kinds of fibers. Some yarn is made of a single particular fiber but some are a blend.`
        },
        {
            id: 3,
            icon: img_3,
            title: "Fabric Treated",
            text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut unde omnis iste natus error sit accusantiumtotam rem aperiam, eaque ab illo inventore veritatis et quasi vitae dicta sunt explicabo.`
        },
        {
            id: 4,
            icon: img_4,
            title: "Satin Weaving",
            text: `Depending on the product characteristics, functional requirements and end-use applications the highly diversified range of technical textile products have been classified into 12 segments. Fabric is made of yarn which is made from different kinds of fibers. Some yarn is made of a single particular fiber but some are a blend.`
        }
    ];

    const activeItem = items.find(item => item.id === activeContent);

    return (
        <div className="a2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="a2_left">
                            <div className="a2_left_title">
                                <h2>The Textile, Product, And Apparel Manufacturing Industries.</h2>
                                <p>We utilize various kinds of fabrics relying on climate. So essentially there are
                                    various textures with the distinctive feel and requirements. There is another word
                                    utilized for fabrics called textiles that confounds many. The crude material of
                                    textiles is the fiber which might be regular, man-made, or regenerated.</p>
                            </div>
                            <div className="a2_left_content">
                                <div className="a2_left_group_btn">
                                    {items.map(item => (
                                        <div
                                            key={item.id}
                                            className={`a2_left_item ${activeContent === item.id ? "active" : ""}`}
                                            onClick={() => setActiveContent(item.id)}
                                        >
                                            {item.title}
                                        </div>
                                    ))}
                                </div>
                                <div className="a2_left_item_content">
                                    <img src={activeItem?.icon} alt="FANDI"/>
                                    <p>{activeItem?.text}</p>
                                    <Link to={"#"}>Explore service <ArrowForwardIcon/></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="a2_right">
                            <img src={bgImg} alt="" className={"home_s1_img"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutS2;
