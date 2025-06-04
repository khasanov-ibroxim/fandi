import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {Index_Router} from "@/utils/constes.jsx";
import Navbar from "@/component/navbar/navbar.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from "@/component/footer/footer.jsx";


const App = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init({ once: false });
        AOS.refresh();
    }, [location.pathname]);

    return (
        <div >
            <Routes>
                {Index_Router.map(({Path , Component} , index)=>(
                    <Route element={<>
                        <Navbar/>
                        <Component/>
                        <Footer/>
                    </>} path={Path} index={index}/>
                ))}
            </Routes>
        </div>

    );
};

export default App;