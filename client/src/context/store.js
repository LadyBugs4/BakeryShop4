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
import categories from '../component/categories'

const GlobalState = props => {
  const [state, dispatch] = React.useReducer(shopReducer, {
    products: [],
    cart: [],
    isLoading: false,
    isError: false,
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

  const fetchProducts = async (token, category) => {
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

  return (
    <ShopContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        isLoading: state.isLoading,
        isError: state.isError,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        fetchProducts: fetchProducts,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  )
}

export default GlobalState
