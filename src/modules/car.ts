export const car: {
  brand: string,
  model: string,
  generation: string,
  country: string,
  price: number,
  color: string,
  rating: [string, number][]
} = {
  brand: 'Lexus',
  model: 'GX550',
  generation: 'III',
  country: 'Japan',
  price: 60_000,
  color: 'white',
  rating: [
    ['performance', 9.0],
    ['comfort', 8.8],
    ['interior', 8.9],
    ['technology', 9.3],
    ['storage', 9.0],
    ['fuelEconomy', 6.4],
    ['value', 8.5],
    ['wildcard', 8.7],
  ],
};