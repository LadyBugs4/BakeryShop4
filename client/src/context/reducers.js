export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const FETCH_INIT = 'FETCH_INIT'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex(item => item._id === product._id)

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 })
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    }
    updatedItem.quantity++
    updatedCart[updatedItemIndex] = updatedItem
  }
  return { ...state, cart: updatedCart }
}

const removeProductFromCart = (productId, state) => {
  console.log('Removing product with id: ' + productId)
  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex(item => item._id === productId)

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  }
  updatedItem.quantity--
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1)
  } else {
    updatedCart[updatedItemIndex] = updatedItem
  }
  return { ...state, cart: updatedCart }
}

const fetchProducts = (products, state) => {
  return { ...state, products }
}

export const shopReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case FETCH_SUCCESS:
      // return {
      //   ...state,
      //   isLoading: false,
      //   isError: false,
      //   products: action.payload,
      //   fetchProducts
      // }
      return fetchProducts(action.products, state)
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case ADD_PRODUCT:
      return addProductToCart(action.product, state)
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state)
    default:
      return state
  }
}
