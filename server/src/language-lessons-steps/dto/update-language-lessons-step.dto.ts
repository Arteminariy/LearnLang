import { PartialType } from '@nestjs/swagger';
import { CreateLanguageLessonsStepDto } from './create-language-lessons-step.dto';

export class UpdateLanguageLessonsStepDto extends PartialType(CreateLanguageLessonsStepDto) {}
