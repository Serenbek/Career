import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: '',
	open: false
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.value = action.payload
		},
		setOpen: (state) =>{
			state.open = true
		}
	},
})

export const { setSearch, setOpen } = searchSlice.actions

export default searchSlice.reducer