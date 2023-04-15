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
import { Module } from 'src/modules/entities/module.entity';
import { Step } from 'src/steps/entities/step.entity';

interface LessonCreationAttributes {
	title: string;
	moduleId: number;
}

@Table({ tableName: 'lessons', createdAt: false, updatedAt: false })
export class Lesson extends Model<Lesson, LessonCreationAttributes> {
	@ApiProperty({ description: 'ID урока', example: '1' })
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@ApiProperty({
		description: 'Название Урок',
		example: 'Урок 1 — Введение',
	})
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	title: string;

	@ForeignKey(() => Module)
	@Column({
		type: DataType.INTEGER,
	})
	moduleId: number;

	@BelongsTo(() => Module)
	module: Module;

	@HasMany(() => Step)
	modules: Step[];
}
