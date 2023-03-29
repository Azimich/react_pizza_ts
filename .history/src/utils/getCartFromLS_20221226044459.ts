
export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const 

  return data ? JSON.parse(data) : []
}
