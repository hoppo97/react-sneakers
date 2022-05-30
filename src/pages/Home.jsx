import React  from 'react';
import Card from '../components/Card';
import { fetchSneakers } from '../redux/slices/sneakersSlice';
import {sneakersReducer} from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';

function Home ({
  searchValue, 
  items, 
  onChangeSearchInput, 
  onAddToCart, 
  onAddToFavorite, 
  isLoading
}) {

  const dispatch = useDispatch();
  const sneakers = useSelector(state => state?.sneakersReducer?.sneakers);

  console.log(sneakers);

  React.useEffect(() => {
    dispatch(fetchSneakers());
  }, []);

  const renderItems = () => {
    const filtredItems = sneakers.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
        <Card  
          key={index}
          {...item}
          onPlus = {(obj) => onAddToCart(obj)}
          favorited = {false} 
          onFavorites = {(obj) => onAddToFavorite(obj)}
          loading={isLoading}
        />
      ))
  }

  return (
    <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40"> 
        {searchValue ?  <h1>Поиск по запросу: {searchValue}</h1>  : <h1>Все кроссовки</h1>}
            <div className="search-block d-flex">
                <img src="/img/search.svg" alt="Search" />
                <input placeholder="Поиск..." value={searchValue} onChange={onChangeSearchInput}/>
            </div>
        </div>

    <div className="d-flex flex-wrap justify-center">
      {renderItems()}
    </div>
  </div>);
}

export default Home;