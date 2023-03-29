import React from 'react'

export const calcTotalPrice = (items: Cart) => {
  return (
    state.totalPrice = state.items.reduce((sum, obj) => {
      return (obj.price * obj.count) + sum;
    }, 0)
  )
}
