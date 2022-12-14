import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://6399e68f16b0fdad774d67dc.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json)
    })
  });

  const [cartItems, setCartItems] = React.useState([]);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj])//но тут будут хрон старые данные, может выводить не корек данные
  }
  // const onAddToCart = (obj) => {
  //   setCartItems(prev => [...prev, obj])//лучше аноним функ, которая будет брать конкрет состоянеи(создай новый масив , передай новые данные, замени на новый масив и передай в cartItems)
  // }

  return (
    <div className="wrapper clear">
      {/* {cartOpened ? <Drawer  onClose = {() => setCartOpened(false)}/> : null} */}
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="" width={14} height={14} />
            <input placeholder="Поиск ..." />
          </div>
        </div>

        <div className="d-flex flex-wrap sneakers">
          {items.map((item) => (
            <Card
              name={item.name}
              price={item.price}
              imgUrl={item.imgUrl}
              onClickLike={() => console.log("Добавили с закладки")}
              onClickPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
