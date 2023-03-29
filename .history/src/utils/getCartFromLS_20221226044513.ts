
export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON,

  return data ? JSON.parse(data) : []
}
