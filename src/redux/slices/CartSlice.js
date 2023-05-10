import { createSlice } from "@reduxjs/toolkit"


const initialState = {
	cartItems: [],
	
}

export const CartSlice = createSlice({
	name: 'cart',	
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex((item) => item.id ===action.payload.id);
			if (itemIndex === -1){
				state.cartItems.push(action.payload)
			}else{
				state.cartItems = state.cartItems.filter((_, i)=> i!==itemIndex )
				}
		},	
	},
})

export const { addToCart } = CartSlice.actions

export default CartSlice.reducer