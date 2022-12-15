import Card from "../components/Card";



function Favorites({items, onAddToFavorites}) {
    return (
        <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Мои закладки</h1>
   
        </div>

        <div className="d-flex flex-wrap sneakers">
        {items
          .map((item, index) => (
            <Card
              key={index}
              favorited={true}
              onFavorites={onAddToFavorites}
              {...item}
            />
          ))}
        </div>
      </div>
    );
}

export default Favorites;