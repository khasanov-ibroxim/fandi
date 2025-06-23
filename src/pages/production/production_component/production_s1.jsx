import React from 'react';

const ProductionS1 = ({item}) => {
    return (
        <div className={"main_container"}>
            <div className="production_s1">
                <h1>{item.title_name}</h1>
                <p>Главная / Производство / <span>{item.title_name}</span></p>
            </div>
        </div>
    );
};

export default ProductionS1;