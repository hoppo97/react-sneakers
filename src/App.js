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

  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  console.log(favorites);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const [ favoritesResponse] = await Promise.all([
          axios.get('http://localhost:3001/cart'), 
          axios.get('http://localhost:3001/favorites'), 
        ]);
        setIsLoading(false)
        
        setFavorites(favoritesResponse.data);
        
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


  return (
    <AppContext.Provider 
    value={{ 
       
    }}>
      <div className="wrapper clear">
        <Drawer 
          onClose={onClickOpenCart} 
          opened={cartOpened}
        />
        
        <Header onClickCart={onClickOpenCart} />

        <Routes>
          <Route  path="/" element={
            <Home 
              favorites={favorites} 
              searchValue={searchValue} 
              onChangeSearchInput={onChangeSearchInput}           
              isLoading={isLoading}
            />
          }/>

          <Route  path="/favorites" element={
            <Favorites />
          }/>

          <Route  path="/orders" element={
            <Orders />
          }/>

        </Routes>
      </div>
    </AppContext.Provider>
  );
};
export default App;
