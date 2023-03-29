import React from 'react'

export const calcTotalPrice = (items: ICartItemProps) => {
  return (
    state.totalPrice = state.items.reduce((sum, obj) => {
      return (obj.price * obj.count) + sum;
    }, 0)
  )
}
