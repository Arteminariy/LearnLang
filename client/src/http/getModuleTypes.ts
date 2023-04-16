import axios from 'axios';
import IModuleType from 'src/types/IModuleType';

export const getModuleType = async (): Promise<IModuleType[]> => {
	return await axios.get(
		`${import.meta.env.VITE_SERVER_URL}/module-types` ||
			`http://localhost:5000/api/module-types`,
			{responseType: 'json'}
	).then(res => res.data);
};
