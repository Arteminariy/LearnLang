import { PartialType } from '@nestjs/mapped-types';
import { CreateLanguageDto } from './create-language.dto';
import { LanguageModule } from 'src/language-modules/entities/language-module.entity';

export class UpdateLanguageDto extends PartialType(CreateLanguageDto) {
	readonly title?: string;
	readonly modules?: LanguageModule[];
}
