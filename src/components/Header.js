function Header () {
    return (
        <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
            <img alt="" width={40} height={40} src="/img/logo.png" />
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p>Магазин лучших кросовок</p>
            </div>
          </div>
          <ul className="d-flex">
            <li className="mr-30">
              <img alt="" width={18} height={18} src="/img/cart.svg"/>
              <span>1205 руб.</span>
            </li>
            <li>
              <img alt="" width={18} height={18} src="/img/user.svg"/>
            </li>
          </ul>
        </header>
    );
}

export default Header;