import React, {useEffect, useState} from 'react';
import "./navbar.css"
import logo from "./logo.png"
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {ABOUT, CONTACT, HOME, PRODUCTION, PRODUCTS} from "@/utils/constes.jsx";

const Navbar = () => {
    const [submenuOpen, setSubmenuOpen] = useState(false);

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
        <nav className={"main_container"} style={{overflow:"inherit"}}>
            <div className="navbar">
                <div className="nav_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className={`nav_menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to={HOME}>Главная</Link></li>
                        <li><Link to={ABOUT}>О нас</Link></li>
                        <li className="production_link" onClick={() => setSubmenuOpen(!submenuOpen)}>
                            <span>Производство</span>
                            <ol className={`production_submenu ${submenuOpen ? 'open' : ''}`}>
                                <li><Link to={PRODUCTION.replace(":id",1)}>Закройный цех</Link></li>
                                <li><Link to={PRODUCTION.replace(":id",2)}>Швейный цех</Link></li>
                                <li><Link to={PRODUCTION.replace(":id",3)}>Контроль качества</Link></li>
                                <li><Link to={PRODUCTION.replace(":id",4)}>Гладильно-упаковочный цех</Link></li>
                            </ol>
                        </li>

                        <li><Link to={PRODUCTS}>Продукция</Link></li>
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