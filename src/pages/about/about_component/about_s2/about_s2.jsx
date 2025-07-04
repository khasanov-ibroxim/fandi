import React, {useState} from 'react';
import "./about_s2.css";
import img_1 from "@/assets/about/about_s2/tkan.png"
import img_2 from "@/assets/about/about_s2/izdeliya.png"
import img_3 from "@/assets/about/about_s2/siryo.png"
import img_4 from "@/assets/about/about_s2/volokna.png"
import bgImg from "@/assets/about/about_s2/016A3192.JPG";
import {Link} from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {CONTACT} from "@/utils/constes.jsx";


const AboutS2 = () => {
    const [activeContent, setActiveContent] = useState(1);

    const items = [
        {
            id: 1,
            icon: img_2,
            title: `Индивидуальный  подход`,
            text: `Мы изготавливаем экспериментальные образцы, разрабатываем лекала по размерному ряду и предлагаем подбор ткани под заказанный цвет. Все изделия могут быть адаптированы под желаемый фасон, размер, маркировку и дизайн. Минимальный тираж — от 750 единиц на модель и цвет. `
        },
        {
            id: 2,
            icon: img_1,
            title: "Полный цикл",
            text: `Мы предлагаем полный спектр услуг: от выбора пряжи и окрашивания полотна до пошива готовой продукции. В нашем распоряжении более 100 единиц современного оборудования и цех площадью 1000 м². Это позволяет выпускать свыше 100 000 изделий ежемесячно. Каждое изделие проходит поэтапный контроль качества для соответствия требованиям клиента. `
        },

        {
            id: 3,
            icon: img_3,
            title: "Контроль качества",
            text: `Наша команда экспертов контролирует качество с самого начала: от подбора хлопчатобумажного полотна до финальной упаковки изделия. Используем только проверенные материалы и технологии, соответствующие международным стандартам. Каждое изделие проверяется на соответствие заданным параметрам. Мы стремимся не просто соответствовать ожиданиям — мы их превосходим.`
        },
        {
            id: 4,
            icon: img_4,
            title: "Гарантия результата",
            text: `Мы не просто шьём, мы создаём продукт, за который готовы отвечать. Оперативная обратная связь, прозрачная логистика и точное соблюдение сроков — основа нашей репутации. Многолетний опыт и профессионализм команды делают нас надёжным партнёром. Работая с FANDI TEKS, вы получаете уверенность в результате.`
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
                                <h2>Заказ под ключ</h2>
                                <p>ООО FANDI TEKS — это современная швейная и трикотажная фабрика в Узбекистане. Мы
                                    специализируемся на производстве женской, мужской, детской и корпоративной одежды
                                    под ключ. Наш подход объединяет гибкость индивидуального подхода и мощные
                                    производственные мощности.</p>
                            </div>
                            <div className="a2_left_content">
                                <div className="a2_left_group_btn">
                                    {items.map(item => (
                                        <div
                                            key={item.id}
                                            className={`a2_left_item ${activeContent === item.id ? "active" : ""}`}
                                            onClick={() => setActiveContent(item.id)}
                                            dangerouslySetInnerHTML={{__html:item.title}}
                                        >

                                        </div>
                                    ))}
                                </div>
                                <div className="a2_left_item_content">
                                    <img src={activeItem?.icon} alt="FANDI"/>
                                    <p>{activeItem?.text}</p>
                                    <Link to={CONTACT}>Свяжитесь  <ArrowForwardIcon/></Link>
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
