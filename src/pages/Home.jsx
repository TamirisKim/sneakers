import Card from "../components/Card";



function Home({items, searchValue, setSearchValue, onChangeSearchInout, onAddToFavorites, onAddToCart}) {
    return (
        <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="" width={14} height={14} />
            {searchValue && (<img src="/img/close.svg" alt="" className="cu-p clean" onClick={() => setSearchValue('')}/>)}
            <input placeholder="Поиск ..." onChange={onChangeSearchInout} value={searchValue}/>
          </div>
        </div>

        <div className="d-flex flex-wrap sneakers">
          {items
          .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index}
            //   name={item.name}
            //   price={item.price}
            //   imgUrl={item.imgUrl}
              onClickLike={(obj) => onAddToFavorites(obj)}
              onClickPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}
        </div>
      </div>
    );
}

export default Home;