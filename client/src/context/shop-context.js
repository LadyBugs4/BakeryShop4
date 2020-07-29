import React from 'react'

export default React.createContext({
  products: [],
  cart: [],
  isLoading: false,
  isError: false,
  addProductToCart: product => {},
  removeProductFromCart: productId => {},
  useDataApi: (token, category) => {},
})
