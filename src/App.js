import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';


const arr = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999', imgUrl:'/img/cros-1.jpg'},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: '15 600', imgUrl:'/img/cros-2.jpg'},
]

function App() {
const [cartOpened, setCartOpened] = React.useState(false)

  return (
    <div className="wrapper clear">
      {/* {cartOpened ? <Drawer  onClose = {() => setCartOpened(false)}/> : null} */}
      {cartOpened && <Drawer  onClose = {() => setCartOpened(false)}/> }
      <Header onClickCart = {() => setCartOpened(true)} />
      <div className="content p-40">

        <div className="mb-40 d-flex align-center justify-between">
        <h1>Все кроссовки</h1>
        <div className="search-block">
        <img src="/img/search.svg" alt="" width={14} height={14}/>
        <input placeholder="Поиск ..."/>
        </div>
        </div>
        
        <div className="d-flex flex-wrap sneakers">
         
        {arr.map((obj) =>(
        <Card 
        name={obj.name}
        price={obj.price}
        img={obj.imgUrl}
        onClickLike={() => console.log('Добавили с закладки')}
        onClickPlus={() => console.log('Добавили в корзину')}/>

        ))}

        </div>

      </div>
    </div>
  );
}

export default App;
