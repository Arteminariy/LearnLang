import { IModule } from '@/@types';
import { FC } from 'react';
import styles from './ModuleCard.module.scss';

type IModuleCardProps = {
	module: IModule;
};

const ModuleCard: FC<IModuleCardProps> = ({ module }) => {
	return (
		<div className={styles.moduleCard}>
			<h3 className={styles.moduleCard__title}>{module.title}</h3>
			<p className={styles.moduleCard__description}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
				animi amet ipsa magnam consectetur, doloribus, cupiditate minima
				illum quae nisi dolore! Animi natus delectus est earum possimus
				autem quaerat sint.
			</p>
            <div className={styles.moduleCard__content}>
                Здесь должен выводиться список уроков, через map и компонент LessonCard(должен ссылаться на страницу с уроком)
            </div>
		</div>
	);
};

export default ModuleCard;
