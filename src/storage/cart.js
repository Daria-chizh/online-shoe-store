export const saveCart = (items) => {
  localStorage.setItem('cart', JSON.stringify({ items }));
};

export const getCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart') || null);
  return cart ? cart.items : [];
};
