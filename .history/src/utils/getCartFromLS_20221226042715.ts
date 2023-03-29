export const getCartFromLS = () => {
  return localStorage.setItem('cart') ? JSON.parse(); 
}
