import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonDto {
	@ApiProperty({
		description: 'Название урока',
		example: 'Урок 1 — Введение',
	})
	title: string;
	@ApiProperty({ description: 'ID модуля', example: '1' })
	moduleId: number;
}
