import { PartialType } from '@nestjs/mapped-types';
import { CreateLanguageDto } from './create-language.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLanguageDto extends PartialType(CreateLanguageDto) {
	@ApiProperty({ description: 'Название языка', example: 'Русский' })
	readonly title?: string;
}
