import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";


import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    // fetch('https://6399e68f16b0fdad774d67dc.mockapi.io/items')
    // .then((res) => {
    //   return res.json();
    // })
    // .then((json) => {
    //   setItems(json)
    // })
    axios.get('https://6399e68f16b0fdad774d67dc.mockapi.io/items').then((res) =>{
      setItems(res.data)
    })

    axios.get('https://6399e68f16b0fdad774d67dc.mockapi.io/cart').then((res) =>{
      setCartItems(res.data)
    })

    axios.get('https://6399e68f16b0fdad774d67dc.mockapi.io/favorites').then((res) =>{
      setFavorites(res.data)
    })
  }, []);

  const [cartItems, setCartItems] = React.useState([]);
  // const onAddToCart = (obj) => {
  //   setCartItems([...cartItems, obj])//но тут будут хрон старые данные, может выводить не корек данные
  // }
  const onAddToCart = (obj) => {
    axios.post('https://6399e68f16b0fdad774d67dc.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])//лучше аноним функ, которая будет брать конкрет состоянеи(создай новый масив , передай новые данные, замени на новый масив и передай в cartItems)
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://6399e68f16b0fdad774d67dc.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }


  const [searchValue, setSearchValue] = React.useState('');
  const onChangeSearchInout = (event) => {
    setSearchValue(event.target.value)
  }


  const [favorites, setFavorites] = React.useState([]);
  const onAddToFavorites = (obj) => {
    if(favorites.find(favObj => favObj.id === obj.id)){
      axios.delete(`https://6399e68f16b0fdad774d67dc.mockapi.io/favorites/${obj.id}`)
      setFavorites(prev => prev.filter(item => item.id !== obj.id))
    } else{
      axios.post('https://6399e68f16b0fdad774d67dc.mockapi.io/favorites', obj)
      setFavorites(prev => [...prev, obj])
    }
    
  }

  return (
    <div className="wrapper clear">
      {/* {cartOpened ? <Drawer  onClose = {() => setCartOpened(false)}/> : null} */}
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}  onRemove={onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)} />
     
      <Route path="/" exact>
        <Home 
        items={items} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        onChangeSearchInout={onChangeSearchInout}
        onAddToFavorites={onAddToFavorites}
        onAddToCart={onAddToCart}/>
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorites={onAddToFavorites}/>
      </Route>
     
      
    </div>
  );
}

export default App;
