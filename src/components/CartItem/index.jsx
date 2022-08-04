import React from 'react'
import style from '../../scss/components/cart.module.scss' 

const CartItem = ({id, title, price, count, imageUrl, type}) => {
  return (
    <div className={style.cart}>
      <div className={style.item}>
        <div className={style.item_img}>
          <img src={imageUrl} alt="Pizza" />
        </div>
        <div className={style.item_info}>
          <h3>{title}gggggggggggggggggggggggggggg</h3>
          <p>{type}, 26 см.</p>
        </div>
        <div className={style.item_count}>
          <button className={style.button}>
            +
          </button>
          <b>{count}67</b>
          <button>
           -
          </button>
        </div>
        <div className={style.item_price}>
          <b>{price * count}23243.грн</b>
        </div>
        <div className={style.item_remove}>
          <button >
            Видалити
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem