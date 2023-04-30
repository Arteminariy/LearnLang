import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { ILanguage } from '@/@types';
import { getAllLanguages, getLanguage } from '@/http';

interface LanguageState {
	languages: ILanguage[];
	language: ILanguage | null;
	selectedId: number | null;
	loading: boolean;
	error: string | null;
}

const initialState: LanguageState = {
	languages: [],
	language: null,
	selectedId: null,
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

export const fetchLanguage = createAsyncThunk<ILanguage, number>(
	'languages/fetchLanguage',
	async (id) => {
		const data = await getLanguage(id);
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
			})
			.addCase(fetchLanguage.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchLanguage.fulfilled, (state, action) => {
				state.language = action.payload;
				state.selectedId = action.payload.id;
				state.loading = false;
			})
			.addCase(fetchLanguage.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'error occurred';
			});
	},
});

// export const {} = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.languages.language;
export const selectLanguages = (state: RootState) => state.languages.languages;

export default languageSlice.reducer;
