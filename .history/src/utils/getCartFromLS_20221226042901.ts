export const getCartFromLS = () => {
  const data = localStorage.getItem('cart')
  return  ? JSON.parse(localStorage.getItem('cart')) : [] 
}
