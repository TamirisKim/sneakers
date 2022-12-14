import React from 'react'
import styles from './Card.module.scss';

function Card(props) {
    // const onClickPlus = () =>{alert(props.name)}

    const [isAdded, setIsAdded] = React.useState(false)
    const onPlus = () => {
        //setIsAdded(true)
        setIsAdded(!isAdded)
    }

    return (
        <div className={styles.cart}>
            <div className={styles.like} onClick={props.onClickLike}>
                <img src="/img/like-unactive.svg" alt="" width={32} height={32}/>
            </div>
            <img src={props.img} alt="" width={133} height={112}/>
            <p>{props.name}</p>
            <div className="d-flex justify-between align-start">
                <div className="d-flex flex-column ">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <img src={isAdded ? "/img/btn-cheked.svg" : "/img/plus.svg"} alt="" onClick={onPlus} className="cu-p"/>
          </div>
        </div>
        );
    }

export default Card;