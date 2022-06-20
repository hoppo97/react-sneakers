import React from 'react'

import Info from "../Info";

import styles from './Drawer.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAllRemoveFromCart, asyncRemoveFromCart } from '../../redux/slices/cartSlice';
import { asyncAddToOrderss } from '../../redux/slices/ordersSlice';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer ({onClose, opened}) {

    const { cartItems, totalPrice } = useSelector(state => state?.cartItemsReducer);
    
    const dispatch = useDispatch();
    
    const onRemoveCart = (id) => {
        dispatch(asyncRemoveFromCart(id));
    }

    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            dispatch(asyncAddToOrderss({
                items: cartItems,
            }))

            setIsOrderComplete(true);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                dispatch(asyncAllRemoveFromCart(item.id));
                await delay(1000);
            }

        } catch (error) {
            alert('Извини братан, не сегодня!')
        }
        setIsLoading(false);
        setIsOrderComplete(false);
    }
    
    return (
        <div onClick={(e) => e.target === e.currentTarget && onClose()} className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
           <div className={styles.drawer}>
            <h2 className="d-flex justify-between mb-30">Корзина <img className="cu-p" width={32} height={32}src="/img/btn-remove.svg" alt="Remove" onClick={onClose} /></h2>
           
            
           {cartItems.length > 0 ? 
            <div className="d-flex flex-column flex">
                <div className="items">
                {cartItems.map((item => (
                    <div key={item.id} className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: `url(${item.imageUrl})` }} className="catrItemImg"></div>
                        <div className="mr-20 flex">
                        <p className="mb-5">{item.title}</p>
                        <b>{item.price} руб.</b>
                        </div>
                        <img className="removeBtn" width={32} height={32}src="/img/btn-remove.svg" alt="Remove" onClick={() => onRemoveCart(item.id)}/>
                    </div>
                )))}
                </div>
                <div className="cartTotalBlock">
                    <ul className="cartTotalBlock">
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>{totalPrice} руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>{totalPrice / 100 * 5} руб.</b>
                        </li>
                    </ul>
                    <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
                </div> 
            </div>
           : 
           <Info 
            title={isOrderComplete ? "Заказ оформлен!"  : "Корзина пустая"} 
            description={isOrderComplete ?  `Ваш заказ # скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"} 
            image= {isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}
            onClose={onClose}
           />
            }
          </div> 
        </div>
    );
};

export default Drawer;