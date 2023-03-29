export const getCartFromLS = () => {
  const data = 
  return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] 
}
