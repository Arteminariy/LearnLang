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
import { Module } from 'src/modules/entities/module.entity';

interface ModuleTypeCreationAttributes {
	title: string;
	languageId: number;
}

@Table({ tableName: 'moduleTypes', createdAt: false, updatedAt: false })
export class ModuleType extends Model<
	ModuleType,
	ModuleTypeCreationAttributes
> {
	@ApiProperty({ description: 'ID типа модуля', example: '1' })
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@ApiProperty({
		description: 'Название типа модуля',
		example: 'language',
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

	@HasMany(() => Module)
	modules: Module[];
}
