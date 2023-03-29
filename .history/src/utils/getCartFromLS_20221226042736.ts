export const getCartFromLS = () => {
  return localStorage.setItem('cart') ? JSON.parse(localStorage.getItem('cart')); 
}
