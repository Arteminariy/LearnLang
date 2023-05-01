import { ILesson } from '@/@types';
import { FC } from 'react';
import styles from './LessonCard.module.scss';

type ILessonCardProps = {
	lesson: ILesson;
};

const LessonCard: FC<ILessonCardProps> = ({ lesson }) => {

	return (
		<div className={styles.lessonCard}>
			<h3 className={styles.lessonCard__title}>{lesson.title}</h3>
			<p className={styles.lessonCard__description}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
				animi amet ipsa magnam consectetur, doloribus, cupiditate minima
				illum quae nisi dolore! Animi natus delectus est earum possimus
				autem quaerat sint.
			</p>
            <p className={styles.lessonCard__steps}>Шагов в этом уроке {lesson.steps.length}</p>
		</div>
	);
};

export default LessonCard;
