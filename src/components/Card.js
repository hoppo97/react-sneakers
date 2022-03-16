import React from "react";
function Card ({id, imageUrl, title, price, onPlus} ) {
    
    const [isAdded, setIsAdded] = React.useState(false);
    const obj = {id, imageUrl, title, price}

    const onClickPlus = () => {
        onPlus(obj);
        setIsAdded(!isAdded);
    };


    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img 
                    className="plus"
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
                    alt="plus" 
                    onClick={() => onClickPlus(obj)}/>
            </div>
        </div>
    );
};

export default Card;