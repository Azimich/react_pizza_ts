import React from 'react'

export const calcTotalPrice = () => {
  return (
    state.totalPrice = state.items.reduce((sum, obj) => {
      return (obj.price * obj.count) + sum;
      }, 0)
  )
}
