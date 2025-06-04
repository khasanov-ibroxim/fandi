import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Index_Router} from "@/utils/const.jsx";

const App = () => {
    return (
        <Routes>
            {Index_Router.map(({Path, Component}, index) => (
                <Route key={index} element={<>
                    <Component/>
                </>
                } path={Path}/>
            ))}
        </Routes>
    );
};

export default App;