import { ILanguage } from '@/@types';
import React, { FC } from 'react';
import styles from './LanguageCard.module.scss';
import Link from 'next/link';

type ILanguageCardProps = {
	language: ILanguage;
};

const LanguageCard: FC<ILanguageCardProps> = ({ language }) => {
	return (
		<Link className={styles.languageCard__link} href={`languages/${language.id}`}>
			<div className={styles.languageCard}>
				<h3 className={styles.languageCard__title}>{language.title}</h3>
				<div className={styles.languageCard__content}>
					<p className={styles.languageCard__content__param}>
						Количество модулей: {language.modules.length}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default LanguageCard;
