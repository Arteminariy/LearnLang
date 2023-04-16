import { ApiProperty } from '@nestjs/swagger';

export class CreateModuleTypeDto {
	@ApiProperty({
		description: 'Название типа модулей',
		example: 'language',
	})
	readonly title: string;

	@ApiProperty({ description: 'ID языка', example: '1' })
	readonly languageId: number;
}
