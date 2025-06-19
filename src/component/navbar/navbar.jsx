import React, {useEffect, useState} from 'react';
import "./navbar.css"
import logo from "./logo.png"
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {CONTACT, HOME} from "@/utils/constes.jsx";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1000px)').matches);

    useEffect(() => {
        const handleResize = (e) => {
            setIsMobile(e.matches);
        };

        const windowMatch = window.matchMedia('(max-width: 1000px)');
        windowMatch.addEventListener('change', handleResize);


        return () => windowMatch.removeEventListener('change', handleResize);
    }, []);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className={"main_container"}>
            <div className="navbar">
                <div className="nav_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className={`nav_menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to={HOME}>Главная</Link></li>
                        <li><Link to={"#"}>О нас</Link></li>
                        <li><Link to={"#"}>Производство</Link></li>
                        <li><Link to={"#"}>Блог</Link></li>
                        <li><Link to={CONTACT}>Контакты</Link></li>
                    </ul>
                </div>
                <div className="nav_btn">
                    {isMobile ? <div className="navburger" onClick={toggleMenu}>
                        {isMenuOpen ? <CloseIcon/> : <MenuIcon/>}
                    </div> :
                        <button>Связаться <ArrowForwardIcon/></button>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;