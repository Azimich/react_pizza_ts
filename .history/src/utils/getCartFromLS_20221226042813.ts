export const getCartFromLS = () => {
  return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] 
}
