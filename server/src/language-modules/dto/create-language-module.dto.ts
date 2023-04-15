import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguageModuleDto {
	@ApiProperty({
		description: 'Название модуля языка',
		example: 'Модуль 1 — Введение',
	})
	readonly title: string;

	@ApiProperty({
		description: 'ID языка',
		example: '1',
	})
	readonly languageId: number;
}
