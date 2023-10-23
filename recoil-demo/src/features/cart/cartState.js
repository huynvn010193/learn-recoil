import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cart",
  default: [],
});

export const cartTotal = selector({
  key: 'cartTotal',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total,item) => {
      return total + (item.product.price * item.quantity);
    },0)
  }
})

export const addToCart = (card, product) => {
  const newCart = [...card];
  const foundIndex = card.findIndex((x) => x.id === product.id);
  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...card[foundIndex],
      quantity: card[foundIndex].quantity + 1,
    };
    return newCart;
  }
  newCart.push({
    id: product.id,
    product,
    quantity: 1,
  });
  return newCart;
};
