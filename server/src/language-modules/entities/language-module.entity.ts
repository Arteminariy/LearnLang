import { ApiProperty } from '@nestjs/swagger';
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
	@ApiProperty({ description: 'ID языкового модуля', example: '1' })
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@ApiProperty({
		description: 'Заголовок языкового модуля',
		example: 'Модуль 1 — Введение',
	})
	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
	})
	title: string;

	@ForeignKey(() => Language)
	@Column
	languageId: number;

	@BelongsTo(() => Language)
	language: Language;

	@HasMany(() => LanguageLesson)
	lessons: LanguageLesson[];
}
