import { configureStore } from '@reduxjs/toolkit'
import theme from './slices/ThemeSlice'

export const store = configureStore({
	reducer: {
theme: theme
	},
})