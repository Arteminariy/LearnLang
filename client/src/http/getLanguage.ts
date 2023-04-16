import axios from 'axios';
import ILanguage from 'src/types/ILanguage';

export const getLanguages = async (): Promise<ILanguage[]> => {
	return await axios.get(
		`${import.meta.env.VITE_SERVER_URL}/languages` ||
			`http://localhost:5000/api/language`,
			{responseType: 'json'}
	).then(res => res.data);
};
