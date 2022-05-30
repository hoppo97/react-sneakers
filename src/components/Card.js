import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../context";

function Card ({
    id, 
    imageUrl, 
    title, 
    price, 
    onPlus, 
    onFavorites, 
    favorited = false, 
    status = 'resolved',
})  {

    const { isItemAdded, isFavoriteAdded } = React.useContext(AppContext)
    const [isFavorite, setIsFavorite] = React.useState(isFavoriteAdded(id));
    const obj = {id, parentId: id, imageUrl, title, price}
    const onClickPlus = () => {
        onPlus(obj);
    };

    const onClickFavorite = () => {
        onFavorites(obj);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="card">
            {
                status === 'loading' ? <ContentLoader 
                speed={2}
                width={155}
                height={250}
                viewBox="0 0 155 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />  
                <rect x="0" y="167" rx="5" ry="5" width="155" height="15" /> 
                <rect x="0" y="187" rx="5" ry="5" width="100" height="15" /> 
                <rect x="124" y="230" rx="10" ry="10" width="32" height="32" /> 
                <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
              </ContentLoader> : 
              <>
                {onFavorites && <div className="favorite" onClick={onClickFavorite}>
                    <img src={isFavoriteAdded(id) ? "/img/heart-liked.svg"  : "/img/heart-unliked.svg" } alt="Unliked" />
                </div>}
                <img width='100%' height={135} src={imageUrl} alt="" />
                <h5>{title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{price} руб.</b>
                    </div>
                    {onPlus && <img 
                        className="plus"
                        src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
                        alt="plus" 
                        onClick={onClickPlus}
                    />}
                </div>
              </>
              
            }
            
        </div>
    );
};

export default Card;