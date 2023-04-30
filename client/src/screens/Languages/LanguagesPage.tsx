import { FC, useEffect } from 'react';
import styles from './LanguagesPage.module.scss';
import { useDispatch } from 'react-redux';
import { fetchLanguages } from '@/store/languageReducer';
import { AppDispatch } from '@/store';

const LanguagesPage: FC = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchLanguages());
	}, [dispatch]);
	return <ul></ul>;
};

export default LanguagesPage;
