import { ICartItemProps } from 'src/redux/slices/cartSlice';

export const calcTotalPrice = (items: ICartItemProps[]) => {
  return (
    items.reduce((sum, obj) => (obj.price * obj.count) + sum; 0)
  ) 
}
