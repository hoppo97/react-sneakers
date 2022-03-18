import Card from '../components/Card';
function Home ({searchValue, items, onChangeSearchInput, onAddToCart, onAddToFavorite, cartItems}) {
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
      {console.log(cartItems, items)}
      {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
        <Card  
          key={item.id}
          {...item}
          onPlus = {(obj) => onAddToCart(obj)}
          onFavorites = {(obj) => onAddToFavorite(obj)}
          added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
          searchValue={searchValue}
        />
      ))}
    </div>
  </div>);
}

export default Home;