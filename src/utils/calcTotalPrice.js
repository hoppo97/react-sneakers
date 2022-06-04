export const calcTotalPrice = (items) => {
  return items.reduce((sum, obj) => obj.price + sum, 0);
}