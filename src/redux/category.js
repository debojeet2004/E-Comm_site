import { createSlice, current } from '@reduxjs/toolkit'


export const CategorySlice = createSlice({
    name: 'category',
    initialState: [],
    reducers: {
        fetchItems(state, action){
            return action.payload
        }
    },
})

export const {fetchItems} = CategorySlice.actions

export default CategorySlice.reducer