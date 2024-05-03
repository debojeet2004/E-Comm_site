import { createSlice, current } from '@reduxjs/toolkit'

const find_Itm_Index = (state, action) => {
    return state.findIndex((itm) => itm.id === action.payload.id)
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action){
            // console.log("state",current(state));
            // console.log("action",action)
            // console.log("action.payload",action.payload)
            const Existing_Itm = find_Itm_Index(state,action)
            (Existing_Itm !== -1) ? state[Existing_Itm].quantity += 1 : state.push({...action.payload, quantity: 1});

        },
        removeItem(state, action){
            const exixtingItem =  state.filter(itm => itm.id !== action.payload)
            return exixtingItem
        },
        increaseItem(state, action){
            // console.log("state",current(state));
            // console.log(action.payload);
            return state.map((cartItem) => {                                        
                if (cartItem.id === action.payload) {              
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem
        })
        },
        decreaseItem(state, action){
            return state.map((cartItem) => {                                        
                if (cartItem.id === action.payload) {              
                    return { ...cartItem, quantity: cartItem.quantity - 1 }
                }
                return cartItem
            }).filter((cartItem) => cartItem.quantity > 0)
        },

    }
})


export const {addItem, removeItem, decreaseItem, increaseItem} = CartSlice.actions

export default CartSlice.reducer