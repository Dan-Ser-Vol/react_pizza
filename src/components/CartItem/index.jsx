import React from 'react'
import style from '../../scss/components/cart.module.scss' 

import { addItem, removeItem, minusItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({id, title, price, count, imageUrl, type, sizes}) => {

const dispatch = useDispatch();

const onClickPlus = () => {
dispatch(addItem({id}))
}

const onClickMinus = () => {
  dispatch(minusItem(id));
};

const onClickRemove = () => {
  if(window.confirm("Are you sure that you want to remove?")){
    dispatch(removeItem(id))
  }
};


  return (
    <div className={style.cart_pizza}>
      <div className={style.item}>
        <div className={style.item_img}>
          <img src={imageUrl} alt="Pizza" />
        </div>
        <div className={style.item_info}>
          <h3>{title}</h3>
          <p>{type}, {sizes} см.</p>
        </div>
        <div className={style.item_count}>
          <button onClick={onClickMinus}>-</button>
          <b>{count}</b>
          <button onClick={onClickPlus}>+</button>
        </div>
        <div className={style.item_price}>
          <b>{price * count}.грн</b>
        </div>
        <div className={style.item_remove}>
          <button onClick={onClickRemove}>Видалити</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem