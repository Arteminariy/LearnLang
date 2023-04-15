import { ApiProperty } from '@nestjs/swagger';
import { HasMany, Model } from 'sequelize-typescript';
import { Column, DataType, Table } from 'sequelize-typescript';
import { Module } from 'src/modules/entities/module.entity';

interface LanguageCreationAttributes {
	title: string;
}

@Table({ tableName: 'languages', createdAt: false, updatedAt: false })
export class Language extends Model<Language, LanguageCreationAttributes> {
	@ApiProperty({ description: 'ID языка', example: '1' })
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@ApiProperty({ description: 'Название языка', example: 'Русский' })
	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
	})
	title: string;

	@HasMany(() => Module)
	modules: Module[];
}
