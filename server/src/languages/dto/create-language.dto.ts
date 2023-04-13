import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguageDto {
	@ApiProperty({ description: 'Название языка', example: 'Русский' })
	readonly title: string;
}
