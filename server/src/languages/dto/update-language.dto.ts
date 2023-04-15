import { PartialType } from '@nestjs/mapped-types';
import { CreateLanguageDto } from './create-language.dto';
import { LanguageModule } from 'src/modules/entities/module.entity';

export class UpdateLanguageDto extends PartialType(CreateLanguageDto) {
	readonly title?: string;
	readonly modules?: LanguageModule[];
}
