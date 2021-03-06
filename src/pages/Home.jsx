import React  from 'react';
import Card from '../components/Card';
import { fetchSneakers } from '../redux/slices/sneakersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems } from '../redux/slices/cartSlice';
import { fetchAsyncFavorites } from '../redux/slices/favoritesSlice';
import SkeletonComponent from '../components/Skeleton';
import { fetchAsyncOrders } from '../redux/slices/ordersSlice';

function Home () {
  const dispatch = useDispatch();
  const {sneakers, status, error} = useSelector(state => state?.sneakersReducer);
  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  };

  React.useEffect(() => {
    dispatch(fetchSneakers());
    dispatch(fetchCartItems());
    dispatch(fetchAsyncFavorites());
    dispatch(fetchAsyncOrders())
  }, []);

  const renderItems = () => {
    const filtredItems = sneakers.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    if( status === 'loading') return <SkeletonComponent />

    return filtredItems.map((item, index) => (
        <Card  
          key={item.id}
          {...item}
          favorited = {false} 
          loading={status}
        />
      ))
  };

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
      {error && <h2>Ошибка {error}</h2>}
      {renderItems()}
    </div>
  </div>);
}

export default Home;