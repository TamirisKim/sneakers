import stylees from './Card.module.scss';

function Card(props) {
    // const onClickPlus = () =>{alert(props.name)}

    return (
        <div className={stylees.cart}>
            <div className={stylees.like}>
                <img src="/img/like-unactive.svg" alt="" width={32} height={32}/>
            </div>
            <img src={props.img} alt="" width={133} height={112}/>
            <p>{props.name}</p>
            <div className="d-flex justify-between align-start">
                <div className="d-flex flex-column ">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="btn" onClick={props.onClick}><img src="/img/plus.svg" alt="" width={32} height={32}/></button>
          </div>
        </div>
        );
    }

export default Card;