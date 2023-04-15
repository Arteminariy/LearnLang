import { ApiProperty } from '@nestjs/swagger';
import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript';
import { Lesson } from 'src/lessons/entities/lesson.entity';

interface StepCreationAttributes {
	title: string;
	type: string;
	lessonId: number;
	content: string;
}

@Table({ tableName: 'steps', createdAt: false, updatedAt: false })
export class Step extends Model<Step, StepCreationAttributes> {
	@ApiProperty({ description: 'ID шага', example: '1' })
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@ApiProperty({
		description: 'Название шага',
		example: 'Теория',
	})
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	title: string;

	@ForeignKey(() => Lesson)
	@Column({
		type: DataType.INTEGER,
	})
	lessonId: number;

	@BelongsTo(() => Lesson)
	lesson: Lesson;
}
