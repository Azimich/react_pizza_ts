import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { clearItem } from '../redux/slices/cartSlice';
import CartEmpty from '../components/CartEmpty';

const Cart = () => {

  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm('Прошу, не удали пиццы, мразь 😒')) {
      dispatch(clearItem());
    }
  }

  if (!totalPrice) {
    return <CartEmpty />
  } 

   return (
    <>
      { totalPrice &&
      }
    </>

  )
}

export default Cart;
