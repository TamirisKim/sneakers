function Card() {
    return (
        <div className="cart">
            <div className="like">
                <img src="/img/like-unactive.svg" alt="" width={32} height={32}/>
            </div>
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
        );
    }

export default Card;