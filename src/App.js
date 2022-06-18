import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
function App() {

  const [cartOpened, setCartOpened] = React.useState(false);
  
  const onClickOpenCart = () => {
    setCartOpened(!cartOpened)
  };


  return (
      <div className="wrapper clear">
        <Drawer 
          onClose={onClickOpenCart} 
          opened={cartOpened}
        />
        <Header onClickCart={onClickOpenCart} />

        <Routes>
          <Route  path="/" element={
            <Home />
          }/>

          <Route  path="/favorites" element={
            <Favorites />
          }/>

          <Route  path="/orders" element={
            <Orders />
          }/>
          
        </Routes>
      </div>
  );
};
export default App;
