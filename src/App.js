
function App() {
  return (
    <div className="wrapper clear">
        <div className="overlay">
          <div className="drawer d-flex flex-column">
            <h2 className="d-flex justify-between mb-30">Корзина <img className="cu-p" width={32} height={32}src="/img/btn-remove.svg" alt="Remove" /></h2>

            <div className="items flex">
              <div className="cartItem d-flex align-center mb-20">
                
                <div style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }} className="catrItemImg"></div>
                <div className="mr-20 flex">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="removeBtn" width={32} height={32}src="/img/btn-remove.svg" alt="Remove" />
              </div>

              <div className="cartItem d-flex align-center mb-20">  
                <div style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }} className="catrItemImg"></div>
                <div className="mr-20 flex">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="removeBtn" width={32} height={32}src="/img/btn-remove.svg" alt="Remove" />
              </div>

              <div className="cartItem d-flex align-center mb-20">
                
                <div style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }} className="catrItemImg"></div>
                <div className="mr-20 flex">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="removeBtn" width={32} height={32}src="/img/btn-remove.svg" alt="Remove" />
              </div>

              

              <div className="cartItem d-flex align-center mb-20">
                <div style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }} className="catrItemImg"></div>
                <div className="mr-20 flex">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="removeBtn" width={32} height={32}src="/img/btn-remove.svg" alt="Remove" />
              </div>
            </div>
            
            <div className="cartTotalBlock">
              <ul className="cartTotalBlock">
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
            </div> 
          </div>
        </div>
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
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input placeholder="Поиск..." />
            </div>
          </div>

          <div className="d-flex">
            <div className="card">
              <div className="favorite">
                <img src="/img/heart-unliked.svg" alt="Unliked" />
              </div>
              <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
            </div>
            </div>

            <div className="card">
              <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
              <h5>Мужские Кроссовки Nike Air Max 270</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
              </div>
            </div>

            <div className="card">
              <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>8 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
              </div>
            </div>

            <div className="card">
              <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
              <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>8 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
