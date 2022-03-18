import { Link } from 'react-router-dom';
function Header ({onClickCart}) {
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
              <span>1205 руб.</span>
            </li>  
            <li>
              <Link to="/favorites">
                <img alt="" width={18} height={18} src="/img/favorite.svg"/>             
              </Link>
            </li>
            <li>
              <img alt="" width={18} height={18} src="/img/user.svg"/>
            </li>
          </ul>
        </header>
    );
}

export default Header;