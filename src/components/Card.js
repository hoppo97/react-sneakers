import React from "react";
import ContentLoader from "react-content-loader";
import { useDispatch, useSelector } from "react-redux";
import { asyncAddToCart, asyncRemoveFromCart } from "../redux/slices/cartSlice";
import AppContext from "../context";
import Plus from "./plus/Plus";
import { asyncAddToFavorites } from "../redux/slices/favoritesSlice";

function Card ({
    id, 
    imageUrl, 
    title, 
    price, 
    status = 'resolved',
})  {
    const dispatch = useDispatch();
    const {cartItems} = useSelector(state => state?.cartItemsReducer);
    const {favorites} = useSelector(state => state?.favoritesReducer);

    const obj = {id, parentId: id, imageUrl, title, price};
   
    const isItemInCart = cartItems && cartItems.some(item => parseInt(item.id) === obj.id);
    const isItemsInFavorites = favorites && favorites.some(item => parseInt(item.id) === obj.id);

    const onClickPlus = () => {
        if(isItemInCart) {
            dispatch(asyncRemoveFromCart(obj.id));
        }else {
            dispatch(asyncAddToCart(obj));
        }
    };

    const onAddToFavorites = () => {
        if(isItemsInFavorites) {
            dispatch(asyncRemoveFromCart(obj.id));
        }else {
            dispatch(asyncAddToFavorites(obj));
        }
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
                <div className="favorite">
                    <img onClick={onAddToFavorites} src={isItemsInFavorites ? "/img/heart-liked.svg"  : "/img/heart-unliked.svg" } alt="Unliked" />
                </div>
                <img width='100%' height={135} src={imageUrl} alt="" />
                <h5>{title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{price} руб.</b>
                    </div>
                    <Plus cartItems={cartItems} onClickPlus={onClickPlus} id={id}/>
                </div>
              </>
            }
        </div>
    );
};

export default Card;