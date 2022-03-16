import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItem] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://6228f848be12fc45389313b2.mockapi.io/items').then(res => {
      return res.json();
    }).then(data => {
      setItems(data);
    })

     axios.get('https://6228f848be12fc45389313b2.mockapi.io/cart').then((res) =>{
      setCartItem(res.data)
     });
     
  }, []);
  
  const onClickOpenCart = () => {
    setCartOpened(!cartOpened)
  }

  const onAddToCart = (obj) => {
    axios.post('https://6228f848be12fc45389313b2.mockapi.io/cart', obj);

    setCartItem(prev => [...prev, obj]);
    console.log(obj);
  }

  const onRemoveCartItem = (id) => {
    axios.delete(`https://6228f848be12fc45389313b2.mockapi.io/cart/${id}`);
    setCartItem(cartItems.filter((item) => item.id !== id));
    console.log(id);

  }

  return (
    <div className="wrapper clear">
        {cartOpened ? <Drawer onRemoveCart={onRemoveCartItem} items={cartItems} onClose={onClickOpenCart}/> : null}
        <Header onClickCart={onClickOpenCart} />
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40"> 
            <h1>Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input placeholder="Поиск..." />
            </div>
          </div>

          <div className="d-flex flex-wrap justify-center">
            {items.map((item, index) => (
              <Card  
                key={item.id}
                {...item}
                onPlus = {(obj) => onAddToCart(obj)}
              />
            ))}
            
          </div>
        </div>
    </div>
  );
};
export default App;
