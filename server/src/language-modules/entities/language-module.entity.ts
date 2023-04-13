import { BelongsTo, ForeignKey, HasMany, Model } from 'sequelize-typescript';
import { Column, DataType, Table } from 'sequelize-typescript';
import { LanguageLesson } from 'src/language-lessons/entities/language-lesson.entity';
import { Language } from 'src/languages/entities/language.entity';

interface LanguageModuleCreationAttributes {
	title: string;
}

@Table({ tableName: 'language-modules' })
export class LanguageModule extends Model<
	LanguageModule,
	LanguageModuleCreationAttributes
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

	@ForeignKey(() => Language)
	@Column({
		type: DataType.INTEGER,
	})
	languageId: number;

	@ForeignKey(() => LanguageLesson)
	@HasMany(() => LanguageLesson)
	lessonsIds: LanguageLesson[];
}
