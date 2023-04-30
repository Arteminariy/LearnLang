import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { ILanguage } from '@/@types';
import { getAllLanguages } from '@/http';

interface LanguageState {
	languages: ILanguage[];
	loading: boolean;
	error: string | null;
}

const initialState: LanguageState = {
	languages: [],
	loading: false,
	error: null,
};

export const fetchLanguages = createAsyncThunk<ILanguage[]>(
	'languages/fetchLanguages',
	async () => {
		const data = await getAllLanguages();
		return data;
	}
);

export const languageSlice = createSlice({
	name: 'languages',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLanguages.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchLanguages.fulfilled, (state, action) => {
				state.languages = action.payload;
				state.loading = false;
			});
	},
});

// export const {} = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.languages.languages;

export default languageSlice.reducer;
