export const getCartFromLS = () => {
  const data = localStorage.getItem('cart')
  return data
}
