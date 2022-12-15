import React from 'react'
import styles from './Card.module.scss';

function Card({id, name, price, imgUrl, onClickLike, onClickPlus, favorited }) {
    // const onClickPlus = () =>{alert(props.name)}

    const [isAdded, setIsAdded] = React.useState(false)
    const [isLike, setIsLike] = React.useState(favorited)
    const onPlus = () => {
        //setIsAdded(true)
        setIsAdded(!isAdded)
        onClickPlus({name, price, imgUrl})
    }
    const onLike = () => {
        setIsLike(!isLike)
        onClickLike({id, name, price, imgUrl})
    }

    return (
        <div className={styles.cart}>
            <div className={styles.like} >
                <img src={isLike ? "/img/imglike-unactive.svg" : "/img/like-unactive.svg"} onClick={onLike} alt="" width={32} height={32}/>
            </div>
            <img src={imgUrl} alt="" width={133} height={112}/>
            <p>{name}</p>
            <div className="d-flex justify-between align-start">
                <div className="d-flex flex-column ">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img src={isAdded ? "/img/btn-cheked.svg" : "/img/plus.svg"} alt="" onClick={onPlus} className="cu-p" />
          </div>
        </div>
        );
    }

export default Card;