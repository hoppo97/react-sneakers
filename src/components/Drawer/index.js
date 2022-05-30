
import React from 'react'
import axios from "axios";

import Info from "../Info";
import {useCart} from '../../hooks/useCart';

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer ({onClose, items = [], onRemoveCart, opened}) {
    const { cartItems, setCartItems, totalPrice} = useCart();
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.post('http://localhost:3001/orders', {
                items: cartItems,
            });
            
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`http://localhost:3001/cart/${item.id}`);
                await delay(1000);
            }

        } catch (error) {
            alert('Извини братан, не сегодня!')
        }
        setIsLoading(false);
    }
    
    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
           <div className={styles.drawer}>
            <h2 className="d-flex justify-between mb-30">Корзина <img className="cu-p" width={32} height={32}src="/img/btn-remove.svg" alt="Remove" onClick={onClose} /></h2>
           
            
           {items.length > 0 ? 
            <div className="d-flex flex-column flex">
                <div className="items">
                {items.map((item => (
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
            description={isOrderComplete ?  `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"} 
            image= {isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}
           />
            }
          </div> 
        </div>
    );
};

export default Drawer;