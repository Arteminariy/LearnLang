import { AppDispatch } from '@/store';
import { fetchLanguage, selectLanguage } from '@/store/languageReducer';
import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './LanguagePage.module.scss';
import ModuleCard from './components/ModuleCard/ModuleCard';
import { isArray } from 'util';

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
                <>
                    <h2 className={styles.language__name}>{language.title}</h2>
                    <p className={styles.language__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, non libero! Ut unde, quaerat exercitationem vel quibusdam nisi nostrum impedit illum? Quas voluptatibus ipsum asperiores, ex animi quo tempora eaque.</p>
                    <ul className={styles.language__modules}>
                        {isArray(language.modules) && (language.modules.length ? language.modules.map(module => {
                            return(
                                <ModuleCard key={module.id} module={module}/>
                            )
                        }) : <p>У данного языка нет модулей</p>)}
                    </ul>
                </>
			)}
		</>
	);
};

export default LanguagePage;
