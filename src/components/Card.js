import React from "react";

function Card ({id, imageUrl, title, price, onPlus, onFavorites, favorited = false, added = false} ) {
    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    
    const onClickPlus = () => {
        onPlus({id, imageUrl, title, price});
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorites({id, imageUrl, title, price});
        setIsFavorite(!isFavorite);
    };


    return (
        <div className="card">
            <div className="favorite" onClick={onClickFavorite}>
                <img src={isFavorite ? "/img/heart-liked.svg"  : "/img/heart-unliked.svg" } alt="Unliked" />
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
                    onClick={onClickPlus}
                    />
            </div>
        </div>
    );
};

export default Card;