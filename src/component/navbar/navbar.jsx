import React, {useEffect, useState} from 'react';
import "./navbar.css"
import logo from "./logoDark.svg"
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

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
                        <li><Link to={"#"}>Home</Link></li>
                        <li><Link to={"#"}>Pages</Link></li>
                        <li><Link to={"#"}>Service</Link></li>
                        <li><Link to={"#"}>Projects</Link></li>
                        <li><Link to={"#"}>Blog</Link></li>
                        <li><Link to={"#"}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="nav_btn">
                    {isMobile ? <div className="navburger" onClick={toggleMenu}>
                        {isMenuOpen ? <CloseIcon/> : <MenuIcon/>}
                    </div> :
                        <button>Get in touch <ArrowForwardIcon/></button>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;