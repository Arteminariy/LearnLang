import { BelongsTo, ForeignKey, Model } from 'sequelize-typescript';
import { Column, DataType, Table } from 'sequelize-typescript';
import { LanguageLesson } from 'src/language-lessons/entities/language-lesson.entity';

interface LanguageLessonStepsCreationAttributes {
	title: string;
	type: string;
}

@Table({ tableName: 'language-lessons-steps' })
export class LanguageLessonSteps extends Model<
	LanguageLessonSteps,
	LanguageLessonStepsCreationAttributes
> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	type: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	title: string;

	@Column({
		type: DataType.TEXT,
		allowNull: false,
	})
	content: string;

	@ForeignKey(() => LanguageLesson)
	@Column({
		type: DataType.INTEGER,
	})
	lessonId: number;
}
