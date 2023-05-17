import { createSlice } from "@reduxjs/toolkit"


const initialState = {
	cartItems: [],
	favorites:[]
}

export const CartSlice = createSlice({
	name: 'cart',	
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex((item) => item.id ===action.payload.id);
			if (itemIndex === -1){
				state.cartItems.push(action.payload,)

			}else{
				state.cartItems = state.cartItems.filter((_, i)=> i!==itemIndex )
				}
		},	
	},
		addFavorite: (state, action) => {
			const id = action.payload;
			if (!state.favorites.includes(id)) {
				state.favorites.push(id);
			}
		},
		removeFavorite: (state, action) => {
			const id = action.payload;
			const index = state.favorites.indexOf(id);
			if (index !== -1) {
				state.favorites.splice(index, 1);
			}
		}
})

export const { addToCart, addFavorite, removeFavorite } = CartSlice.actions

export default CartSlice.reducer