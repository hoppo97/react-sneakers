import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import AppContext from './context';

function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://6228f848be12fc45389313b2.mockapi.io/cart'), 
          axios.get('https://6228f848be12fc45389313b2.mockapi.io/favorite'), 
          axios.get('https://6228f848be12fc45389313b2.mockapi.io/items')
        ]);
    
        setIsLoading(false)
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных')
        console.error(error);
      }
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
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if(findItem){
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        onRemoveCartItem(findItem.id);
      } else {
        setCartItems(prev => [...prev, obj]);
        const { data } = await axios.post('https://6228f848be12fc45389313b2.mockapi.io/cart', obj);
        setCartItems(prev => prev.map(item => {
          if(item.parentId === data.parentId) {
            return {
              ...item, 
              id: data.id
            };
          }
          return item;
        }));
        
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    console.log(obj);
    try{
      if(favorites.find(item => Number(item.id) === Number(obj.id))){
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
        await axios.delete(`https://6228f848be12fc45389313b2.mockapi.io/favorite/${obj.id}`); 
      } else {
        const { data } = await axios.post('https://6228f848be12fc45389313b2.mockapi.io/favorite', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Ошибка при добавлении в закладки');
      console.error(error);
    };  
  };


  const onRemoveCartItem = async (id) => {
    try {
      setCartItems(cartItems.filter((item) => Number(item.id) !== Number(id)));
      await axios.delete(`https://6228f848be12fc45389313b2.mockapi.io/cart/${id}`);
    } catch (error) {
      alert('Ошибка при удалении товара из корзины')
      console.error(error);
    }
    
  };

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id));
  }

  const isFavoriteAdded = (id) => {
    return favorites.some(obj => Number(obj.parentId) === Number(id));
  }

  

  return (
    <AppContext.Provider 
    value={{ 
      items, 
      cartItems, 
      favorites, 
      isItemAdded, 
      isFavoriteAdded, 
      onAddToCart,
      setCartOpened, 
      setCartItems 
    }}>
      <div className="wrapper clear">

        <Drawer 
          onRemoveCart={onRemoveCartItem} 
          items={cartItems} 
          onClose={onClickOpenCart} 
          opened={cartOpened}/>

        <Header onClickCart={onClickOpenCart} />

        <Routes>
          <Route  path="/" element={
            <Home 
              items={items} 
              favorites={favorites} 
              searchValue={searchValue} 
              onChangeSearchInput={onChangeSearchInput} 
              onAddToCart={onAddToCart} 
              onAddToFavorite={onAddToFavorite} 
              cartItems={cartItems}
              isLoading={isLoading}
            />
          }/>

          <Route  path="/favorites" element={
            <Favorites  onAddToCart={onAddToCart}  onAddToFavorite={onAddToFavorite}/>
          }/>

          <Route  path="/orders" element={
            <Orders  />
          }/>

        </Routes>
      </div>
    </AppContext.Provider>
  );
};
export default App;
