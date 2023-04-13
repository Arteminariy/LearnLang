import { PartialType } from '@nestjs/swagger';
import { CreateLanguageLessonDto } from './create-language-lesson.dto';

export class UpdateLanguageLessonDto extends PartialType(CreateLanguageLessonDto) {}
