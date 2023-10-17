export const currencyFormat = (val: number) => {
  const intl = new Intl.NumberFormat("pt", {
    style: "currency",
    currency: "BRL",
  });
  return intl.format(val);
};
