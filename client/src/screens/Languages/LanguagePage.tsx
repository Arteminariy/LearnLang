import { AppDispatch } from '@/store';
import { fetchLanguage, selectLanguage } from '@/store/languageReducer';
import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './LanguagePage.module.scss';

type ILanguagePageProps = {
	languageId: number;
};

const LanguagePage: FC<ILanguagePageProps> = () => {
	const { asPath } = useRouter();

	const id = asPath.split('/')[2];

	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(fetchLanguage(Number(id)));
	}, [dispatch, id]);

	const language = useSelector(selectLanguage);

	return (
		<>
			{language && (
				<h2 className={styles.language__name}>{language.title}</h2>
			)}
		</>
	);
};

export default LanguagePage;
