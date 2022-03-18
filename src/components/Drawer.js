function Drawer ({onClose, items = [], onRemoveCart}) {
    
    return (
        <div className="overlay">
           <div className="drawer d-flex flex-column">
            <h2 className="d-flex justify-between mb-30">Корзина <img className="cu-p" width={32} height={32}src="/img/btn-remove.svg" alt="Remove" onClick={onClose} /></h2>
           
            
           {items.length > 0 ? 
            <div>
                <div className="items flex">
                {items.map((item => (
                    <div key={item.id} className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: `url(${item.imageUrl})` }} className="catrItemImg"></div>
                        <div className="mr-20 flex">
                        <p className="mb-5">{item.title}</p>
                        <b>{item.price}</b>
                        </div>
                        <img className="removeBtn" width={32} height={32}src="/img/btn-remove.svg" alt="Remove" onClick={() => onRemoveCart(item.id)}/>
                    </div>
                )))}
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
                    <div></div>
                </div>
            </div>
           : 
           <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                <img className="mb-20" width={120} height={120} src="/img/empty-cart.jpg" alt="Пустая корзина" />
                <h2>Корзина пустая</h2>
                <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
                <button className="greenButton" onClick={onClose}>
                    <img src="/img/arrow.svg" alt="Arrow" />Вернуться назад
                </button>
            </div>
            }
          </div> 
        </div>
    );
};

export default Drawer;