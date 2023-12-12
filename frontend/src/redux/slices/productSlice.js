import { createSlice } from '@reduxjs/toolkit'
import { addProduct, getProducts } from '../actions/product.action'
const initialState = { products: [] }

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(addProduct.fulfilled, (state,action) => ({
      ...state,
      products: [...state.products, action.payload]
    }))
    builder.addCase(getProducts.fulfilled,(state,action) => ({
      ...state,
      products: action.payload
    }))
  }
})


export default productSlice.reducer