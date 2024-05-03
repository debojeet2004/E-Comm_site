import { createSlice, current } from '@reduxjs/toolkit'

export const ProductPageSlice = createSlice({
    name: 'ProductPage',
    initialState: [],
    reducers: {
        Product(state, action) {
            // console.log("state",current(state));
            // console.log([action.payload]);
            return [action.payload]
        }
    }
})

export const {Product} = ProductPageSlice.actions

export default ProductPageSlice.reducer