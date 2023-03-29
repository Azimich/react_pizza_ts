
export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? 

  return data ? JSON.parse(data) : []
}
