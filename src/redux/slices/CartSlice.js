import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		total: 0,
	},
	reducers: {
		addItem: (state, action) => {
			const item = action.payload;
			const existingItem = state.items.find((i) => i.id === item.id);

			if (existingItem) {
				existingItem.quantity++;
			} else {
				state.items.push({ ...item, quantity: 1 });
			}

			state.total += item.price;
		},
		removeItem: (state, action) => {
			const id = action.payload;
			const existingItem = state.items.find((i) => i.id === id);

			if (existingItem.quantity === 1) {
				state.items = state.items.filter((i) => i.id !== id);
			} else {
				existingItem.quantity--;
			}

			state.total -= existingItem.price;
		},
		clearCart: (state) => {
			state.items = [];
			state.total = 0;
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
