import { PartialType } from '@nestjs/swagger';
import { CreateLanguageModuleDto } from './create-language-module.dto';

export class UpdateLanguageModuleDto extends PartialType(CreateLanguageModuleDto) {}
