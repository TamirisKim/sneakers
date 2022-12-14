function Drawer({onClose, items = []}) {
    return (
      <div className="overlay" >
      <div className="drawer">
        <h2 className="mb-20 d-flex align-center justify-between">Корзина 
        <img src="/img/close.svg" alt="" width={32} height={32} className="cu-p" onClick={onClose}/></h2>

        <div className="items">
        {
          items.map((obj) =>
          <div className="cartItem d-flex align-center" >
            <img src={obj.imgUrl} alt="" width={70} height={70} className="mr-20"/>
            <div className="mr-10">
              <p>{obj.name}</p>
              <b>{obj.price} руб.</b>
            </div>
            <img src="/img/close.svg" alt="" width={32} height={32} className="cu-p"/>
          </div>
          )
        }

      
        </div>

        <div className="cartTotalBlock">
        <ul >
          <li >
            <span>Итого: </span>
            <div></div>
            <b>21 498 руб. </b>
          </li>
          <li >
            <span>Налог 5%: </span>
            <div></div>
            <b>1074 руб. </b>
          </li>
        </ul>
        <button className="greanBtn">Оформить заказ</button>
        </div>
        
      </div>
    </div>
        );
    }

export default Drawer;