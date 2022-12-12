

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src="/img/logo.png" width={40} height={40} alt=""/>
        <div>
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex ">
        <li className="mr-30">
        <img src="/img/cart-icon.svg" width={18} height={18} alt=""/>
          <span>1205 руб.</span>
        </li>
        <li>
        <img src="/img/favorite-icon.svg" width={18} height={18} alt=""/>
        <img src="/img/user-icon.svg" width={18} height={18} alt=""/>
        </li>
      </ul>
      </header>

      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        
        <div className="d-flex flex-wrap sneakers">
          <div className="cart">
            <img src="/img/cros-1.jpg" alt="" width={133} height={112}/>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-start">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="btn"><img src="/img/plus.svg" alt="" width={32} height={32}/></button>
            </div>
          </div>
          
   

        </div>

      </div>
    </div>
  );
}

export default App;
