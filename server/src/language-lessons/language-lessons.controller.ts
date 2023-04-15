import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { LanguageLessonsService } from './language-lessons.service';
import { CreateLanguageLessonDto } from './dto/create-language-lesson.dto';
import { UpdateLanguageLessonDto } from './dto/update-language-lesson.dto';

@Controller('language-lessons')
export class LanguageLessonsController {
	constructor(
		private readonly languageLessonsService: LanguageLessonsService,
	) {}

	@Post()
	create(@Body() createLanguageLessonDto: CreateLanguageLessonDto) {
		return this.languageLessonsService.create(createLanguageLessonDto);
	}

	@Get()
	findAll() {
		return this.languageLessonsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.languageLessonsService.findOne(+id);
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateLanguageLessonDto: UpdateLanguageLessonDto,
	) {
		return this.languageLessonsService.update(+id, updateLanguageLessonDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.languageLessonsService.remove(+id);
	}
}
