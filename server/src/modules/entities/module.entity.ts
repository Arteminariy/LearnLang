import { ApiProperty } from '@nestjs/swagger';
import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	HasMany,
	Model,
	Table,
} from 'sequelize-typescript';
import { Language } from 'src/languages/entities/language.entity';
import { Lesson } from 'src/lessons/entities/lesson.entity';

interface ModuleCreationAttributes {
	title: string;
	type: string;
	languageId: number;
}

@Table({ tableName: 'modules', createdAt: false, updatedAt: false })
export class Module extends Model<Module, ModuleCreationAttributes> {
	@ApiProperty({ description: 'ID модуля', example: '1' })
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@ApiProperty({
		description: 'Тип модуля',
		example: 'language',
	})
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	type: string;

	@ApiProperty({
		description: 'Название модуля',
		example: 'Модуль 1 — Введение',
	})
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	title: string;

	@ForeignKey(() => Language)
	@Column({
		type: DataType.INTEGER,
	})
	languageId: number;

	@BelongsTo(() => Language)
	language: Language;

	@HasMany(() => Lesson)
	modules: Lesson[];
}
