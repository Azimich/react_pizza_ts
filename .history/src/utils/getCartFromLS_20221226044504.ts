
export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = 

  return data ? JSON.parse(data) : []
}
