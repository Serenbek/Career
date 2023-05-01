import { createSlice } from '@reduxjs/toolkit'

const initialState ={
	theme: false
}

export const themeSlice = createSlice({
	name: 'darkMode',
	initialState,
	reducers :{
		switchTheme: (state) =>{
			state.theme = !state.theme
		},
	}
})

export const {switchTheme} = themeSlice.actions
export default themeSlice.reducer;