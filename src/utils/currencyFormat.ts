export const currencyFormat = (price: number) => {
  const currency = new Intl.NumberFormat('fr-MA', {
    style: 'currency',
    currency: 'MAD',
  })
  return currency.format(price).replace('MAD', 'DH')
}
