import { FC, useEffect } from 'react';
import styles from './LanguagesPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLanguages, selectLanguage } from '@/store/languageReducer';
import { AppDispatch } from '@/store';
import LanguageCard from './components/LanguageCard/LanguageCard';

const LanguagesPage: FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const languages = useSelector(selectLanguage);

	useEffect(() => {
		dispatch(fetchLanguages());
	}, [dispatch]);
	return (
		<ul className={styles.languagesList}>
			{languages.map((language) => (
				<li key={language.id}>
					<LanguageCard language={language} />
				</li>
			))}
		</ul>
	);
};

export default LanguagesPage;
