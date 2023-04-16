import axios from 'axios';
import IModule from 'src/types/IModule';

export const getModule = async (): Promise<IModule[]> => {
	return await axios.get(
		`${import.meta.env.VITE_SERVER_URL}/modules` ||
			`http://localhost:5000/api/modules`,
			{responseType: 'json'}
	).then(res => res.data);
};
