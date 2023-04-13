import { BelongsTo, ForeignKey, HasMany, Model } from 'sequelize-typescript';
import { Column, DataType, Table } from 'sequelize-typescript';
import { LanguageLessonSteps } from 'src/language-lessons-steps/entities/language-lessons-step.entity';
import { LanguageModule } from 'src/language-modules/entities/language-module.entity';

interface LanguageLessonCreationAttributes {
	title: string;
}

@Table({ tableName: 'language-lessons' })
export class LanguageLesson extends Model<
	LanguageLesson,
	LanguageLessonCreationAttributes
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
		unique: true,
		allowNull: false,
	})
	title: string;

	@ForeignKey(() => LanguageModule)
	@Column({
		type: DataType.INTEGER,
	})
	modulesIds: number;

	@HasMany(() => LanguageLessonSteps)
	steps: LanguageLessonSteps[];

	@BelongsTo(() => LanguageModule)
	languageModule: LanguageModule;
}
