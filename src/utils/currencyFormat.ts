export const currencyFormat = (price: number) => {
  const currency = new Intl.NumberFormat('ar-MA', {
    style: 'currency',
    currency: 'MAD',
  })
  return currency.format(price)
}
