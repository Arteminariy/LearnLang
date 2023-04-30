import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageReducer';

export const store = configureStore({
	reducer: {
		languages: languageReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
