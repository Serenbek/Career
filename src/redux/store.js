import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import theme from './slices/ThemeSlice'
import reducer from './slices/CartSlice'
import search from './slices/SearchSLice'

const persistConfig = {
	key: 'root',
	storage,
}
const rootReducer = combineReducers({
	theme,
	reducer,
	search
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	theme: theme
})



export default store;
export const persistor = persistStore(store);