import { configureStore } from '@reduxjs/toolkit'
import search from './slices/SearchSLice'
import cartSlice from './slices/CartSlice'

export const store = configureStore({
	reducer: {
		search,
		cartSlice
	},
})

