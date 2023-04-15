import { ApiProperty } from '@nestjs/swagger';

export class CreateModuleDto {
	@ApiProperty({
		description: 'Название модуля',
		example: 'Модуль 1 — Введение',
	})
	readonly title: string;

	@ApiProperty({ description: 'ID языка', example: '1' })
	readonly languageId: number;

	@ApiProperty({ description: 'Тип языка', example: 'language' })
	readonly type: string;
}
