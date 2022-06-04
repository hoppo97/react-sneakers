import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header ({onClickCart}) {
    const {totalPrice} = useSelector(state => state?.cartItemsReducer);

    console.log(totalPrice);
    return (
        <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
            <Link to="/">
              <img alt="" width={40} height={40} src="/img/logo.png" />
            </Link>
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p>Магазин лучших кросовок</p>
            </div>
          </div>
          <ul className="d-flex cu-p">
            <li className="mr-30" onClick={onClickCart}>
              <img alt="" width={18} height={18} src="/img/cart.svg"/>
              <span>{totalPrice} руб.</span>
            </li>  
            <li>
              <Link to="/favorites">
                <img alt="" width={18} height={18} src="/img/favorite.svg"/>             
              </Link>
            </li>
            <li>
              <Link to="/orders">
                <img alt="" width={18} height={18} src="/img/user.svg"/>
              </Link>
            </li>
          </ul>
        </header>
    );
}

export default Header;