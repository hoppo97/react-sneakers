import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://6228f848be12fc45389313b2.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://6228f848be12fc45389313b2.mockapi.io/favorite');
      const itemsResponse = await axios.get('https://6228f848be12fc45389313b2.mockapi.io/items');
      
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
      
    }

    fetchData();
  }, []);
  
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  };

  const onClickOpenCart = () => {
    setCartOpened(!cartOpened)
  };

  const onAddToCart = async (obj) => {
    console.log(obj);
    try {
      if(cartItems.find((item) => Number(item.id) === Number(obj.id))){
        onRemoveCartItem(obj.id);
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        const {data} = await axios.post('https://6228f848be12fc45389313b2.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось, извини братан');
    }
  };

  const onAddToFavorite = async (obj) => {
    try{
      if(favorites.find(item => item.id === obj.id) ){
        axios.delete(`https://6228f848be12fc45389313b2.mockapi.io/favorite/${obj.id}`); 
      } else {
        const {data} = await axios.post('https://6228f848be12fc45389313b2.mockapi.io/favorite', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось, извини братан');
    };  
  };

  const onRemoveCartItem =  (id) => {
    axios.delete(`https://6228f848be12fc45389313b2.mockapi.io/cart/${id}`);
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  return (
    <div className="wrapper clear">
        {cartOpened ? <Drawer onRemoveCart={onRemoveCartItem} items={cartItems} onClose={onClickOpenCart}/> : null}
        <Header onClickCart={onClickOpenCart} />

        <Routes>

          <Route  path="/" element={
            <Home items={items} favorites={favorites} searchValue={searchValue} onChangeSearchInput={onChangeSearchInput} onAddToCart={onAddToCart} onAddToFavorite={onAddToFavorite} cartItems={cartItems}/>
          }/>

          <Route  path="/favorites" element={
            <Favorites  items={favorites} onAddToFavorite={onAddToFavorite}/>
          }/>

        </Routes>
    </div>
  );
};
export default App;
