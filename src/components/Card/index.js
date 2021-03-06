import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncAddToCart, asyncRemoveFromCart } from "../../redux/slices/cartSlice";
import Plus from "../Plus";
import { asyncAddToFavorites, asyncRemoveFromFavorites } from "../../redux/slices/favoritesSlice";

import styles from './Card.module.scss'
import Favorite from "../Favotire";

function Card ({
    id, 
    imageUrl, 
    title, 
    price, 
    location
})  {
    const dispatch = useDispatch();
    
    const isOrder = location === '/order'

    const {cartItems} = useSelector(state => state?.cartItemsReducer);
    const {favorites} = useSelector(state => state?.favoritesReducer);

    const obj = {id, imageUrl, title, price}


    const isItemInCart = cartItems && cartItems.some(item => parseInt(item.id) === id);
    const isItemsInFavorites = favorites && favorites.some(item => parseInt(item.id) === id);

    const onClickPlus = () => {
        if(isItemInCart) {
            dispatch(asyncRemoveFromCart(id));
        }else {
            dispatch(asyncAddToCart(obj));
        };
    };

    const onAddToFavorites = () => {
        if(isItemsInFavorites) {
            dispatch(asyncRemoveFromFavorites(id));
        }else {
            dispatch(asyncAddToFavorites(obj));
        };
    };

    return ( 
        <div className={styles.card}>
            {!isOrder && <Favorite onAddToFavorites={onAddToFavorites} isItemsInFavorites={isItemsInFavorites}/>}
            <img width='100%' height={135} src={imageUrl} alt="" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                        <b>{price} руб.</b>
                </div>
                {!isOrder  && <Plus isItemInCart={isItemInCart} onClickPlus={onClickPlus} />}
            </div>
        </div>
    );
};

export default Card;