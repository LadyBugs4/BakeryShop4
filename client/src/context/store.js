import React from 'react'
import axios from 'axios'
import ShopContext from './shop-context'
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from './reducers'
const GlobalState = props => {
  const [state, dispatch] = React.useReducer(shopReducer, {
    cart: [],
    products: []
  })
  const addProductToCart = product => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product })
    }, 700)
  }
  const removeProductFromCart = productId => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId })
    }, 700)
  }
  const useDataApi = (token, category) => {
    React.useEffect(() => {
     /// let didCancel = false
      const fetchData = async () => {
        dispatch({ type: FETCH_INIT })
        try {
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          }
          const bodyParameters = {
            category,
          }
          const result = await axios.post(
            `http://localhost:7000/api/categories`,
            bodyParameters,
            config,
          )
          if (result.status === 201) {
            dispatch({ type: FETCH_SUCCESS, products: result.data.data.products })
          }
        } catch (error) {
            dispatch({ type: FETCH_FAILURE })
        }
      }
      fetchData()
      }, [category])
    return state
  }
  return (
    <ShopContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        useDataApi: useDataApi,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  )
}
export default GlobalState