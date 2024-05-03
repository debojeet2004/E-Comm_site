import { createSlice, current } from '@reduxjs/toolkit'


// const find_Itm_Index = (state, action) => {
//     return state.findIndex((itm) => itm.id === action.payload.id)
// }

export const wishSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addWishItem(state, action){
            // console.log("state",current(state));
            // console.log("payload",action.payload);
            const Exixting_item = state.find(
                item => item.id === action.payload.id
            );
            if(Exixting_item){
                return state.map((i) => {
                    if(i.id === Exixting_item.id){
                        alert("Product is already added")
                        return {...i}
                    }
                    return i
                })
            }
            return [...state, action.payload]
        },
        removeWishItem(state, action){
            console.log("state",current(state));
            const exixtingItem =  state.filter(itm => itm.id !== action.payload)
            return exixtingItem
        },
    }
})

export const {addWishItem, removeWishItem} = wishSlice.actions

export default wishSlice.reducer